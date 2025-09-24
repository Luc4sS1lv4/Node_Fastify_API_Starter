# Node + TypeScript API (Task Manager)

Este projeto foi desenvolvido com o objetivo de **aperfeiçoar minhas habilidades em JS/Node** aplicando meus conhecimentos em **TypeScript** (JS com tipagem estática).

TypeScript é um superset do JavaScript que adiciona melhorias que auxiliam os desenvolvedores, mas não é compilado pelo Node.js por padrão.  

Além disso, foram utilizadas ferramentas modernas como:

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-20232A?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-FF9900?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge)

---

## Estrutura e boas práticas
- Aplicação seguindo boas práticas.  
- Divisão de responsabilidades das classes (POO).  
- Injeção de dependência.  
- Construção de **API REST** modular e escalável.  

---

## Funcionalidades / Endpoints

### **POST /signup** → Criar conta
- Campos: `name`, `email`, `password`  
- Valida se o usuário já existe, caso exista retorna **400**  
- Senha armazenada com **hash**  

### **POST /session** → Fazer login
- Autenticação com `email` e `password`  
- Valida se email existe, se não retorna **400**  
- Valida senha com hash armazenado, se errado retorna **400**  
- Retorna: `name`, `email` e `token`  

### **POST /tasks** → Criar nova task
- Campos: `name`, `description` (opcional)  
- Status inicial: `NOT_STARTED`  
- Retorna: `task name`, `description`, `status`, `author`, `author_id`  

### **GET /tasks** → Listar minhas tasks
- Somente tasks do usuário autenticado  
- Se não houver tasks, retorna **status 200** informando que não há tasks  

#### **Regras de negócio**
- Task deve conter: identificador único, nome, descrição, status e usuário dono  
- Apenas o usuário autenticado pode criar/listar suas tasks  
- Endpoint `/tasks` é **privado** (autenticação JWT requerida)  

---

## Como rodar o projeto

1. Configure o **Docker Compose** com a imagem do PostgreSQL e inicie o container:

```bash
docker-compose up -d

2. Instale as dependências:

npm i

3. Crie o arquivo .env com a URL de conexão do Prisma (exemplo: DATABASE_URL=...)

4. Crie as tabelas no banco sem histórico de migrations:

npx prisma db push

5. Atualize a biblioteca do Prisma Client:

npx prisma generate


6. Rode a aplicação localmente (com reinício automático em mudanças):

npm run dev


Teste os endpoints com Postman ou Insomnia
