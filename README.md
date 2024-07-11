<p align="center">
  <h4 align="center">Plann.er BackEnd</h4>
</p>

## 💻 About:

 api with fastify, prisma, typescript and more.

 Functional Requirements: The user must be able to create a trip; The user should be able to get a summary of the trip;  The user must be able to invite people to the trip via email; the user must be able to create important links for the trip and must be able to create tasks for the trip.

 Notes: this api was created in the rocketseat event (NLW Journey), which lasts three days and each class is about 1 hour, so I didn't have time to make an api with a designem,
 that it is easy to maintain, and that it has a very readable code, but all routes work.



- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [SQLite](https://www.sqlite.org/index.html)
- [Prisma](https://www.prisma.io/)
- [zod](https://zod.dev/)

---

## 🚀 How to run the project.

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine:
[Node.js] (https://nodejs.org/en/). 
Also, it's good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/)


### 🚧 Running the BackEnd (server)

```bash
git init

git clone https://github.com/Gabrielingnau/BackEndNotes

# On the Backend, enter a port and a secret, a library e.g. "sqlite" and a NODE_ENV e.g. "development" in the empty .env file
  NODE_ENV=dev
  DATABASE_URL=
  API_BASE_URL=
  WEB_BASE_URL=
  PORT=

# Install the necessary dependencies
$ npm install

# Now start the BackEnd server
$ npm run start:dev

# The server will start at port:3333 - go to <http://localhost:3336>
```

---
⌨️ with ❤️ by [Gabriel Lingnau](https://www.linkedin.com/in/gabriel-lingnau-3bb17b266/) 😊
=======