# Testes de Software

## 6.1 Estratégia de Testes

A estratégia de testes do projeto foi definida para garantir a qualidade, funcionalidade e usabilidade do aplicativo web, considerando as especificações de um catálogo digital de espécies ameaçadas do Cerrado.


## Níveis de Testes Abordados

### Testes Unitários

- Validação de funções individuais do back-end (TypeScript)
- Testes de componentes React isolados
- Verificação de consultas SQL e operação do banco de dados
- Validação de funções de filtro e busca

### Testes de Integração
- Comunicação entre front-end (React) e back-end(TypeScript)
- Integração com o banco de dados Supabase
- Conectividade entre diferentes módulos da aplicação
- Testes de APIs internas

### Testes de Sistema
- Funcionamento completo da aplicação web
- Navegação entre páginas e funcionalidades
- Performance geral do sistema
- Fluxos de navegação e experiência do usuário

## Tipos de Testes Abordados

### Testes Funcionais
- Funcionalidades de busca e filtro de espécies
- Visualização de fichas técnicas dos animais
- Navegação responsiva
- Sistema de categorização por nível de ameaça

### Testes Não Funcionais (EXTRA)
- Performance: Tempo de carregamento de páginas e consultas
- Responsividade: Adaptação a diferentes tamanhos de tela
- Segurança: Validação de entrada de dados e proteção contra ataques
- Usabilidade: Interface intuitiva e experiência do usuário
- Compatibilidade: Funcionamento em diferentes navegadores (Chrome, Firefox, Safari, Edge)

## Ambientes de Testes Usados

### Ambiente de Desenvolvimento
- Sistema local dos desenvolvedores
- Banco de dados de desenvolvimento com dados sintéticos
- Utilizado para testes unitários e de integração iniciais

### Ambiente de Teste/Homologação
- Servidor de testes com configuração similar ao ambiente de produção
- Base de dados de homologação com amostra representativa
- Ambiente para testes de sistema e aceitação

### Ambiente de Produção (Testes de Aceitação)
- Testes de aceitação pelo usuário final

### Formas de Análise dos Testes Propostos
#### Métricas de Cobertura
- Cobertura de código mínima de 80% para testes unitários
- Cobertura de 100% para requisitos críticos
- Cobertura de 70% para testes de integração

### Análise de Defeitos
- Classificação com criticidade (crítico, alto, médio, baixo)
- Rastreabilidade entre defeitos e requisitos
- Taxa de reincidência de defeitos

### Relatórios de Teste
- Relatórios de execução de testes por sprint
- Dashboards de métricas de qualidade
- Documentação de lições aprendidas

<!-- 
Colocar aqui a tabela 15 - de Roteiro de Testes
-->

### Registro de Execução dos Testes
Para cada teste executado, será registrado:

### Informações de Execução
- Data/hora da execução
- Responsável pela execução
- Ambiente utilizado
- Versão da aplicação testada

### Resultados
- Status: Aprovado/Reprovado/Bloqueado
- Evidências objetivas (screenshots, logs, vídeos)
- Tempo de execução
- Observações relevantes

### Gestão de Defeitos
Defeitos identificados
Severidade e prioridade
Responsável pela correção
Status de correção

### Ciclos de Teste
Número de execuções necessárias
Motivos de reexecução
Resultados de cada ciclo

## Critérios de Aprovação Geral

### Para Release
- 100% dos testes críticos aprovados
- 95% dos testes de alta prioridade aprovados
- Zero defeitos críticos em aberto
- Performance dentro dos padrões estabelecidos

### Para Sprint
- Todos os testes relacionados às funcionalidades da sprint aprovados
- Testes de regressão executados e aprovados
- Documentação de testes atualizada



