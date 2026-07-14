-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" TIMESTAMP(3),
    "accessToken" TEXT NOT NULL,
    "userId" BIGINT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "accountOwner" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT,
    "collaborator" BOOLEAN DEFAULT false,
    "emailVerified" BOOLEAN DEFAULT false,
    "refreshToken" TEXT,
    "refreshTokenExpires" TIMESTAMP(3),

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateDraft" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "templateName" TEXT NOT NULL,
    "textContent" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "btnBgColor" TEXT NOT NULL DEFAULT 'rgba(255,255,255,0.2)',
    "textColor" TEXT NOT NULL DEFAULT 'inherit',
    "showCloseButton" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemplateDraft_pkey" PRIMARY KEY ("id")
);
