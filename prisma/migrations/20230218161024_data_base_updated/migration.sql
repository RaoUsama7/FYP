/*
  Warnings:

  - You are about to drop the column `date` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `filename` on the `report` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `labattendent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `TestType` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_userId_fkey`;

-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `Customer_userId_fkey`;

-- DropForeignKey
ALTER TABLE `labattendent` DROP FOREIGN KEY `LabAttendent_userId_fkey`;

-- DropForeignKey
ALTER TABLE `test` DROP FOREIGN KEY `Test_userId_fkey`;

-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `date`,
    ADD COLUMN `TestType` VARCHAR(191) NOT NULL,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `report` DROP COLUMN `filename`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `is_admin` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `customer`;

-- DropTable
DROP TABLE `labattendent`;

-- DropTable
DROP TABLE `test`;
