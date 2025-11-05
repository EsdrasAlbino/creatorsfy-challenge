# Creatorsfy - Shopify Integration Challenge# Creatorsfy - Shopify Integration Challenge<p align="center">



NestJS application for Shopify OAuth integration and webhook handling.  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>



## StackNestJS application with Shopify OAuth integration and webhook handling for orders.</p>



- **NestJS** (TypeScript)

- **PostgreSQL**

- **Drizzle ORM**## 🚀 Tech Stack[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

- **Docker & Docker Compose**

[circleci-url]: https://circleci.com/gh/nestjs/nest

## Prerequisites

- **NestJS** (TypeScript)

- Docker and Docker Compose installed

- Node.js 20+ (for local development)- **PostgreSQL**  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

- Yarn package manager

- **Drizzle ORM**    <p align="center">

## Environment Setup

- **Docker & Docker Compose**<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

1. Copy the environment example file:

```bash- **Shopify OAuth & Webhooks**<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

cp .env.example .env

```<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>



2. Update the `.env` file with your Shopify credentials:## 📋 Prerequisites<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

```env

SHOPIFY_API_KEY=your_shopify_api_key<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>

SHOPIFY_API_SECRET=your_shopify_api_secret

SHOPIFY_API_VERSION=2023-10- Node.js 20+<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>

HOST=https://your-ngrok-url.ngrok.io

```- Yarn<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>



## Running with Docker- Docker & Docker Compose  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>



### Start the application:- Ngrok (for webhook testing)    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>

```bash

docker-compose up -d- Shopify Partner Account  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>

```

</p>

This will:

- Start a PostgreSQL database on port 5432## 🔧 Setup  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

- Run database migrations automatically

- Start the NestJS API on port 3000  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



### View logs:### 1. Clone and Install Dependencies

```bash

# All services## Description

docker-compose logs -f

```bash

# Only API

docker-compose logs -f apigit clone <repository-url>[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.



# Only Databasecd creatorsfy

docker-compose logs -f db

```yarn install## Project setup



### Stop the application:```

```bash

docker-compose down```bash

```

### 2. Configure Environment Variables$ yarn install

### Stop and remove volumes (clean database):

```bash```

docker-compose down -v

```Copy the example env file and fill in your Shopify credentials:



## Local Development## Compile and run the project



### Install dependencies:```bash

```bash

yarn installcp .env.example .env```bash

```

```# development

### Run database migrations:

```bash$ yarn run start

yarn db:push

```Edit `.env` file:



### Start in development mode:# watch mode

```bash

yarn start:dev```env$ yarn run start:dev

```

NODE_ENV=development

### Other useful commands:

```bashPORT=3000# production mode

# Generate new migration

yarn db:generate$ yarn run start:prod



# Open Drizzle Studio (database GUI)# Database```

yarn db:studio

DATABASE_URL=postgres://postgres:postgres@db:5432/creatorsfy

# Build for production

yarn build## Run tests



# Start production server# Shopify OAuth

yarn start:prod

SHOPIFY_API_KEY=your_shopify_api_key```bash

# Run tests

yarn testSHOPIFY_API_SECRET=your_shopify_api_secret# unit tests



# Run linterSHOPIFY_SCOPES=read_orders,write_orders$ yarn run test

yarn lint

```SHOPIFY_API_VERSION=2023-10



## Database SchemaHOST=https://<your-ngrok-url># e2e tests



### Shops Table```$ yarn run test:e2e

Stores Shopify store information after OAuth:

- `id`: Primary key

- `shop`: Store domain (unique)

- `access_token`: OAuth access token### 3. Run with Docker Compose# test coverage

- `connected_at`: Connection timestamp

- `created_at`: Record creation timestamp$ yarn run test:cov

- `updated_at`: Record update timestamp

Start the entire application (API + PostgreSQL):```

### Orders Table

Stores Shopify orders received via webhook:

- `id`: Primary key

- `shop_id`: Foreign key to shops table```bash## Deployment

- `shopify_order_id`: Shopify order ID (unique)

- `order_number`: Order numberdocker-compose up

- `email`: Customer email

- `total_price`: Order total```When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

- `currency`: Currency code

- `financial_status`: Payment status

- `fulfillment_status`: Fulfillment status

- `order_data`: Full order JSON from ShopifyOr run in detached mode:If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

- `created_at`: Record creation timestamp

- `updated_at`: Record update timestamp



## API Endpoints```bash```bash



- `GET /` - Health checkdocker-compose up -d$ yarn install -g @nestjs/mau

- `GET /auth/shopify` - Start OAuth flow (coming soon)

- `GET /auth/callback` - OAuth callback (coming soon)```$ mau deploy

- `POST /webhooks/orders/create` - Receive order webhooks (coming soon)

```

## Testing

The application will:

Access the application at: http://localhost:3000

- Start PostgreSQL on port 5433With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

Check database connection in the logs - you should see:

```- Run database migrations automatically

✅ Database connected successfully

```- Start the NestJS API on port 3000## Resources



## Ngrok Setup



For webhook testing, expose your local server:### 4. Setup NgrokCheck out a few resources that may come in handy when working with NestJS:



```bash

ngrok http 3000

```In a separate terminal, start ngrok:- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.



Update the `HOST` variable in `.env` with the ngrok URL.- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).



## Project Structure```bash- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).



```ngrok http 3000- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.

creatorsfy/

├── src/```- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

│   ├── db/

│   │   ├── schema.ts          # Database schema- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).

│   │   ├── database.module.ts # Database module

│   │   └── database.service.ts # Database serviceCopy the HTTPS URL (e.g., `https://abc123.ngrok.io`) and update the `HOST` variable in your `.env` file.- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

│   ├── app.module.ts          # Main app module

│   └── main.ts                # Application entry point- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

├── drizzle/                   # Database migrations

├── docker-compose.yml         # Docker services configuration## 🗄️ Database Management

├── Dockerfile                 # API container configuration

└── .env.example               # Environment variables template## Support

```

### Run Migrations

## License

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

UNLICENSED

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
