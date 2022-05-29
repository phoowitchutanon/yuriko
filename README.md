# Yuriko


## Projects in this monorepo

| Folder                  | Version      | Description                          |
| ----------------------- | ------------ | ------------------------------------ |
| [client](./apps/client) | 1.0.0        | Frontend for the user.               |
| [server](./apps/server) | 1.0.0        | Backend for [client](./apps/client). |

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

Client only:

```bash
yarn workspace client dev
```

Server only:

```bash
yarn workspace server dev
```

## Production

```bash
yarn build

yarn start
```

Client only:

```bash
yarn workspace client build

yarn workspace client start
```

Server only:

```bash
yarn workspace server build

yarn workspace server start
```
