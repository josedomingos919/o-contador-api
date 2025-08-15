-- CreateTable
CREATE TABLE "faq" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" INTEGER DEFAULT 10,
    "question" TEXT,
    "answer" TEXT,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id")
);
