/*عشان انا في الكلاينت سايد بتعامل مع الداتا بيز عن طريق PrismaClient 
2- الفانكشن اللي اسمها main بترجع promise وبكتب فيه ال PrismaClient اللي هو ال crud 
3- في مرحله الايرور هيطبع الايرور ويوقف العملية لان الداتا بيز شغاله
4- في الاخر بيعملديسكونيكت
*/
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.user.createMany({
  //   data: Array.from({ length: 25 }, () => ({
  //     email: faker.internet.email(),
  //     name: faker.internet.username(),
  //     address: {
  //       street: faker.location.street(),
  //       city: faker.location.city(),
  //       zip: faker.location.zipCode(),
  //       state: faker.location.state(),
  //     },
  //   })),
  // });
  await prisma.todo.createMany({
    data: Array.from({ length: 25 }, () => ({
      title: faker.lorem.text(),
      body: faker.lorem.paragraph(),
    })),
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
