# Representação Arquitetural

## 2.1 Definições

A arquitetura optada combina dois estilos complementares:

- Arquitetura em Camadas, promovendo uma separação bem definida entre elementos do frontend e backend.
- Padrão MVC, aplicado sobre camadas, permitindo uma organização mais modular e refatorável tanto no backend quanto no frontend.

Essa combinação visa garantir a escalabilidade, modularidade e manutenção da aplicação, otimizando também a divisão de setores dentro do grupo para melhor desenvolvimento de cada camada do projeto.

## 2.2 Justifique sua escolha

Foi escolhido seguir com uma arquitetura em camadas por ser um estilo arquitetural que colabora com a estrutura da aplicação, que pode ser dividida nas funcionalidades das áreas do front-end e back-end em camadas específicas para facilitar a organização e separação das responsabilidades conforme o projeto se expande.
Em síntese, a escolha em camadas com MVC parte dos princípios de:

- Separação de responsabilidades, para fácil manutenção, testes e escalabilidade do sistema
- Isolamento de mudanças, onde alterações não impactam diretamente a camada de apresentação
- Alta coesão interna e baixo acoplamento entre módulos
- Adoção de boas práticas de desenvolvimento e padrões amplamente consolidados
- Integração fluida com frameworks modernos
- Modularidade, possibilitando expansões futuras
- Acessibilidade de entendimento para outrem, não pertencentes ao grupo original do projeto

## 2.3 Detalhamento

A arquitetura em camadas é uma estratégia fundamental de organização de sistemas de software. Ela cria uma estrutura organizada e dividida em partes, o que ajuda a manter o sistema mais fácil de entender, de corrigir quando necessário e de melhorar com o tempo. Além disso, essa divisão torna mais claro o que cada parte do sistema deve fazer, essa arquitetura organiza o sistema em camadas distintas. Sendo assim, a ideia central é que os módulos com funcionalidade semelhantes sejam organizados em camadas horizontais, sendo que cada camada possui uma função específica e se comunica com as camadas vizinhas de forma controlada. Essa arquitetura pode ser dividas em módulos, cada um com uma função bem definida dentro do sistema:

- Camada View:  Refere-se a interface do usuário, da qual as ações ordenadas são enviadas para as camadas inferiores.
- Camada Controller: Opera como um intermediário entre o usuário e o banco de dados, basicamente obtém as interações da interface e age de acordo com as operações recebidas.
- Camada Model: Adquiri a informação, através da camada intermediária, acessando ou modificando os dados, e devolve ao Controller para ser projetado na camada View

Cada camada  atua de forma independente, representando uma abstração específica no processamento das requisições. A forma como elas se comunicam é definida pela equipe de desenvolvimento, de acordo com as necessidades do projeto.

*Desenho esquemático da representação arquitetural.*

![Figura 1](img/img1.png)

## 2.4 Metas e restrições arquiteturais

Nesta seção, apresenta-se as principais metas e restrições referentes ao projeto CerraDex, priorizando bom desempenho, acessibilidade e fácil navegação.

### 2.4.1 Metas

A aplicação será desenvolvida com foco na usabilidade, sendo acessível através dos principais navegadores web atuais, com destaque para aqueles baseados em Chromium. Sua interface será interativa e apresentará as informações por meio de recursos visuais intuitivos, facilitando a compreensão do conteúdo e garantindo uma ferramenta operacional e eficaz.
Quanto à manutenibilidade, o sistema será projetado para permitir adaptações conforme a necessidade, seja para implementar melhorias, incorporar novas features ou adicionar conteúdos futuros. Para assegurar o bom desempenho de todas as operações, cada funcionalidade passará por testes que validarão seu comportamento, resultando em um produto final de alta qualidade e eficiência.
Sobre padrões de codificação. Para tornar o código inteligível, reutilizável e passível de manutenção, reduzindo os defeitos e aumentando a qualidade geral, utilizaremos alguns padrões de codificação essenciais. Indentação adequada, com recuo e formatação consistentes; comentários ao longo do código para clareza e documentação; controle de versão e colaboração utilizando o GitHub.

### 2.4.2 Restrições
Durante o desenvolvimento da aplicação, a equipe deve se atentar ao limite de armazenamento do banco de dados, visto que o projeto demanda uma grande e variada quantidade de dados em formato de imagem, restringindo a equipe à otimizar a formatação dos arquivos. 

## 2.5 Visão de Casos de uso (escopo do produto)

O escopo do produto CerraDex, detalhado no documento "Visão do Produto e do Projeto v1.0", abrange as funcionalidades essenciais para o registro, catalogação e divulgação de informações sobre animais do bioma Cerrado em risco de extinção. O sistema permitirá o cadastro, edição, exclusão e visualização de espécies animais ameaçadas, com armazenamento de dados inerentes a cada espécime em páginas dedicadas, incluindo imagens. Adicionalmente, o sistema oferecerá busca e filtragem interativa por critérios pré-definidos, e sua interface será responsiva, acessível e moderna, com integração completa entre frontend e backend.

Um dos requisitos que contribuíram significativamente para a escolha da arquitetura em camadas foi a necessidade de uma clara separação de responsabilidades entre as funcionalidades de visualização, filtragem e cadastro das espécies. A experiência da equipe em desenvolvimento web, com familiaridade em arquiteturas que promovem a modularidade e a manutenibilidade, também influenciou a decisão. Isso permite que o sistema seja escalável e de fácil adaptação a futuras melhorias e incorporação de novas funcionalidades. O diagrama de casos de uso presente no documento "Visão do Produto e do Projeto v1.0" ilustra em detalhes as interações dos usuários com o sistema, reforçando a abrangência das funcionalidades propostas.

