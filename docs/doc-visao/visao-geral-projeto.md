# Visão Geral do Projeto

## 2.1 Ciclo de vida do projeto de desenvolvimento de software

O projeto CerraDex seguirá um ciclo de vida baseado na abordagem iterativa e incremental, alinhado aos princípios das metodologias ágeis de desenvolvimento de software. O modelo adotado será o Scrum, pois permite uma entrega contínua de valor, rápida adaptação a mudanças e maior envolvimento dos stakeholders ao longo do desenvolvimento. A escolha por Scrum também se justifica pela previsibilidade das entregas e facilidade de inspeção e revisão, além da adaptabilidade conferida pelo modelo, permitindo ajustes contínuos baseados na demanda do cliente.

A estrutura do projeto será organizada em sprints semanais, cada uma com backlog definido, metas claras e objetivos específicos. O ciclo de vida completo do projeto contará com as seguintes fases:
- Definição inicial e conceituação do produto;
- Desenvolvimento do MVP;
- Desenvolvimento iterativo das funcionalidades principais;
- Testes de validação;
- Entrega de Checkpoints semanais, após o desenvolvimento da sprint;
- Entrega final com documentação completa.

Cada iteração contemplará as atividades de planejamento (planejamento de sprints); execução técnica; reuniões três vezes na semana (checagem de desenvolvimento e definição de nova sprint); daily dividida por subgrupo, com foco em entender o progresso diário; revisão da sprint, para análise de erro e possível débito técnico.

O modelo incremental favorece a entrega de versões progressivamente mais completas do produto, permitindo uma validação contínua das funcionalidades com o cliente. Essa estratégia visa mitigar possíveis riscos de refatoração ou descarte de desenvolvimentos errôneos, e assegura que o produto final esteja alinhado às reais necessidades dos usuários e aos objetivos prescritos no documento.

O ciclo será encerrado com a entrega final do catálogo funcional, hospedado na web e acompanhado por documentação técnica, relatório de testes e validação.

## 2.2 Organização do Projeto

### Tabela 4 - Organização do Projeto

| Papel | Atribuições | Responsável | Participantes |
| :---: | :---------: | :---------: | :-----------: |
| Desenvolvedor Front-End | Estruturar e estilizar o painel visível para o usuário, dando dinamicidade e interatividade. | Breno Lourenço Teixeira, Bruno Barbosa Schirmbeck, Marcos Filho Pereira Quixabeira, Manuella Dal Bianco Perlin Almeida. | Breno Lourenço Teixeira, Bruno Barbosa Schirmbeck, Marcos Filho Pereira Quixabeira, Manuella Dal Bianco Perlin Almeida. |
| Desenvolvedor Back-End | Codificar toda a lógica, o “cérebro” da aplicação, usando funções, variáveis. | João Victor Mello da Costa Bruno, Ricardo Lucas Winchello Vieira Branco. | João Victor Mello da Costa Bruno, Ricardo Lucas Winchello Vieira Branco. |
| Desenvolvedor Full-stack | Conectar as áreas de back-end e front-end. | Davi Rodrigues Nunes, Lucas Mateus Teixeira de Souza, Paulo Victor Mendes Silva, Thiago Viriato Accioly. | Davi Rodrigues Nunes, Lucas Mateus Teixeira de Souza, Paulo Victor Mendes Silva, Thiago Viriato Accioly. |
| Desenvolvedor Banco de Dados | Estruturar tabelas com atributos e tuplas que irão armazenar dados vindos do projeto. | Eduardo Oliveira Valadares, Gustavo Oki de Freitas Rodrigues Leite, Ricardo Lucas Winchello Vieira Branco. | Eduardo Oliveira Valadares, Gustavo Oki de Freitas Rodrigues Leite, Ricardo Lucas Winchello Vieira Branco. |
| Dono do Produto | Atualizar o escopo do produto, organizar o escopo das sprints, validar as entregas | Paulo Victor Mendes Silva. | Paulo Victor Mendes Silva. |
| Analista de Qualidade | Garantir a qualidade do produto, garantir o cumprimento do conceito de pronto, realizar inspeções de código | Paulo Vinicius Pinheiro do Nascimento. | Paulo Vinicius Pinheiro do Nascimento. |
| Cliente | Usuários com quaisquer níveis de capacidade de uso de tecnologia e de quaisquer níveis de conhecimento sobre biologia |

## 2.3 Planejamento das Fases e/ou Iterações do Projeto

### Tabela 5 – Planejamento de Fases



