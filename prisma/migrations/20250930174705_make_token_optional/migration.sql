/*
  Warnings:

  - Added the required column `identifier` to the `Verification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Verification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Verification" ADD COLUMN     "identifier" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;
