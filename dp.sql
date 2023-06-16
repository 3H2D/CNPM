-- MySQL dump 10.13  Distrib 8.0.33, for macos12.6 (x86_64)
--
-- Host: 127.0.0.1    Database: dp
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `feedback_responses`
--

DROP TABLE IF EXISTS `feedback_responses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback_responses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ResponseContent` text COLLATE utf8mb4_general_ci,
  `feedbackId` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `feedbackId` (`feedbackId`),
  CONSTRAINT `feedback_responses_ibfk_1` FOREIGN KEY (`feedbackId`) REFERENCES `feedbacks` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback_responses`
--

LOCK TABLES `feedback_responses` WRITE;
/*!40000 ALTER TABLE `feedback_responses` DISABLE KEYS */;
INSERT INTO `feedback_responses` VALUES (1,'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',13,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(2,'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',2,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(3,'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',1,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(4,'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',17,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(5,'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',20,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(6,'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',15,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(7,'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',9,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(8,'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',18,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(9,'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',12,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(10,'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',14,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(11,'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',10,'2023-06-16 05:22:16','2023-06-16 05:22:16'),(12,'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',18,'2023-06-16 05:22:16','2023-06-16 05:22:16');
/*!40000 ALTER TABLE `feedback_responses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedbacks`
--

DROP TABLE IF EXISTS `feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedbacks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Content` text COLLATE utf8mb4_general_ci,
  `Category` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Status` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `personId` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `personId` (`personId`),
  CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `people` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedbacks`
--

LOCK TABLES `feedbacks` WRITE;
/*!40000 ALTER TABLE `feedbacks` DISABLE KEYS */;
INSERT INTO `feedbacks` VALUES (1,'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.','Kiến nghị','xong',13,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(2,'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.','Kiến nghị','xong',11,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(3,'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.','Kiến nghị','đang xử lý',18,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(4,'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.','Kiến nghị','chưa xử lý',19,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(5,'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.','Kiến nghị','chưa xử lý',22,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(6,'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.','Kiến nghị','chưa xử lý',9,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(7,'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.','Khiếu nại','chưa xử lý',2,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(8,'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.','Phản ánh','chưa xử lý',8,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(9,'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.','Khiếu nại','xong',16,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(10,'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.','Phản ánh','chưa xử lý',25,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(11,'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.','Phản ánh','đang xử lý',10,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(12,'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.','Khiếu nại','xong',18,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(13,'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.','Khiếu nại','đang xử lý',9,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(14,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.','Khiếu nại','xong',23,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(15,'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.','Khiếu nại','đang xử lý',16,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(16,'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.','Phản ánh','chưa xử lý',6,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(17,'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.','Khiếu nại','xong',5,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(18,'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.','Phản ánh','đang xử lý',6,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(19,'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.','Khiếu nại','chưa xử lý',5,'2023-06-16 05:22:28','2023-06-16 05:22:28'),(20,'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.','Phản ánh','xong',9,'2023-06-16 05:22:28','2023-06-16 05:22:28');
/*!40000 ALTER TABLE `feedbacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `households`
--

