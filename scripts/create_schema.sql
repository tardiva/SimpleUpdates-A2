SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `simple_updates` DEFAULT CHARACTER SET latin1 ;
USE `simple_updates` ;

-- -----------------------------------------------------
-- Table `simple_updates`.`tenants`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `simple_updates`.`tenants` ;

CREATE TABLE IF NOT EXISTS `simple_updates`.`tenants` (
  `id` INT(70) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
   PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `simple_updates`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `simple_updates`.`users` ;

CREATE TABLE IF NOT EXISTS `simple_updates`.`users` (
  `id` INT(70) NOT NULL AUTO_INCREMENT,
  `tenant_id` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NULL,
  `is_admin`BOOLEAN NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `simple_updates`.`projects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `simple_updates`.`projects` ;

CREATE TABLE IF NOT EXISTS `simple_updates`.`projects` (
  `id` INT(70) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `manager` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`manager`) REFERENCES `users`(`id`))  
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `simple_updates`.`updates`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `simple_updates`.`updates` ;

CREATE TABLE IF NOT EXISTS `simple_updates`.`updates` (
  `id`  INT(70) NOT NULL AUTO_INCREMENT,
  `project_id` INT NOT NULL,
  `date_created` DATETIME NOT NULL,
  `status` INT NOT NULL,
  `text` VARCHAR(2000) NOT NULL,
  `updated_by` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`),
  FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;