## 2.6 Visão lógica

O sistema da aplicação está subdividido nos módulos de:
- Busca: permite que o usuário navegue pela aplicação e busque individualmente pela página que quiser acessar. O uso dessa função se daria por meio de uma interface na aplicação como uma “barra de pesquisa”;
- Galeria: armazenamento de imagens das páginas da aplicação, como fotos das espécies de animais ameaçados. Esse módulo se comunica por meio da adição de imagens em alguns pontos das páginas. Além de uma interface que permite que os usuários visualizem cada imagem individualmente e alterne entre elas;
- CRUD: sistema de cadastro e manipulação dos dados das espécies. Sendo esse módulo necessário para a criação de novas páginas e a atualização ou remoção do conteúdo de páginas. Esse módulo funciona permitindo que os moderadores selecionados pelo administrador possam alterar as páginas conforme desejarem.

## 2.7 Visão de Implementação

Camada de Usuário:
- O usuário acessa o site.
- O usuário acessa o catálogo de espécies.
- O usuário seleciona espécie.
- O site, em resposta à seleção, mostra as informações a ele.

Camada de Negócios
- Na requisição de ver uma espécie, o site manda para o banco de dados uma requisição de coleta de espécies.
- Depois da requisição do banco, o site pega as informações e as alinha corretamente no site.

Camada do Banco:
- Guarda a informação do animal em questão (nome, espécie, imagem, dados referentes a ele).
Passa para o site a informação coletada.

## 2.8 Visão de Implantação

O software será executado em um ambiente Linux, com requisitos mínimos de 2 GB de memória RAM, 500 MB de armazenamento disponível e um processador com, no mínimo, dois núcleos e suporte a duas threads. Esses requisitos foram definidos com base na leveza e eficiência da arquitetura adotada, permitindo que o sistema opere de forma estável mesmo em servidores com recursos limitados.

Toda a aplicação será desenvolvida utilizando a linguagem TypeScript, escolhida por sua sintaxe moderna e sua tipagem estática, que contribui para a legibilidade e a segurança do código. A escolha do TypeScript também se justifica pelo bom desempenho que oferece, considerando seu nível de abstração, tornando-se ideal para um projeto que preza tanto pela manutenibilidade quanto pela performance.

No back-end, será utilizado o runtime Bun.js, devido ao seu excelente desempenho em comparação com outras soluções tradicionais, como Node.js. O Bun proporciona tempos de execução mais rápidos e um consumo de recursos mais eficiente, o que permite manter o sistema leve e responsivo, mesmo em ambientes com restrições de hardware. Isso colabora diretamente para manter os requisitos do sistema em níveis acessíveis, sem comprometer a performance.

Para o front-end, optou-se pelo framework Next.js, que oferece uma abordagem moderna e eficiente no desenvolvimento de aplicações web. Entre seus principais diferenciais está o suporte ao Server Side Rendering (SSR), que permite a renderização do conteúdo no servidor, melhorando o tempo de carregamento inicial e contribuindo para uma melhor experiência do usuário. Além disso, o Next.js se integra naturalmente com o TypeScript, o que reforça a coesão tecnológica do projeto.

O banco de dados adotado será o Supabase, uma solução SQL de baixo custo baseada em PostgreSQL. Além de oferecer todas as funcionalidades tradicionais de um banco relacional, o Supabase também disponibiliza recursos integrados como autenticação de usuários, armazenamento e APIs em tempo real, o que reduz a necessidade de soluções externas e acelera o desenvolvimento.

## 2.9 Restrições adicionais

O software é acessível diretamente pela internet e não exige autenticação de usuários, o que representa uma restrição negocial importante. Essa decisão foi tomada com o objetivo de facilitar o uso em desktops, permitindo acesso imediato sem etapas adicionais de login. Essa abordagem favorece a agilidade e a conveniência, especialmente em cenários onde o tempo de resposta é crítico ou o público-alvo não requer identificação individual. Contudo, essa escolha também impõe limitações quanto à personalização de conteúdo, armazenamento de dados sensíveis e controle de acesso, aspectos que podem ser considerados em futuras evoluções do sistema, caso se deseje aumentar a segurança ou oferecer funcionalidades mais específicas para cada usuário.

O sistema foi projetado para suportar até 1.000 acessos simultâneos, garantindo estabilidade e desempenho mesmo sob altas cargas de acesso. Essa capacidade está diretamente ligada à arquitetura escalável adotada durante o desenvolvimento, que permite a ampliação do número de usuários e da carga de trabalho sem perda significativa de desempenho ou eficiência. Essa escalabilidade é fundamental para assegurar a continuidade dos serviços conforme o sistema cresce em popularidade e demanda.

Quanto às características de qualidade, a usabilidade é um dos pilares do projeto. A interface foi projetada para ser intuitiva e de fácil navegação, reduzindo a curva de aprendizado e facilitando a interação com o sistema mesmo por usuários sem conhecimento técnico avançado. O desempenho também foi uma prioridade, com otimizações voltadas para garantir tempos de resposta rápidos e uma experiência fluida, mesmo em dispositivos com recursos limitados.

Outro aspecto essencial é a compatibilidade. O software é responsivo, funcionando de forma consistente em diversos navegadores modernos, com destaque para aqueles baseados em Chromium, o que amplia significativamente seu alcance. A confiabilidade do sistema também foi considerada, com foco em assegurar a disponibilidade contínua e a integridade das informações processadas, mesmo em situações de carga elevada ou uso intenso.

Essas decisões e características refletem um compromisso com a entrega de um software robusto, eficiente e alinhado às necessidades do usuário final, garantindo uma experiência confiável e satisfatória, ao mesmo tempo em que atende a restrições técnicas e negociais previamente definidas.
