-- CreateTable
CREATE TABLE "exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "exercise_pkey" PRIMARY KEY ("id")
);
