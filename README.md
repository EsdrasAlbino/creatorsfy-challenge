# Creatorsfy - Shopify Integration Challenge# Creatorsfy - Shopify Integration Challenge# Creatorsfy - Shopify Integration Challenge<p align="center">



Complete Shopify OAuth integration with webhook handling for order creation events.



## 🚀 FeaturesNestJS application for Shopify OAuth integration and webhook handling.  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>



- ✅ Shopify OAuth 2.0 authentication

- ✅ Automatic webhook registration for `orders/create`

- ✅ HMAC validation for OAuth and webhooks## StackNestJS application with Shopify OAuth integration and webhook handling for orders.</p>

- ✅ PostgreSQL database with Drizzle ORM

- ✅ Multi-shop support

- ✅ REST API for listing orders

- ✅ Docker & Docker Compose setup- **NestJS** (TypeScript)

- ✅ Complete TypeScript implementation

- **PostgreSQL**

## 📋 Tech Stack

- **Drizzle ORM**## 🚀 Tech Stack[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

- **NestJS** - Progressive Node.js framework

- **TypeScript** - Type-safe JavaScript- **Docker & Docker Compose**

- **PostgreSQL** - Relational database

- **Drizzle ORM** - TypeScript ORM[circleci-url]: https://circleci.com/gh/nestjs/nest

- **Docker & Docker Compose** - Containerization

- **Ngrok** - Local tunnel for webhooks## Prerequisites



## 🔧 Prerequisites- **NestJS** (TypeScript)



- Docker and Docker Compose- Docker and Docker Compose installed

- Node.js 20+ (for local development)

- Yarn package manager- Node.js 20+ (for local development)- **PostgreSQL**  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

- Ngrok account (free tier works)

- Shopify Partner account- Yarn package manager



## 📦 Installation- **Drizzle ORM**    <p align="center">



### 1. Clone the repository## Environment Setup



```bash- **Docker & Docker Compose**<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

git clone <repository-url>

cd creatorsfy1. Copy the environment example file:

```

```bash- **Shopify OAuth & Webhooks**<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

### 2. Install dependencies (optional, for local development)

cp .env.example .env

```bash

yarn install```<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>

```



### 3. Configure environment variables

2. Update the `.env` file with your Shopify credentials:## 📋 Prerequisites<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

```bash

cp .env.example .env```env

```

SHOPIFY_API_KEY=your_shopify_api_key<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>

Edit the `.env` file with your credentials:

SHOPIFY_API_SECRET=your_shopify_api_secret

```env

NODE_ENV=developmentSHOPIFY_API_VERSION=2023-10- Node.js 20+<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>

PORT=3000

HOST=https://your-ngrok-url.ngrok.io

# Database

DATABASE_URL=postgres://postgres:postgres@db:5432/creatorsfy```- Yarn<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>



# Shopify OAuth

SHOPIFY_API_KEY=your_api_key_here

SHOPIFY_API_SECRET=your_api_secret_here## Running with Docker- Docker & Docker Compose  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>

SHOPIFY_SCOPES=read_orders,write_orders

SHOPIFY_API_VERSION=2023-10

HOST=https://your-ngrok-url.ngrok.io

```### Start the application:- Ngrok (for webhook testing)    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>



## 🏃 Running the Application```bash



### With Docker Compose (Recommended)docker-compose up -d- Shopify Partner Account  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>



```bash```

# Start all services

docker-compose up -d</p>



# View logsThis will:

docker-compose logs -f

- Start a PostgreSQL database on port 5432## 🔧 Setup  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)

# Stop services

docker-compose down- Run database migrations automatically

```

- Start the NestJS API on port 3000  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

### Local Development



```bash

# Start database### View logs:### 1. Clone and Install Dependencies

docker-compose up db -d

