// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient()

// async function main() {
//     const allUsers = await prisma.user.findMany()
//     console.log(allUsers)
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

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