<p align="justify">
<p>
  <a href="http://nestjs.com/" target="blank">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" height="100" alt="Nest Logo" />
  </a>
  
  <a href="https://www.prisma.io/" target="_blank">
  <img src="https://prismalens.vercel.app/header/logo-dark.svg" alt="Prisma Logo" width="200"  height="100"/>
  </a>

<a href="https://graphql.org/" target="_blank">
<img src="https://graphql.org/img/logo.svg" alt="GraphQL Logo" width="100"  height="100"/>
</a>

</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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