```bash

# Run migrations

yarn db:push# All services## Description



# Start applicationdocker-compose logs -f

yarn start:dev

``````bash



## 🔐 Shopify App Setup# Only API



### 1. Create a Shopify Partner Accountdocker-compose logs -f apigit clone <repository-url>[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.



1. Go to [partners.shopify.com](https://partners.shopify.com/)

2. Sign up for a free account

3. Create a development store# Only Databasecd creatorsfy



### 2. Create a Shopify Appdocker-compose logs -f db



1. In your Partner Dashboard, go to "Apps"```yarn install## Project setup

2. Click "Create app"

3. Choose "Custom app"

4. Fill in the app details:

   - **App name**: Creatorsfy### Stop the application:```

   - **App URL**: `https://your-ngrok-url.ngrok.io`

   - **Allowed redirection URL(s)**: `https://your-ngrok-url.ngrok.io/auth/callback````bash



### 3. Configure App Permissionsdocker-compose down```bash



1. Go to "Configuration" → "API scopes"```

2. Add the following scopes:

   - `read_orders`### 2. Configure Environment Variables$ yarn install

   - `write_orders`

3. Save the configuration### Stop and remove volumes (clean database):



### 4. Get API Credentials```bash```



1. In the app dashboard, find:docker-compose down -v

   - **API key** (Client ID)

   - **API secret key** (Client secret)```Copy the example env file and fill in your Shopify credentials:

2. Copy these to your `.env` file



## 🌐 Ngrok Setup

## Local Development## Compile and run the project

### 1. Install Ngrok



```bash

# macOS### Install dependencies:```bash

brew install ngrok

```bash

# Or download from https://ngrok.com/download

```yarn installcp .env.example .env```bash



### 2. Start Ngrok```



```bash```# development

ngrok http 3000

```### Run database migrations:



### 3. Update Environment```bash$ yarn run start



Copy the HTTPS URL from ngrok (e.g., `https://abc123.ngrok.io`) and update:yarn db:push

- `.env` file: `HOST=https://abc123.ngrok.io`

- Shopify App URLs in Partner Dashboard```Edit `.env` file:



## 🎯 Usage



### 1. Connect a Shopify Store### Start in development mode:# watch mode



Navigate to:```bash

```

https://your-ngrok-url.ngrok.io/auth/shopify?shop=your-store.myshopify.comyarn start:dev```env$ yarn run start:dev

```

```

Replace `your-store` with your development store name.

NODE_ENV=development

### 2. Authorize the App

### Other useful commands:

1. You'll be redirected to Shopify

2. Click "Install app"```bashPORT=3000# production mode

3. Grant the requested permissions

4. You'll be redirected back to a success page# Generate new migration



### 3. Webhook Registrationyarn db:generate$ yarn run start:prod



The webhook for `orders/create` is automatically registered during the OAuth process.



### 4. Create a Test Order# Open Drizzle Studio (database GUI)# Database```



1. Go to your Shopify Adminyarn db:studio

2. Navigate to "Orders"

3. Click "Create order"DATABASE_URL=postgres://postgres:postgres@db:5432/creatorsfy

4. Add a product and customer

5. Click "Create order"# Build for production



### 5. Verify Order in Databaseyarn build## Run tests



Check if the order was received:



```bash# Start production server# Shopify OAuth

# Get all orders

curl http://localhost:3000/ordersyarn start:prod



# Get orders for a specific shopSHOPIFY_API_KEY=your_shopify_api_key```bash

curl http://localhost:3000/orders/shop/your-store.myshopify.com

# Run tests

# Get all connected shops

curl http://localhost:3000/orders/shopsyarn testSHOPIFY_API_SECRET=your_shopify_api_secret# unit tests

```



## 📚 API Endpoints

# Run linterSHOPIFY_SCOPES=read_orders,write_orders$ yarn run test

### Authentication

yarn lint

| Method | Endpoint | Description |

|--------|----------|-------------|```SHOPIFY_API_VERSION=2023-10

| GET | `/auth/shopify?shop={shop}` | Initiate OAuth flow |

