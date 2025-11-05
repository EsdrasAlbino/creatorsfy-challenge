# Creatorsfy - Shopify Integration Challenge<p align="center">

  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>

NestJS application with Shopify OAuth integration and webhook handling for orders.</p>



## 🚀 Tech Stack[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

- **NestJS** (TypeScript)

- **PostgreSQL**  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

- **Drizzle ORM**    <p align="center">

- **Docker & Docker Compose**<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

- **Shopify OAuth & Webhooks**<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>

## 📋 Prerequisites<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>

- Node.js 20+<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>

- Yarn<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>

- Docker & Docker Compose  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>

- Ngrok (for webhook testing)    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>

- Shopify Partner Account  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>

</p>

## 🔧 Setup  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

### 1. Clone and Install Dependencies

## Description

```bash

git clone <repository-url>[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

cd creatorsfy

yarn install## Project setup

```

```bash

### 2. Configure Environment Variables$ yarn install

```

Copy the example env file and fill in your Shopify credentials:

## Compile and run the project

```bash

cp .env.example .env```bash

```# development

$ yarn run start

Edit `.env` file:

# watch mode

```env$ yarn run start:dev

NODE_ENV=development

PORT=3000# production mode

$ yarn run start:prod

# Database```

DATABASE_URL=postgres://postgres:postgres@db:5432/creatorsfy

## Run tests

# Shopify OAuth

SHOPIFY_API_KEY=your_shopify_api_key```bash

SHOPIFY_API_SECRET=your_shopify_api_secret# unit tests

SHOPIFY_SCOPES=read_orders,write_orders$ yarn run test

SHOPIFY_API_VERSION=2023-10

HOST=https://<your-ngrok-url># e2e tests

```$ yarn run test:e2e



### 3. Run with Docker Compose# test coverage

$ yarn run test:cov

Start the entire application (API + PostgreSQL):```



```bash## Deployment

docker-compose up

```When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.



Or run in detached mode:If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:



```bash```bash

docker-compose up -d$ yarn install -g @nestjs/mau

```$ mau deploy

```

The application will:

- Start PostgreSQL on port 5433With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

- Run database migrations automatically

- Start the NestJS API on port 3000## Resources



### 4. Setup NgrokCheck out a few resources that may come in handy when working with NestJS:



In a separate terminal, start ngrok:- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).

```bash- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).

ngrok http 3000- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.

```- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).

Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`) and update the `HOST` variable in your `.env` file.- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## 🗄️ Database Management

## Support

### Run Migrations

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

```bash

yarn db:push## Stay in touch

```

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)

### Generate New Migration- Website - [https://nestjs.com](https://nestjs.com/)

- Twitter - [@nestframework](https://twitter.com/nestframework)

```bash

yarn db:generate## License

```

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

### Open Drizzle Studio (Database GUI)

```bash
yarn db:studio
```

## 📚 Database Schema

### Shops Table
Stores Shopify store information after OAuth authentication.

| Column | Type | Description |
|--------|------|-------------|
| id | serial | Primary key |
| shop | varchar(255) | Store domain (unique) |
| accessToken | text | OAuth access token |
| connectedAt | timestamp | Connection timestamp |
| createdAt | timestamp | Record creation time |
| updatedAt | timestamp | Last update time |

### Orders Table
Stores Shopify orders received via webhooks.

| Column | Type | Description |
|--------|------|-------------|
| id | serial | Primary key |
| shopId | integer | Foreign key to shops |
| shopifyOrderId | varchar(255) | Shopify order ID (unique) |
| orderNumber | integer | Order number |
| email | varchar(255) | Customer email |
| totalPrice | varchar(50) | Order total |
| currency | varchar(10) | Currency code |
| financialStatus | varchar(50) | Payment status |
| fulfillmentStatus | varchar(50) | Fulfillment status |
| orderData | jsonb | Complete order JSON |
| createdAt | timestamp | Record creation time |
| updatedAt | timestamp | Last update time |

## 🔐 Shopify OAuth Flow

1. Navigate to `/auth/shopify?shop=your-store.myshopify.com`
2. User authorizes the app
3. Callback received at `/auth/callback`
4. Access token stored in database
5. Webhook subscribed automatically

## 🪝 Webhook Endpoints

### POST /webhooks/orders/create
Receives order creation webhooks from Shopify.

- Validates HMAC signature
- Stores order in database
- Associates with shop

## 🛠️ Development

### Local Development (without Docker)

```bash
# Start PostgreSQL
docker-compose up db -d

# Run migrations
DATABASE_URL=postgres://postgres:postgres@localhost:5432/creatorsfy yarn db:push

# Start app
yarn start:dev
```

### Useful Scripts

```bash
# Build
yarn build

# Format code
yarn format

# Lint
yarn lint

# Run tests
yarn test

# E2E tests
yarn test:e2e
```

## 📦 Project Structure

```
creatorsfy/
├── src/
│   ├── db/
│   │   ├── schema.ts          # Drizzle schema definition
│   │   ├── database.module.ts # Database module
│   │   └── database.service.ts # Database service
│   ├── auth/                   # OAuth authentication
│   ├── webhooks/               # Webhook handlers
│   └── app.module.ts          # Main app module
├── drizzle/                   # Generated migrations
├── docker-compose.yml         # Docker services
├── Dockerfile                 # API container
└── .env.example              # Environment variables template
```

## 🧪 Testing the Integration

1. Start the application with `docker-compose up`
2. Start ngrok: `ngrok http 3000`
3. Update `HOST` in `.env` with ngrok URL
4. Navigate to `/auth/shopify?shop=your-test-store.myshopify.com`
5. Authorize the app
6. Create a test order in Shopify Admin
7. Verify the webhook was received and order stored in database

## ✅ Challenge Requirements

- [x] Drizzle ORM configured with PostgreSQL
- [x] Database models for shops and orders
- [x] Docker Compose with NestJS API and PostgreSQL
- [x] Project runs with `docker-compose up`
- [ ] OAuth authentication with Shopify
- [ ] Webhook subscription for orders/create
- [ ] Webhook endpoint with HMAC validation
- [ ] Order storage in database

## 📝 License

UNLICENSED
