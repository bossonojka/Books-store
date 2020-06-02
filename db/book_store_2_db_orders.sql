-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: book_store_2_db
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(100) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `date` bigint NOT NULL,
  `books` json DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (7,'выывывыв','1234567899',1588694610357,'[1]','ыавываыв'),(8,'12','1234567899',1589721615077,'[{\"id\": 3, \"count\": 1}, {\"id\": 4, \"count\": 1}]','wewe'),(9,'1212','3232323232',1590933600000,'[{\"id\": 12, \"count\": 4}, {\"id\": 13, \"count\": 5}]','swses'),(10,'2','1234567899',1589724061987,'[{\"id\": 3, \"count\": 2}, {\"id\": 4, \"count\": 2}]','erer'),(11,'d','1111111111',1590329005005,'[{\"id\": 2, \"count\": 1}]','d'),(12,'d','1111111111',1589724240980,'[]','d'),(13,'d','1111111111',1589724250986,'[]','d'),(14,'d','1111111111',1589724252765,'[]','d'),(15,'d','1111111111',1589724253953,'[]','d'),(16,'выывывыв','1234567899',1588694610357,'\"[]\"','ыавываыв'),(17,'выывывыв','1234567899',1588694610357,'\"[]\"','ыавываыв'),(18,'sd','1234567890',1589724376114,'[{\"id\": 3, \"count\": 1}]','sd'),(19,'выывывыв','1234567899',1588694610357,'\"[]\"','ыавываыв'),(20,'w','1234567890',1590329219414,'[{\"id\": 12, \"count\": 1}]','w'),(21,'sd','1111111111',1589724585044,'[{\"id\": 3, \"count\": 1}]','sd');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-01 17:13:16
