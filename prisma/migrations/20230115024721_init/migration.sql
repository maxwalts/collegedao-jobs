-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'https://gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e?s=400&d=robohash&r=x',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Anonymous';
