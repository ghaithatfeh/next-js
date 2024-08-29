/*
  Warnings:

  - You are about to drop the column `regesterAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `regesterAt`,
    ADD COLUMN `registeredAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
