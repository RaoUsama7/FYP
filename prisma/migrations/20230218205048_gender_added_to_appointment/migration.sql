/*
  Warnings:

  - Added the required column `gender` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` ADD COLUMN `gender` VARCHAR(191) NOT NULL;
