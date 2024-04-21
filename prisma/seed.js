const { PrismaClient } = require("@prisma/client");
const { dummyDoctors, dummyPatients } = require("./dummy-data");

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.doctor.deleteMany();
    console.log("Records in Doctors table deleted");
    await prisma.patient.deleteMany();
    console.log("Records in Patients table deleted");

    await prisma.$queryRaw`TRUNCATE TABLE pnc_doctors RESTART IDENTITY;`;
    console.log("Reset Doctors table auto increment to 1");
    await prisma.$queryRaw`TRUNCATE TABLE pnc_patients RESTART IDENTITY;`;
    console.log("Reset Patients table auto increment to 1");

    await prisma.doctor.createMany({
      data: dummyDoctors,
    });
    console.log("Dummy Doctors data added");
    await prisma.patient.createMany({
      data: dummyPatients,
    });
    console.log("Dummy Patients data added");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
