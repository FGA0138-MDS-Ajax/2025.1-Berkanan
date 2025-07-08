# MÉTRICAS E MEDIÇÕES

## GQM de medições

**Objetivo:**
Desenvolver um software que comunique efetivamente dados sobre espécies em risco de extinção no Cerrado brasileiro, maximizando o engajamento do usuário e a confiabilidade das informações apresentadas.

### Tabela 11 – GQM Medições

| ID | Objetivo | Descrição |
| :-: | :-----: | :-------: |
| G1 | Eficácia do Engajamento | Avaliar se o software consegue atrair e manter o interesse dos usuários no conteúdo sobre espécies em risco de extinção |
| G2 | Eficiência do Desenvolvimento | Aferir se o que há para ser desenvolvido x o que há para desenvolver pode ser desenvolvido em tempo hábil de entrega (percentual de trabalho desenvolvido x tempo restante para entrega) | 
| G3 || Credibilidade Científica || Garantir que as informações apresentadas são confiáveis e bem fundamentadas |


### Questões:
**G1**
- Como maximizar o engajamento dos usuários com o conteúdo?
    - Taxa de engajamento inicial;
    - Tempo médio de permanência;
    - Taxa de retorno;
- Os dados estão sendo apresentados de forma atrativa?
    - Tela de introdução receptiva;
    - Dados mostradas de uma forma chamativa;

**G2**
- Plano de Distribuição de Tempo
#### Tabela 12 – Plano de Distribuição de Tempo

| Fase | Duração Mínima | Entregáveis Principais |
| :--: | :------------: | :--------------------: |
| Pesquisa | 1 Sprint | Base de dados de espécies com fontes verificadas |
| Desenvolvimento | 2-3 Sprints | Interface de usuário e funcionalidades core |
| Teste | 1 Sprint | Validação de usabilidade e precisão científica |
| Refinamento | 1 Sprint | Ajustes baseados no feedback de testes |

**G3**
- Como assegurar a credibilidade das informações?
    - Todas fontes indicadas em uma aba do site;
    - Atualidade das fontes;
    - Completude das referências;

### Métricas Associadas às Questões

#### Tabela 13 – Métricas Associadas

| Versão | Data |
| :----: | :--: |
| Nome da Métrica | Definição |
| Taxa de Conversão da Tela Inicial | Percentual de usuários que navegam além da tela de introdução |
| Tempo de Permanência | Duração média que usuários permanecem explorando os dados |
| Velocidade de Desenvolvimento | Número de funcionalidades implementadas por sprint |
| Produtividade de Pesquisa | Quantidade de espécies catalogadas por dia de pesquisa |
| Cobertura de Referenciação | Percentual de informações que possuem fonte científica citada |

### Detalhamento das Métricas

#### Tabela 14 – Detalhamento das Métricas

| Definição | Cálculo | Unidade | Meta | Análise |
| :----: | :--: | :--------------------: | :-------------------: | :-----:|
| Usuários que passam da tela inicial | (Usuários navegando ÷ Total acessos) × 100 | % | ≥70% | Gráfico semanal |
| Tempo médio explorando dados | Tempo total ÷ Nº sessões | Minutos | ≥3min | Gráfico temporal |
| Stories concluídas por sprint | Stories finalizadas ÷ Semanas | Stories/sem | ≥8 | Burndown chart |
| Espécies catalogadas por dia | Espécies documentadas ÷ Dias | Espécies/dia | ≥5 | Gráfico controle |
| Informações com fonte científica | (Info c/ referência ÷ Total info) × 100 | % | 100% | Checklist auditoria |