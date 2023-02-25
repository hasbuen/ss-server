

<div>
<h1>NestJS, PrismaJS, and GraphQL</h1>
<p>
NestJS, PrismaJS, and GraphQL are important tools that, when used together, can provide effective solutions for companies dealing with critical data.
</p> <br/>

<h2>NestJS</h2>
<p align="center">

  <a href="http://nestjs.com/" target="blank">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" height="100" alt="Nest Logo" />
  </a>

</p>  
<p>
NestJS is a web application framework in Node.js that aims to provide a robust structure for creating scalable and efficient applications. It provides endpoint management and various functionalities to facilitate web application development.
</p>

<h2>PrismaJS</h2>
<p align="center">

  <a href="https://www.prisma.io/" target="_blank">
  <img src="https://prismalens.vercel.app/header/logo-dark.svg" alt="Prisma Logo" width="200"  height="100"/>
  </a>

</p>  
<p>
PrismaJS is an Object-Relational Mapping (ORM) for Node.js that facilitates communication between an application and a MySQL database. It provides an easy-to-use Application Programming Interface (API) and helps ensure data security. With PrismaJS, it is possible to securely and efficiently execute database operations.
</p>

<h2>GraphQL</h2>
<p align="center">

<a href="https://graphql.org/" target="_blank">
<img src="https://graphql.org/img/logo.svg" alt="GraphQL Logo" width="100"  height="100"/>
</a>

</p>
<p>
GraphQL is a query language for data and a runtime for APIs, which offers clients the flexibility to request only the necessary and customized data, instead of receiving a fixed set of data. It allows for the creation of flexible and scalable APIs and provides a robust solution for companies that need to work with large amounts of critical data.
</p><br/>

<p>
By combining these three tools, it is possible to create scalable and efficient web applications with security and flexibility to handle large amounts of critical data. This combination allows companies to develop high-performance and secure applications that meet the needs of their customers while keeping their data protected.
</p>
</div>

## Description

<p>The server created with NestJS, PrismaJS, and GraphQL aims to manage the storage of call audios individually per analyst in a helpdesk support team within an organization. This application was developed with a project hierarchy that allows only the Boss (team leader) to make changes and removals to the audios, while other analysts can download the audio and store new files.</p>

<p>NestJS provides all the necessary structure to create a scalable and efficient web application. It manages endpoints and provides various functionalities to facilitate web application development. PrismaJS, in turn, facilitates communication between the application and the MySQL database. It provides an easy-to-use API and helps ensure data security by securely and efficiently executing database operations.</p>

<p>GraphQL is used to receive user requests and customize responses with the necessary data, offering a robust solution for companies that need to work with large amounts of critical data. This allows the application to create flexible and scalable APIs, ensuring high performance and security for manipulating large amounts of data.</p>

<p>The project is organized into modules that represent the main entities of the application, such as Boss, Call, Owner, Permission, and Relationship. Each module has a Data Transfer Object (DTO), a resolver, and a service, which are responsible for receiving requests, processing information, and providing responses according to defined business rules.</p>

<p>In summary, the server created with NestJS, PrismaJS, and GraphQL is an efficient and scalable solution for managing call audio storage in a helpdesk support team. With the defined project hierarchy, only the Boss can make changes and removals, while other analysts can download and store new audios. The use of these tools allows for the creation of a secure and high-performance application that meets the organization's needs.</p>


<strong>Mapped.</strong><br/>

| root.                  |                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| app.module.ts          |                                                                                                      |
| main.ts                |                                                                                                      |
|                        |                                                                                                      |
| **@generated**         |                                                                                                      |
| prisma-nestjs-graphql/ |                                                                                                      |
| boss                   | boss.model.ts<br>create-oneboss.args.ts                                                              |
| call                   | call.model.ts<br>create-onecall.args.ts                                                              |
| owner                  | owner.model.ts<br>create-oneowner.args.ts                                                            |
| Permission             | permission.model.ts<br>create-onepermission.args.ts                                                  |
| relationship           | relationship.model.ts<br>create-onerelationship.args.ts                                              |
|                        |                                                                                                      |
| **modules**            |                                                                                                      |
| boss                   | boss.dto.ts<br>boss.module.ts<br>boss.resolver.ts<br>boss.service.ts                                 |
| call                   | call.dto.ts<br>call.module.ts<br>call.resolver.ts<br>call.service.ts                                 |
| jwt                    | jwt.module.ts<br>jwt.service.ts                                                                      |
| owner                  | owner.dto.ts<br>owner.module.ts<br>owner.resolver.ts<br>owner.service.ts                             |
| permission             | permission.dto.ts<br>permission.module.ts<br>permission.resolver.ts<br>permission.service.ts         |
| relationship           | relationship.dto.ts<br>relationship.module.ts<br>relationship.resolver.ts<br>relationship.service.ts |

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
