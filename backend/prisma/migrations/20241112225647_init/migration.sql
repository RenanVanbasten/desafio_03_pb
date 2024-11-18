/*
  Warnings:

  - Made the column `created_date` on table `category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_date` on table `category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_date` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_date` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "category" ALTER COLUMN "created_date" SET NOT NULL,
ALTER COLUMN "created_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_date" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updated_date" SET NOT NULL,
ALTER COLUMN "updated_date" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "created_date" SET NOT NULL,
ALTER COLUMN "created_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_date" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updated_date" SET NOT NULL,
ALTER COLUMN "updated_date" SET DATA TYPE TIMESTAMP(3);
