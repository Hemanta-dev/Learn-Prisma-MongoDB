# Connect Prisma with MongoDB Documentation

This documentation provides a step-by-step guide on how to set up and run a project using Prisma with MongoDB as the database provider.

## Prerequisites

Before getting started, make sure you have the following installed on your system:

1. [Node.js](https://nodejs.org) and npm (Node Package Manager).
2. [Yarn](https://yarnpkg.com) (optional but recommended).

## Project Setup and Configuration

Follow the steps below to set up and configure your project with Prisma and MongoDB:

### Step 1: Install Prisma

```bash
yarn add prisma --save-dev
```

### Step 2: Initialize Prisma

```bash
yarn prisma init
```

### Step 3: Configure MongoDB Datasource

In the `prisma/schema.prisma` file, update it with the following code:

```prisma
datasource db {
  provider = "mongodb"
  url = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  name String
  email String @unique
  password String @default("cGFzc3dvcmQ=")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Step 4: Customize Prisma Schema

You can add more models or make any necessary changes to the `prisma/schema.prisma` file as required by your application.

### Step 5: Seed Data into the Database

Create a JavaScript file (e.g., `./prisma/user.js`) to seed data into the database:

```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    // Create users
    const users = [
      {
        name: "Admin",
        email: "admin@example.com",
        password: "password123",
      },
    ];

    for (const user of users) {
      await prisma.user.create({
        data: user,
      });
    }

    console.log("User seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding user data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
```

### Step 6: Add Seed Script to package.json

Add the following script to the `package.json` file to execute the seed script easily:

```json
"scripts": {
  "seed": "node ./prisma/user.js"
}
```

### Step 7: Run Prisma Migration

Apply the changes to the database by running the Prisma migration command:

```bash
yarn prisma generate
```

### Step 8: Launch Prisma Studio

To access and interact with the data through Prisma Studio, run the following command:

```bash
yarn prisma studio
```

## Running the Project

To seed data into the database, use the following command:

```bash
yarn seed
```

To launch Prisma Studio, use the following command:

```bash
yarn prisma studio
```
## cjs vs mjs
```bash
- mjs an extension for EcmaScript modules 
- An MJS file is a source code file containing an ES Module (ECMAScript Module) for use with a Node.js application.
- MJS files are written in JavaScript, and may also use the .JS extension outside of the Node.js context.
- Here, we can use import function rather than the const ... something require .
```
Remember to run the appropriate commands whenever you make changes to the schema or want to seed data.

Congratulations! Your project is now set up and ready to use Prisma with MongoDB as the database provider.

Feel free to explore Prisma's capabilities and start building your application! Happy coding!

For more in-depth knowledge, you can refer to the official Prisma documentation: [Connect Your Database to Prisma with Node.js and MongoDB](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb/connect-your-database-node-mongodb).