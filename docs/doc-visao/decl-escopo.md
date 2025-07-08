# Declaração de Escopo do Projeto

## 4.1 Backlog do produto

O backlog do produto CerraDex foi estruturado com base nas necessidades identificadas durante o brainstorm da ideia, o alinhamento com a ODS 11.4, além das possíveis requisições do usuário final. A priorização dos itens segue a abordagem Must, Should e Could. A elicitação de requisitos foi realizada a partir de brainstorm da equipe, análise comparativa com soluções similares e interpretação das diretrizes curriculares para educação ambiental.

O backlog reflete a estratégia de desenvolvimento incremental, em que funcionalidades essenciais para a visualização, filtragem e detalhamento das espécies ameaçadas do Cerrado são entregues nas sprints intermediárias.

## 4.2 Perfis

### Tabela 8 – Perfis

| Nome do perfil | Características do perfil | Permissões de acesso |
| :------------: | :-----------------------: | :------------------: |
| Administrador | Responsável por manter os perfis de acesso da aplicação, criar novos usuários, alterar usuários já existentes, ou excluir usuários (Manter usuários). Responsável por atualizar e acrescentar informações sobre itens da plataforma. | Descrever sucintamente as permissões de acesso e criar ou editar itens. |
| Usuário comum | Público geral, visualiza os conteúdos dos itens da plataforma. | Visualizar os itens |

## 4.3 Cenários

### Tabela 9 – Cenários Funcionais

**Sistema: CerraDex**

| Numeração do cenário | Nome do cenário | Sprints |
| :------------------: | :-------------: | :-----: |
| 1 | Acesso a página de uma espécie | Sprint 6 |
| 2| Cadastro e edição dos dados de uma espécie | Sprint 5|
| 3 | Visualização de imagens de uma espécie | Sprint 6 |

## 4.4 Tabela de Backlog do produto

### Tabela 10 – Backlog do Produto

| Numeração | Sprint | Nome do Requisito | Tipo de requisito | Priorização do requisito | Descrição sucinta do requisito | User stories (U.S.) associadas
| :-------: | :----: | :---------------: | :---------------: | :----------------------: |:-----------------------------: | :-----------------: |
| 1.1 | 1 | Criação do repositório e setup inicial | Funcional | Must |Organização inicial das ferramentas e ambiente, para abarcar as necessidades de desenvolvimento. | Como usuário, considero de tamanha importância armazenar a codificação e participação dos autores do software.
| 1.2| 1 | Wireframe da interface principal| Funcional | Must | Planejamento da estrutura de navegação. | Como usuário, gostaria de uma navegação simples e funcional. 
| 2.1 | 2 | Definição de MVP| Não funcional| Must | Desenvolver a primeira versão funcional do software. | Como usuário, gostaria de ter um produto já definido, para que eu entenda o que é o mínimo para que ele seja funcional.
| 2.2 | 2 | Criação de template de visualização | Funcional | Must | Fornecer base visual do projeto (Ex: cabeçalho, estrutura das páginas). | Como usuário, sinto a necessidade de uma interface agradável e intuitiva.
| 3.1 | 3 | Pesquisa sobre as espécies incluídas no projeto. | Não Funcional | Must | Procurar e agrupar as informações que serão apresentadas nas respectivas páginas de cada espécie. | Como usuário, gostaria de encontrar informações relevantes sobre determinada espécie do meu interesse.
| 3.2 | 3 | Obtenção de imagens sem direitos autorais.| Não Funcional| Should | Pesquisar imagens em domínio público para as páginas das espécies. | Como usuário, eu gostaria de poder visualizar imagens das espécies nas páginas delas.
| 4.1| 4 | Obtenção de áudio dos animais.|Não Funcional | Could | Restaurar arquivos de áudio para cada espécie de animal. | Como usuário, eu gostaria de ter uma experiência mais imersiva podendo ouvir o som sobre determinada espécie do meu interesse.
| 4.2 | 4 | Modelagem do banco de dados | Funcional| Must | Agrupar as informações na estrutura de banco de dados relacional. | Como usuário, eu gostaria de obter todas as informações armazenadas e estruturadas em seus respectivos temas.
| 5.1 |5 | Read das espécies em risco | Funcional| Must | Deixar público os dados das espécies para o público geral. | Eu como usuário gostaria de ver os dados das espécies em risco.
| 5.2 | 5 | CRUD das espécies em risco | Funcional| Must | Inicialização do sistema de cadastro e edição dos dados da página de uma espécie. | Como administrador, eu gostaria de uma forma segura e estável de cadastrar e manipular (adicionar, remover, atualizar) os dados das espécies em risco.
| 6.1 | 6 | Finalização da modelagem do banco de dados |Funcional | Must | Concluir a estrutura do banco de dados. | Como usuário, gostaria que as informações no site estejam armazenadas em uma estrutura segura e confiável.
| 7.1| 7 | Finalização do CRUD das espécies em risco. |Funcional | Must | O sistema de cadastro e edição dos dados da página de uma espécie está finalizado. As páginas das espécies estão visíveis para os usuários e os moderadores podem editá-las de forma segura. | Como moderador, eu consigo cadastrar e manipular (adicionar, remover, atualizar) os dados das espécies em risco. 
| 7.2 | 7 | Finalização do CRUD de administrador |Funcional| Should | Permite o controle completo dos dados através de um painel administrativo. | Como administrador, eu gostaria de uma forma segura e estável de cadastrar e manipular (adicionar, remover, atualizar) os dados de um outro administrador. |
| 8.1 | 8 | Refatoração | Não Funcinal | Should | Caso se faça necessário, refatorar partes não aprovadas do projeto. | Como usuário, gostaria de um empenho por parte dos programadores em refazer aspectos sujeitos à inutilidade |
| 8.3 | 8 | Apresentação e entrega final | Não Funcinal | Must | Entrega do projeto. |  Como usuário, gostaria de receber um produto pronto e funcional, sem erros.|

