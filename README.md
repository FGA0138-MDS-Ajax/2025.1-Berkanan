<div align="center">
  <img src="https://placehold.co/600x200/transparent/white?text=Cerradex&font=montserrat" alt="Logo Cerradex (Substitua com seu logo)" width="400"/>

  <h1>Cerradex</h1>

  <p>
    <strong>O Projeto CerraDex propõe um site interativo que reúne informações confiáveis e visuais sobre espécies em risco de extinção no cerrado.</strong>
  </p>

</div>

---

## 📖 Sobre o Projeto

O CerraDex toma como objetivo tornar o conteúdo científico acessível. Além de engajar jovens, curiosos e aqueles que não conhecem o cerrado, com foco em preservar esse rico patrimônio natural!

Acesse e explore! Salvar o cerrado começa com conhecer quem vive nele.

---

## 🚀 Tecnologias Utilizadas

Liste as principais tecnologias e frameworks que foram utilizados para construir o Cerradex.

* **Frontend:**  Next.js, Typescript
* **Backend:** BunJS, Typescript
* **Banco de Dados:** Supabase
* **DevOps/Infraestrutura:** Docker, Docker Compose, 

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

* **[Docker](https://docs.docker.com/get-docker/)**: Essencial para criar e gerenciar os contêineres da aplicação.
    * *Recomendação:* Utilize um sistema operacional Linux ou o WSL (Windows Subsystem for Linux) no Windows para uma melhor experiência com Docker.
* **[Docker Compose](https://docs.docker.com/compose/install/)**: Para orquestrar múltiplos contêineres Docker definidos no arquivo `docker-compose.yml`. (Geralmente já vem com a instalação do Docker Desktop).
* **Opcional:** [Node.js](https://nodejs.org/) (se precisar rodar comandos npm/yarn localmente fora do Docker para desenvolvimento).
* **Opcional:** [Bun.js](https://bun.sh) (se precisar rodar comandos npm/yarn localmente fora do Docker para desenvolvimento).
* **Opcional:** Um editor de código de sua preferência (Ex: [VS Code](https://code.visualstudio.com/)).

---

## 🛠️ Configuração e Instalação

Siga os passos abaixo para configurar e rodar o ambiente de desenvolvimento do Cerradex:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/FGA0138-MDS-Ajax/2025.1-Berkanan.git
    cd cerradex
    ```

2.  **Construa as imagens Docker:**
    Este comando irá construir as imagens Docker definidas no seu `docker-compose.yml`. A flag `--no-cache` garante que as imagens sejam construídas do zero, sem utilizar o cache de builds anteriores, o que pode ser útil para evitar problemas com dependências desatualizadas.
    ```bash
    docker-compose build --no-cache
    ```

---

## ▶️ Rodando a Aplicação

Após a configuração, você pode iniciar a aplicação com o Docker Compose:

1.  **Execute os contêineres Docker:**
    Este comando irá iniciar todos os serviços (contêineres) definidos no seu `docker-compose.yml` em modo "attached", mostrando os logs no terminal.
    ```bash
    docker-compose up
    ```
    Para rodar em modo "detached" (em segundo plano), adicione a flag `-d`:
    ```bash
    docker-compose up -d
    ```

2.  **Acesse a aplicação:**
    Após os contêineres estarem rodando, a aplicação geralmente estará acessível em:
    * `http://localhost:3000` (Verifique a porta no seu `docker-compose.yml` ou na documentação do serviço frontend).

---

## ⏹️ Parando a Aplicação

Para parar os contêineres da aplicação:

1.  **Desligue os contêineres Docker:**
    Este comando para e remove os contêineres. A flag `-v` também remove os volumes nomeados associados aos contêineres, o que limpa os dados persistidos (use com cuidado se precisar manter os dados).
    ```bash
    docker-compose down -v
    ```
    Se você iniciou com `docker-compose up -d` e quer apenas parar sem remover os contêineres (para iniciar mais rápido depois):
    ```bash
    docker-compose stop
    ```

---

## 🐛 Solução de Problemas (Opcional)

Liste alguns problemas comuns e suas soluções.

* **Problema:** Erros ao construir a imagem Docker.
    * **Solução:** Verifique os logs do `docker-compose build`. Tente remover caches antigos com `docker system prune -a` e tente construir novamente. Certifique-se de que o Docker está rodando e tem recursos suficientes.

* **Problema:** A porta `XXXX` já está em uso.
    * **Solução:** Verifique qual serviço está usando a porta (`sudo netstat -tulnp | grep XXXX`) e pare-o, ou altere a porta no `docker-compose.yml` e nas configurações da aplicação.

* **Problema:** Docker a imagem não funciona como deveria.
    * **Solução**  Remova volumes e containers antigos
    ```bash
    docker-compose down --volumes --remove-orphans
    docker system prune -af
    ```
    Com versões antigas, os volumes e containers parciais causam conflitos:
---

## 🤝 Contribuindo 

Se o projeto for open source e você quiser contribuições, explique como:

1.  Faça um Fork do projeto.
2.  Crie uma Branch para sua Feature (`git checkout -b feature/MinhaNovaFeature`).
3.  Commit suas mudanças (`git commit -m 'Adiciona MinhaNovaFeature'`).
4.  Push para a Branch (`git push origin feature/MinhaNovaFeature`).
5.  Abra um Pull Request.

---