| GET | `/auth/callback` | OAuth callback (handled by Shopify) |



### Webhooks## Database SchemaHOST=https://<your-ngrok-url># e2e tests



| Method | Endpoint | Description |

|--------|----------|-------------|

| POST | `/webhooks/orders/create` | Receive order creation webhooks |### Shops Table```$ yarn run test:e2e



### Orders (REST API)Stores Shopify store information after OAuth:



| Method | Endpoint | Description |- `id`: Primary key

|--------|----------|-------------|

| GET | `/orders` | List all orders |- `shop`: Store domain (unique)

| GET | `/orders/shop/:shopDomain` | List orders for a specific shop |

| GET | `/orders/shops` | List all connected shops |- `access_token`: OAuth access token### 3. Run with Docker Compose# test coverage



## 🗄️ Database Schema- `connected_at`: Connection timestamp



### Shops Table- `created_at`: Record creation timestamp$ yarn run test:cov



```typescript- `updated_at`: Record update timestamp

{

  id: number;              // Primary keyStart the entire application (API + PostgreSQL):```

  shop: string;            // Store domain (unique)

  accessToken: string;     // OAuth access token### Orders Table

  connectedAt: Date;       // Connection timestamp

  createdAt: Date;         // Record creationStores Shopify orders received via webhook:

  updatedAt: Date;         // Last update

}- `id`: Primary key

```

- `shop_id`: Foreign key to shops table```bash## Deployment

### Orders Table

- `shopify_order_id`: Shopify order ID (unique)

```typescript

{- `order_number`: Order numberdocker-compose up

  id: number;              // Primary key

  shopId: number;          // Foreign key to shops- `email`: Customer email

  shopifyOrderId: string;  // Shopify order ID (unique)

  orderNumber: number;     // Order number- `total_price`: Order total```When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

  email: string;           // Customer email

  totalPrice: string;      // Order total- `currency`: Currency code

  currency: string;        // Currency code

  financialStatus: string; // Payment status- `financial_status`: Payment status

  fulfillmentStatus: string; // Fulfillment status

  orderData: JSON;         // Complete order data- `fulfillment_status`: Fulfillment status

  createdAt: Date;         // Record creation

  updatedAt: Date;         // Last update- `order_data`: Full order JSON from ShopifyOr run in detached mode:If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

}

```- `created_at`: Record creation timestamp



## 🔍 Example: Order Data Saved- `updated_at`: Record update timestamp



```json

{

  "id": 1,## API Endpoints```bash```bash

  "shopId": 1,

  "shopifyOrderId": "5432109876543",

  "orderNumber": 1001,

  "email": "customer@example.com",- `GET /` - Health checkdocker-compose up -d$ yarn install -g @nestjs/mau

  "totalPrice": "99.99",

  "currency": "USD",- `GET /auth/shopify` - Start OAuth flow (coming soon)

  "financialStatus": "paid",

  "fulfillmentStatus": "fulfilled",- `GET /auth/callback` - OAuth callback (coming soon)```$ mau deploy

  "orderData": {

    "id": 5432109876543,- `POST /webhooks/orders/create` - Receive order webhooks (coming soon)

    "order_number": 1001,

    "email": "customer@example.com",```

    "total_price": "99.99",

    "line_items": [...],## Testing

    "customer": {...},

    // ... complete Shopify order objectThe application will:

  },

  "createdAt": "2025-11-05T14:30:00Z",Access the application at: http://localhost:3000

  "updatedAt": "2025-11-05T14:30:00Z"

}- Start PostgreSQL on port 5433With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

```

Check database connection in the logs - you should see:

## 🛠️ Development

```- Run database migrations automatically

### Database Management

✅ Database connected successfully

```bash

# Generate new migration```- Start the NestJS API on port 3000## Resources

yarn db:generate



# Apply migrations

yarn db:push## Ngrok Setup



# Open Drizzle Studio (Database GUI)

