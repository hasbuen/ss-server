-- CreateTable
CREATE TABLE `boss` (
    `id_boss` CHAR(36) NOT NULL,
    `username_boss` CHAR(10) NOT NULL,
    `password_boss` CHAR(36) NOT NULL,
    `token_boss` VARCHAR(255) NULL,
    `email_boss` VARCHAR(100) NOT NULL,
    `createdAt_boss` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt_boss` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_boss`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `calls` (
    `id_call` CHAR(36) NOT NULL,
    `ticket_call` INTEGER NOT NULL,
    `contact_call` CHAR(35) NOT NULL,
    `level_call` INTEGER NULL DEFAULT 0,
    `path_call` VARCHAR(255) NOT NULL,
    `createdAt_call` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt_call` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `owner_id` CHAR(36) NULL,

    INDEX `fk_calls_owners`(`owner_id`),
    PRIMARY KEY (`id_call`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `owners` (
    `id_owner` CHAR(36) NOT NULL,
    `username_owner` CHAR(10) NOT NULL,
    `password_owner` CHAR(36) NOT NULL,
    `token_owner` VARCHAR(255) NULL,
    `email_owner` VARCHAR(100) NOT NULL,
    `createdAt_owner` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt_owner` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `boss_id` CHAR(36) NULL,

    INDEX `fk_owners_boss`(`boss_id`),
    PRIMARY KEY (`id_owner`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions` (
    `id_permission` CHAR(36) NOT NULL,
    `insert_permission` BOOLEAN NULL DEFAULT false,
    `edit_permission` BOOLEAN NULL DEFAULT false,
    `update_permission` BOOLEAN NULL DEFAULT false,
    `remove_permission` BOOLEAN NULL DEFAULT false,
    `boss_id` CHAR(36) NULL,
    `owner_id` CHAR(36) NULL,

    INDEX `fk_permissions_boss`(`boss_id`),
    INDEX `fk_permissions_owners`(`owner_id`),
    PRIMARY KEY (`id_permission`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relationships` (
    `id_relationship` CHAR(36) NOT NULL,
    `ticket_relationship` INTEGER NOT NULL,
    `contact_relationship` CHAR(35) NOT NULL,
    `createdAt_relationship` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt_relationship` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `call_id` CHAR(36) NULL,

    INDEX `fk_relationships_calls`(`call_id`),
    PRIMARY KEY (`id_relationship`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `calls` ADD CONSTRAINT `fk_calls_owners` FOREIGN KEY (`owner_id`) REFERENCES `owners`(`id_owner`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `owners` ADD CONSTRAINT `fk_owners_boss` FOREIGN KEY (`boss_id`) REFERENCES `boss`(`id_boss`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `permissions` ADD CONSTRAINT `fk_permissions_boss` FOREIGN KEY (`boss_id`) REFERENCES `boss`(`id_boss`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `permissions` ADD CONSTRAINT `fk_permissions_owners` FOREIGN KEY (`owner_id`) REFERENCES `owners`(`id_owner`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `relationships` ADD CONSTRAINT `fk_relationships_calls` FOREIGN KEY (`call_id`) REFERENCES `calls`(`id_call`) ON DELETE RESTRICT ON UPDATE RESTRICT;
