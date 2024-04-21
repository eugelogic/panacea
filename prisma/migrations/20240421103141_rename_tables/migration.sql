-- CreateTable
CREATE TABLE "pnc_doctors" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "pricePerHour" DOUBLE PRECISION DEFAULT 0.0,
    "email" VARCHAR(255) NOT NULL,
    "avatar" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pnc_doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pnc_patients" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "avatar" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pnc_patients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pnc_doctors_email_key" ON "pnc_doctors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pnc_patients_email_key" ON "pnc_patients"("email");