yarn db:studio

```For webhook testing, expose your local server:### 4. Setup NgrokCheck out a few resources that may come in handy when working with NestJS:



### Code Quality



```bash```bash

# Lint code

yarn lintngrok http 3000



# Format code```In a separate terminal, start ngrok:- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

yarn format



# Run tests

yarn testUpdate the `HOST` variable in `.env` with the ngrok URL.- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).



# Run e2e tests

yarn test:e2e

```## Project Structure```bash- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).



## 🐛 Troubleshooting



### Webhook not received```ngrok http 3000- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.



1. Check ngrok is running and URL is correct in `.env`creatorsfy/

2. Verify webhook is registered in Shopify Admin:

   - Go to Settings → Notifications → Webhooks├── src/```- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).

3. Check application logs: `docker-compose logs -f api`

│   ├── db/

### HMAC validation failed

│   │   ├── schema.ts          # Database schema- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).

1. Ensure `SHOPIFY_API_SECRET` is correct in `.env`

2. Check that raw body is being parsed correctly│   │   ├── database.module.ts # Database module



### Database connection error│   │   └── database.service.ts # Database serviceCopy the HTTPS URL (e.g., `https://abc123.ngrok.io`) and update the `HOST` variable in your `.env` file.- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).



1. Ensure PostgreSQL is running: `docker-compose ps`│   ├── app.module.ts          # Main app module

2. Check `DATABASE_URL` in `.env`

3. Restart services: `docker-compose restart`│   └── main.ts                # Application entry point- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).



## 📝 Project Structure├── drizzle/                   # Database migrations



```├── docker-compose.yml         # Docker services configuration## 🗄️ Database Management

creatorsfy/

├── src/├── Dockerfile                 # API container configuration

│   ├── auth/

│   │   ├── auth.controller.ts      # OAuth endpoints└── .env.example               # Environment variables template## Support

│   │   ├── auth.service.ts         # OAuth logic

│   │   ├── auth.module.ts          # Auth module```

│   │   └── shop.service.ts         # Shop data management

│   ├── webhooks/### Run Migrations

│   │   ├── webhooks.controller.ts  # Webhook endpoints

│   │   ├── webhooks.service.ts     # Webhook processing## License

│   │   ├── webhooks.module.ts      # Webhooks module

│   │   └── order.service.ts        # Order data managementNest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

│   ├── orders/

│   │   ├── orders.controller.ts    # REST API for ordersUNLICENSED

│   │   └── orders.module.ts        # Orders module

│   ├── db/```bash

│   │   ├── schema.ts               # Database schema

│   │   ├── database.service.ts     # Database connectionyarn db:push## Stay in touch

│   │   └── database.module.ts      # Database module

│   ├── app.module.ts               # Root module```

│   └── main.ts                     # Application entry

├── drizzle/                        # Database migrations- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)

├── docker-compose.yml              # Docker services

├── Dockerfile                      # API container### Generate New Migration- Website - [https://nestjs.com](https://nestjs.com/)

├── .env.example                    # Environment template

└── README.md                       # This file- Twitter - [@nestframework](https://twitter.com/nestframework)

```

```bash

## ✅ Challenge Requirements

yarn db:generate## License

- [x] Shopify OAuth authentication

- [x] Automatic webhook registration```

- [x] HMAC validation for webhooks

- [x] Store orders in PostgreSQL with Drizzle ORMNest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

- [x] Docker & Docker Compose setup

- [x] Multi-shop support (diferencial)### Open Drizzle Studio (Database GUI)

- [x] REST API for listing orders (diferencial)

- [x] Clear README with instructions```bash

- [x] Organized commit historyyarn db:studio

```

## 📄 License

## 📚 Database Schema

UNLICENSED - For educational purposes only.

### Shops Table

## 👨‍💻 AuthorStores Shopify store information after OAuth authentication.



Developed as a technical challenge for Creatorsfy.| Column | Type | Description |

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