DROP TABLE IF EXISTS `households`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `households` (
  `id` int NOT NULL AUTO_INCREMENT,
  `HouseholdNumber` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Location` text COLLATE utf8mb4_general_ci,
  `HouseholderId` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `households`
--

LOCK TABLES `households` WRITE;
/*!40000 ALTER TABLE `households` DISABLE KEYS */;
INSERT INTO `households` VALUES (1,'001','123 Street',3,'2023-06-16 05:22:38','2023-06-16 05:22:38'),(2,'002','456 Lane',2,'2023-06-16 05:22:38','2023-06-16 05:22:38'),(3,'003','789 Avenue',4,'2023-06-16 05:22:38','2023-06-16 05:22:38'),(4,'004','321 Boulevard',1,'2023-06-16 05:22:38','2023-06-16 05:22:38'),(5,'005','654 Road',5,'2023-06-16 05:22:38','2023-06-16 05:22:38');
/*!40000 ALTER TABLE `households` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `people`
--

DROP TABLE IF EXISTS `people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `people` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Birthday` datetime DEFAULT NULL,
  `BirthPlace` text COLLATE utf8mb4_general_ci,
  `OriginPlace` text COLLATE utf8mb4_general_ci,
  `ResidencyRegistrationDate` datetime DEFAULT NULL,
  `PreviousResidencyAddress` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `IsHouseholder` tinyint(1) DEFAULT NULL,
  `RelationshipWithHouseholder` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `householdId` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `householdId` (`householdId`),
  CONSTRAINT `people_ibfk_1` FOREIGN KEY (`householdId`) REFERENCES `households` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `people`
--

LOCK TABLES `people` WRITE;
/*!40000 ALTER TABLE `people` DISABLE KEYS */;
INSERT INTO `people` VALUES (1,'John Doe','1980-01-01 00:00:00','City A','City A','2000-01-01 00:00:00','City A',1,'Self',1,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(2,'Jane Doe','1982-02-02 00:00:00','City B','City B','2002-02-02 00:00:00','City B',1,'Self',2,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(3,'Jim Smith','1984-03-03 00:00:00','City C','City C','2004-03-03 00:00:00','City C',1,'Self',3,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(4,'Jessica Smith','1986-04-04 00:00:00','City D','City D','2006-04-04 00:00:00','City D',1,'Self',4,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(5,'James Johnson','1988-05-05 00:00:00','City E','City E','2008-05-05 00:00:00','City E',1,'Self',5,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(6,'Brenna Swannack','1982-07-19 20:15:33',NULL,NULL,'2019-03-28 23:08:42','2 Shasta Alley',0,'parent',3,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(7,'Eberhard Curgenven','1966-02-19 20:38:19',NULL,NULL,'2021-04-08 20:31:12','9 3rd Park',0,'children',3,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(8,'Bridie Smellie','1961-01-04 15:38:08',NULL,NULL,'2007-01-17 03:45:22','9 Bartelt Center',0,'relative',5,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(9,'Adelbert Ironmonger','1990-11-29 18:17:14',NULL,NULL,'1994-11-07 18:27:34','1 Mosinee Alley',0,'children',4,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(10,'Zenia Lovegrove','1992-09-16 00:38:00',NULL,NULL,'1987-07-19 10:37:54','01323 Merrick Way',0,'husband',5,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(11,'Delores Kyston','1970-02-25 03:53:59',NULL,NULL,'2019-06-02 17:08:51','9000 Eastlawn Center',0,'children',3,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(12,'Waneta Pohlke','1974-08-02 11:23:10',NULL,NULL,'2006-07-01 20:50:57','4482 Stone Corner Park',0,'children',4,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(13,'Lotty Vaggs','1960-07-21 03:04:46',NULL,NULL,'2017-08-19 23:09:03','362 Warrior Avenue',0,'wife',2,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(14,'Muhammad Muckleston','1976-07-23 11:10:16',NULL,NULL,'1993-07-01 19:52:24','1 Forster Terrace',0,'children',5,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(15,'Denys Sawle','1951-05-25 09:23:08',NULL,NULL,'2010-04-23 12:02:03','08323 Homewood Point',0,'relative',5,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(16,'Demetra Fishbie','1973-02-03 21:32:11',NULL,NULL,'1989-01-27 20:48:34','21363 Shopko Park',0,'husband',1,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(17,'Noble Lartice','1955-02-19 09:50:37',NULL,NULL,'1987-06-13 22:35:59','24 Knutson Court',0,'wife',5,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(18,'Bondie Ellerman','1957-10-21 10:07:39',NULL,NULL,'1997-11-09 05:47:27','14 Burrows Hill',0,'children',3,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(19,'Ferrel Alwen','1976-01-23 00:13:44',NULL,NULL,'1989-10-24 15:37:05','203 Elka Alley',0,'husband',2,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(20,'Kaiser Rizzello','2004-01-14 01:00:49',NULL,NULL,'2000-02-11 19:36:32','863 Loomis Terrace',0,'relative',3,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(21,'Vitia Oldman','2000-06-15 15:29:05',NULL,NULL,'1989-11-04 02:20:19','6 Chinook Circle',0,'parent',5,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(22,'Veronike Jiracek','1997-08-03 01:47:32',NULL,NULL,'2011-03-27 02:55:30','683 Stone Corner Court',0,'children',2,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(23,'Sybille Fearfull','1961-05-24 07:48:09',NULL,NULL,'2007-03-31 13:08:04','48 Randy Hill',0,'wife',3,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(24,'Kaiser Klaesson','1994-09-03 06:22:18',NULL,NULL,'1987-11-25 12:45:41','5181 Northview Court',0,'husband',4,'2023-06-16 05:20:47','2023-06-16 05:21:54'),(25,'Beaufort Lawes','1982-09-25 10:22:09',NULL,NULL,'2003-04-03 05:03:59','2 Delladonna Center',0,'wife',4,'2023-06-16 05:20:47','2023-06-16 05:21:54');
/*!40000 ALTER TABLE `people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temporary_absences`
--

DROP TABLE IF EXISTS `temporary_absences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temporary_absences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Destination` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Reason` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `personId` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `personId` (`personId`),
  CONSTRAINT `temporary_absences_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `people` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temporary_absences`
--

LOCK TABLES `temporary_absences` WRITE;
/*!40000 ALTER TABLE `temporary_absences` DISABLE KEYS */;
INSERT INTO `temporary_absences` VALUES (1,'2023-04-26 22:00:29','2023-07-30 04:36:02','75678 Vernon Parkway','Đi học',20,'2023-06-16 05:22:46','2023-06-16 05:22:46'),(2,'2023-02-10 17:05:36','2023-09-10 19:55:44','664 Warbler Lane','Đi du lịch',13,'2023-06-16 05:22:46','2023-06-16 05:22:46'),(3,'2023-05-19 18:36:53','2024-05-22 19:16:37','3 Starling Hill','Đi công tác',15,'2023-06-16 05:22:46','2023-06-16 05:22:46'),(4,'2022-11-25 06:21:28','2023-09-02 02:31:50','5 Farwell Road','Đi thăm người thân',11,'2023-06-16 05:22:46','2023-06-16 05:22:46'),(5,'2022-07-30 07:41:35','2024-09-15 05:43:56','02 Canary Junction','Đi du lịch',8,'2023-06-16 05:22:46','2023-06-16 05:22:46');
/*!40000 ALTER TABLE `temporary_absences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temporary_residences`
--

DROP TABLE IF EXISTS `temporary_residences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temporary_residences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `PreviousResidenceAddress` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `personId` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `personId` (`personId`),
  CONSTRAINT `temporary_residences_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `people` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temporary_residences`
--

LOCK TABLES `temporary_residences` WRITE;
/*!40000 ALTER TABLE `temporary_residences` DISABLE KEYS */;
INSERT INTO `temporary_residences` VALUES (1,'2022-07-01 10:35:23','2024-09-16 08:36:41','6 Bultman Lane',22,'2023-06-16 05:22:54','2023-06-16 05:22:54'),(2,'2023-01-09 11:23:28','2023-11-26 19:24:30','80 Vera Pass',13,'2023-06-16 05:22:54','2023-06-16 05:22:54'),(3,'2022-12-21 22:53:11','2025-05-22 03:38:26','709 Spohn Hill',7,'2023-06-16 05:22:54','2023-06-16 05:22:54'),(4,'2022-08-10 00:01:26','2024-03-23 11:24:05','3329 Del Mar Trail',7,'2023-06-16 05:22:54','2023-06-16 05:22:54'),(5,'2023-04-25 13:19:28','2023-11-28 13:38:12','62851 Johnson Way',18,'2023-06-16 05:22:54','2023-06-16 05:22:54'),(6,'2023-05-28 04:52:47','2024-01-12 09:31:09','198 Scott Terrace',21,'2023-06-16 05:22:54','2023-06-16 05:22:54'),(7,'2022-11-23 09:11:16','2024-10-07 17:29:44','753 Waxwing Parkway',18,'2023-06-16 05:22:54','2023-06-16 05:22:54');
/*!40000 ALTER TABLE `temporary_residences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'huynh','123',1,'2023-06-16 05:23:26','2023-06-16 05:23:26'),(2,'huy','123',0,'2023-06-16 05:23:26','2023-06-16 05:23:26'),(3,'duc','123',0,'2023-06-16 05:23:26','2023-06-16 05:23:26');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-16 12:26:45