| Sprint | Produto (Entrega) | Data Início | Data Fim | Entregável(eis)| Responsáveis|% conclusão|
| :----: | :----------------: | :--------: | :------: | :------------: | :-----------: | :------------: |
| Sprint 0 | Documento de visão e setup do projeto | 21/05/2025 | 21/05/2025 | Documento de visão | Todos| 0% |
| Sprint 1 | Configuração do ambiente e tecnologias | 24/05/2025 | 30/05/2025 | Configuração da plataforma onde a aplicação irá rodar | Todos| 10% |
| Sprint 2 | MVP, Planejamento do Projeto e desenvolvimento inicial de template | 31/05/2025 | 06/06/2025 | Protótipo de baixa fidelidade | Manuella, Paulo, Todos| 20% |
| Sprint 3 | Fechamento de template e início do front e back-end | 07/06/2025 | 13/06/2025 | Protótipo de visualização completo | Manuella, Paulo, Thiago, Bruno| 30% |
| Sprint 4 | Início do desenvolvimento da modelagem do banco de dados | 14/06/2025 | 20/06/2025 | Documentação inicial do banco de dados | Eduardo, Gustavo, Ricardo| 40% |
| Sprint 5 |CRUD das espécies em risco | 21/06/2025 | 27/06/2025 | Base de dados inicial | Todos| 50% |
| Sprint 8 |Refatoração e ajustes finais | 12/07/2025 | 18/07/2025 | Versão final de teste | Todos| 80% |
| Sprint 9 |Deploy final e apresentação do projeto | 19/07/2025 | 23/07/2025 | Versão final publicada, documentação final | Todos| 100% |

## 2.4 Matriz de Comunicação

### Tabela 6 – Matriz de Comunicação

| Descrição | Área/Envolvidos | Periodicidade | Produtos Gerados |
| :-------: | :-------------: | :-----------: | :--------------: |
| Acompanhamento das Atividades Gerais | Equipe do Projeto | Semanal (quarta-feira e sexta-feira) | Ata de reunião; Relatório de situação do projeto. |
| Reforçar ações pendentes e preparação para novas etapas | Equipe do Projeto | Semanal  (Sábado) | Calendário de entregas; Reconsiderações de problemas. |
| Comunicar situação do projeto | Equipe; Prof/Monitor | Semanal | Ata de reunião; Relatório de situação do projeto |
| Checagem e alinhamento das atividades | Equipe específica (back-end, front-end ou banco de dados) | Diário | Fiscalização das atividades atribuídas nas reuniões semanais. |

### 2.5 Gerenciamento de Riscos 

### Tabela 7 – Riscos

| Risco | Grau de Exposição | Mitigação | Plano de contingência |
| :---: | :---------------: | :-------: | :-------------------: |
| Limitação de acessos do banco de dados | Baixo | Testes efetivos para garantir o funcionamento adequado e pesquisa preemptiva quanto a qualidade do banco de dados | Restringir o acesso ao banco de dados a apenas um acesso ao site |
| Escassez de dados disponíveis sobre as espécies | Baixo | Assegurar dados fundamentais de todas as espécies no catálogo | Reunir uma equipe de campo para ir em local especializado (santuários, zoológico) e garantir as informações necessárias ou usar fontes de referência que tenham feito igual pesquisa de  campo |
| Limitação de armazenamento do banco de dados | Alto | Otimizar a formatação dos arquivos de imagem | Investir em uma assinatura mais completa do banco de dados |
| Versionamento do Git | Baixo | Garantir uma comunicação eficaz da equipe | Resgatar o versionamento anterior em caso de conflito
| Licenciamento do uso de imagens| Baixo | Garantir uma pesquisa cautelosa | Disponibilizar canais de contato com os responsáveis para solicitar a remoção do conteúdo
| Sprint encerrada com pendências | Médio | Assegurar a conclusão das sprints através do remanejamento temporário de mão de obra | Manter a penúltima sprint para a solução de possíveis débitos técnicos caso haja algum


## 2.6 Critérios de Replanejamento

Os critérios de replanejamento do projeto CerraDex foram estabelecidos para identificar situações que possam comprometer o cumprimento dos objetivos, prazos ou qualidade das entregas. Estes critérios serão monitorados continuamente e acionados quando necessário para garantir o sucesso do projeto. Os critérios para replanejamento são: 
- Não cumprimento de metas em um ciclo de sprint
- Perda de mão de obra
- Validação de usuário indicando necessidade de reformulação de funcionalidades
- Defeitos do produto que impossibilitem a utilização do usuário final

Caso seja avaliado coletivamente pela equipe e registrado com os devidos motivos, soluções adotadas e remanejamento do novo plano para as datas pré-definidas. O documento de visão será também sempre versionado sempre que houver replanejamento que implique em mudanças de ferramentas ou escopo, arquitetura ou backlog do projeto.

O Product Owner e o Analista de Qualidade terão papel central na proposta de planejamentos, mas qualquer membro pode acusar necessidade de reformulação. Planejamentos parciais, como redistribuição de mão de obra ou ajuste de meta mid-sprint são plausíveis, desde que estabelecido em reunião.

Todas as alterações serão documentadas e registradas no documento de visão, garantindo transparência no processo e rastreabilidade de decisões. 








