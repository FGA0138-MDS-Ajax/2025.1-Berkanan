import { describe, it, expect, spyOn, afterEach } from 'bun:test';
import { LOG, LOG_ERR } from '../../../src/utils/logger.util';

// Espiões para mockar as saídas do console
const logSpy = spyOn(console, 'log');
const errorSpy = spyOn(console, 'error');

// Limpa os espiões após cada teste para não interferirem um no outro
afterEach(() => {
  logSpy.mockClear();
  errorSpy.mockClear();
});

describe('Logger Util', () => {
  describe('LOG function', () => {
    it('deve chamar console.log com a mensagem formatada', () => {
      const message = 'Servidor iniciado';
      LOG(message);

      // Verifica se console.log foi chamado uma vez
      expect(logSpy).toHaveBeenCalledTimes(1);
      
      // Verifica se a mensagem contém o texto original
      const callArg = logSpy.mock.calls[0][0];
      expect(callArg).toContain(message);
    });

    it('deve incluir o timestamp no formato correto', () => {
      LOG('Teste de timestamp');
      const callArg = logSpy.mock.calls[0][0];
      
      // Usa uma expressão regular para verificar a presença de um timestamp
      // Ex: [2025-07-08 19:42:15]
      const timestampRegex = /\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]/;
      expect(callArg).toMatch(timestampRegex);
    });

    it('deve formatar corretamente os argumentos de contexto', () => {
      const message = 'Conexão com o banco';
      const context1 = 'Database';
      const context2 = 'Init';
      LOG(message, context1, context2);

      const callArg = logSpy.mock.calls[0][0];
      expect(callArg).toContain(`[${context1}]`);
      expect(callArg).toContain(`[${context2}]`);
      expect(callArg).toContain(message);
    });
  });

  describe('LOG_ERR function', () => {
    it('deve chamar console.error com a mensagem de erro', () => {
      const errorMessage = 'Falha ao conectar';
      LOG_ERR(errorMessage);

      // Verifica se console.error foi chamado uma vez
      expect(errorSpy).toHaveBeenCalledTimes(1);

      // Verifica se a chamada inclui a mensagem de erro
      const callArgs = errorSpy.mock.calls[0];
      expect(callArgs.join(' ')).toContain(errorMessage);
    });
    
    it('deve incluir o prefixo [ERROR - timestamp] na mensagem', () => {
        LOG_ERR('Erro de teste');

        // O primeiro argumento deve ser o prefixo
        const prefixArg = errorSpy.mock.calls[0][0];
        expect(prefixArg).toStartWith('\x1b[31m[ERROR -');
        expect(prefixArg).toContain(']\x1b[0m');
    });
  });
});