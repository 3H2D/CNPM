/*
 Navicat Premium Data Transfer

 Source Server         : qltdp
 Source Server Type    : MySQL
 Source Server Version : 80033 (8.0.33)
 Source Host           : localhost:3306
 Source Schema         : dp

 Target Server Type    : MySQL
 Target Server Version : 80033 (8.0.33)
 File Encoding         : 65001

 Date: 05/07/2023 10:44:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for feedback_responses
-- ----------------------------
DROP TABLE IF EXISTS `feedback_responses`;
CREATE TABLE `feedback_responses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `ResponseContent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `feedbackId` int NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `feedbackId`(`feedbackId` ASC) USING BTREE,
  CONSTRAINT `feedback_responses_ibfk_1` FOREIGN KEY (`feedbackId`) REFERENCES `feedbacks` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of feedback_responses
-- ----------------------------
INSERT INTO `feedback_responses` VALUES (1, 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 13, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (2, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 2, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (3, 'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (4, 'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.', 17, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (5, 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 1, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (6, 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 15, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (7, 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.', 9, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (8, 'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 18, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (9, 'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.', 12, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (10, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 14, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (11, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.', 10, '2023-06-16 12:22:16', '2023-06-16 12:22:16');
INSERT INTO `feedback_responses` VALUES (12, 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.', 18, '2023-06-16 12:22:16', '2023-06-16 12:22:16');

-- ----------------------------
-- Table structure for feedbacks
-- ----------------------------
DROP TABLE IF EXISTS `feedbacks`;
CREATE TABLE `feedbacks`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `Content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `Category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `personId` int NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `personId`(`personId` ASC) USING BTREE,
  CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `people` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of feedbacks
-- ----------------------------
INSERT INTO `feedbacks` VALUES (1, 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.', 'Kiến nghị', 'xong', 10, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (2, 'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.', 'Kiến nghị', 'xong', 7, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (3, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 'Kiến nghị', 'đang xử lý', 16, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (4, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.', 'Kiến nghị', 'chưa xử lý', 18, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (5, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'Kiến nghị', 'chưa xử lý', 21, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (6, 'Trồng cây dọc đường', 'Kiến nghị', 'chưa xử lý', 5, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (7, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Khiếu nại', 'chưa xử lý', 9, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (8, 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.', 'Phản ánh', 'chưa xử lý', 3, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (9, 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.', 'Khiếu nại', 'xong', 13, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (10, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.', 'Phản ánh', 'chưa xử lý', 25, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (11, 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.', 'Phản ánh', 'đang xử lý', 6, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (12, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'Khiếu nại', 'xong', 16, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (13, 'Xin nuôi chó', 'Khiếu nại', 'đang xử lý', 5, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (14, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Khiếu nại', 'xong', 22, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (15, 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'Khiếu nại', 'đang xử lý', 13, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (16, 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Phản ánh', 'chưa xử lý', 1, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (17, 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', 'Khiếu nại', 'xong', 23, '2023-06-16 12:22:28', '2023-06-16 12:22:28');
INSERT INTO `feedbacks` VALUES (18, 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 'Phản ánh', 'đang xử lý', 1, '2023-06-16 12:22:28', '2023-06-16 12:22:28');

-- ----------------------------
-- Table structure for households
-- ----------------------------
DROP TABLE IF EXISTS `households`;
CREATE TABLE `households`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `HouseholdNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Location` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `HouseholderId` int NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of households
-- ----------------------------
INSERT INTO `households` VALUES (1, '001', '123 Street', 42, '2023-06-16 12:22:38', '2023-07-01 20:55:19');
INSERT INTO `households` VALUES (2, '002', '456 Lane', 43, '2023-06-16 12:22:38', '2023-07-01 21:06:57');
INSERT INTO `households` VALUES (3, '003', '789 Avenue', 41, '2023-06-16 12:22:38', '2023-07-01 15:24:22');
INSERT INTO `households` VALUES (4, '004', '321 Boulevard', 20, '2023-06-16 12:22:38', '2023-07-01 12:48:51');
INSERT INTO `households` VALUES (5, '005', '654 Road', 23, '2023-06-16 12:22:38', '2023-06-16 12:22:38');
INSERT INTO `households` VALUES (14, '935', '5181 Northview Court', 24, '2023-07-01 21:07:23', '2023-07-01 21:07:23');

-- ----------------------------
-- Table structure for people
-- ----------------------------
DROP TABLE IF EXISTS `people`;
CREATE TABLE `people`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Birthday` datetime NULL DEFAULT NULL,
  `BirthPlace` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `OriginPlace` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `ResidencyRegistrationDate` datetime NULL DEFAULT NULL,
  `PreviousResidencyAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `IsHouseholder` tinyint(1) NULL DEFAULT NULL,
  `RelationshipWithHouseholder` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `householdId` int NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `CCCD` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `Gender` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `householdId`(`householdId` ASC) USING BTREE,
  CONSTRAINT `people_ibfk_1` FOREIGN KEY (`householdId`) REFERENCES `households` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of people
-- ----------------------------
INSERT INTO `people` VALUES (1, 'Brenna Swannack', '1982-07-19 20:15:33', NULL, NULL, '2019-03-28 23:08:42', '2 Shasta Alley', 0, 'self', 3, '2023-06-16 12:20:47', '2023-07-01 21:07:49', '36202045816', 'đã mất', 'F');
INSERT INTO `people` VALUES (2, 'Eberhard Curgenven', '1966-02-19 20:38:19', NULL, NULL, '2021-04-08 20:31:12', '9 3rd Park', 0, 'children', 3, '2023-06-16 12:20:47', '2023-06-30 21:35:12', '36202024723', 'đã mất', 'F');
INSERT INTO `people` VALUES (3, 'Bridie Smellie', '1961-01-04 15:38:08', NULL, NULL, '2007-01-17 03:45:22', '9 Bartelt Center', 0, 'relative', 5, '2023-06-16 12:20:47', '2023-07-01 20:53:14', '36202036864', 'đã mất', 'M');
INSERT INTO `people` VALUES (4, 'John Doe', '1980-01-01 00:00:00', 'City A', 'City A', '2000-01-01 00:00:00', 'City A', 0, 'Self', 1, '2023-06-16 12:20:47', '2023-07-01 20:55:19', '36202090499', 'Cập nhật xoá chủ hộ', 'M');
INSERT INTO `people` VALUES (5, 'Adelbert Ironmonger', '1990-11-29 18:17:14', NULL, NULL, '1994-11-07 18:27:34', '1 Mosinee Alley', 0, 'children', 4, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202016712', NULL, 'F');
INSERT INTO `people` VALUES (6, 'Zenia Lovegrove', '1992-09-16 00:38:00', NULL, NULL, '1987-07-19 10:37:54', '01323 Merrick Way', 0, 'husband', 5, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202034160', NULL, 'M');
INSERT INTO `people` VALUES (7, 'Delores Kyston', '1970-02-25 03:53:59', NULL, NULL, '2019-06-02 17:08:51', '9000 Eastlawn Center', 1, 'self', NULL, '2023-06-16 12:20:47', '2023-07-01 13:35:26', '36202072590', 'Cập nhật thay đổi thành chủ hộ', 'M');
INSERT INTO `people` VALUES (8, 'Waneta Pohlke', '2017-10-02 11:23:10', NULL, NULL, '2006-07-01 20:50:57', '4482 Stone Corner Park', 0, 'children', 4, '2023-06-16 12:20:47', '2023-07-01 21:03:27', '36202017215', 'Đã qua đời', 'M');
INSERT INTO `people` VALUES (9, 'Jane Louis', '1982-02-02 00:00:00', 'City B', 'City B', '2002-02-02 00:00:00', 'City B', 0, 'Self', 2, '2023-06-16 12:20:47', '2023-07-01 21:06:57', '36202006277', 'Cập nhật xoá chủ hộ', 'F');
INSERT INTO `people` VALUES (10, 'Lotty Vaggs', '1960-07-21 03:04:46', NULL, NULL, '2017-08-19 23:09:03', '362 Warrior Avenue', 0, 'wife', 2, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202080323', NULL, 'F');
INSERT INTO `people` VALUES (11, 'Muhammad Muckleston', '1976-07-23 11:10:16', NULL, NULL, '1993-07-01 19:52:24', '1 Forster Terrace', 0, 'children', 5, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202087015', NULL, 'M');
INSERT INTO `people` VALUES (12, 'Denys Sawle', '1951-05-25 09:23:08', NULL, NULL, '2010-04-23 12:02:03', '08323 Homewood Point', 0, 'relative', 5, '2023-06-16 12:20:47', '2023-07-01 13:25:55', '36202019605', 'Đã khỏi ốm', 'F');
INSERT INTO `people` VALUES (13, 'Demetra Fishbie', '1973-02-03 21:32:11', NULL, NULL, '1989-01-27 20:48:34', '21363 Shopko Park', 0, 'husband', 1, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202062596', NULL, 'M');
INSERT INTO `people` VALUES (14, 'Noble Lartice', '1955-02-19 09:50:37', NULL, NULL, '1987-06-13 22:35:59', '24 Knutson Court', 1, 'self', NULL, '2023-06-16 12:20:47', '2023-07-01 13:44:51', '36202016065', 'Cập nhật thay đổi thành chủ hộ', 'F');
INSERT INTO `people` VALUES (15, 'Jim Smith', '1984-03-03 00:00:00', 'City C', 'City C', '2004-03-03 00:00:00', 'City C', 1, 'self', NULL, '2023-06-16 12:20:47', '2023-07-01 13:35:04', '36202097960', 'Cập nhật thay đổi thành chủ hộ', 'M');
INSERT INTO `people` VALUES (16, 'Bondie Ellerman', '1957-10-21 10:07:39', NULL, NULL, '1997-11-09 05:47:27', '14 Burrows Hill', 1, 'self', NULL, '2023-06-16 12:20:47', '2023-07-01 13:23:26', '36202031129', 'Cập nhật thay đổi thành chủ hộ', 'M');
INSERT INTO `people` VALUES (17, 'Kaiser Rizzello', '2004-01-14 01:00:49', NULL, NULL, '2000-02-11 19:36:32', '863 Loomis Terrace', 0, 'relative', 3, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202081486', NULL, 'F');
INSERT INTO `people` VALUES (18, 'Ferrel Alwen', '1976-01-23 00:13:44', NULL, NULL, '1989-10-24 15:37:05', '203 Elka Alley', 0, 'husband', 2, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202048073', NULL, 'M');
INSERT INTO `people` VALUES (19, 'Vitia Oldman', '2004-01-15 15:29:05', NULL, NULL, '1989-11-04 02:20:19', '6 Chinook Circle', 0, 'relative', 4, '2023-06-16 12:20:47', '2023-07-01 20:55:49', '36202020299', 'Cập nhật thay đổi thành chủ hộ', 'F');
INSERT INTO `people` VALUES (20, 'Jessica Smith', '1986-04-04 00:00:00', 'City D', 'City D', '2006-04-04 00:00:00', 'City D', 1, 'Self', 4, '2023-06-16 12:20:47', '2023-07-01 12:48:51', '36202016681', 'Cập nhật thay đổi thành chủ hộ', 'F');
INSERT INTO `people` VALUES (21, 'Veronike Jiracek', '1997-08-03 01:47:32', NULL, NULL, '2011-03-27 02:55:30', '683 Stone Corner Court', 0, 'children', 2, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202016691', NULL, 'M');
INSERT INTO `people` VALUES (22, 'Sybille Fearfull', '1961-05-24 07:48:09', NULL, NULL, '2007-03-31 13:08:04', '48 Randy Hill', 0, 'wife', 3, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36202216681', NULL, 'F');
INSERT INTO `people` VALUES (23, 'James Johnson', '1988-05-05 00:00:00', 'City E', 'City E', '2008-05-05 00:00:00', 'City E', 1, 'Self', 5, '2023-06-16 12:20:47', '2023-06-16 12:21:54', '36302016681', NULL, 'M');
INSERT INTO `people` VALUES (24, 'Kaiser Klaesson', '1994-09-03 06:22:18', NULL, NULL, '1987-11-25 12:45:41', '5181 Northview Court', 1, 'self', 14, '2023-06-16 12:20:47', '2023-07-01 21:07:23', '36202016683', 'Cập nhật thay đổi thành chủ hộ', 'M');
INSERT INTO `people` VALUES (25, 'Beaufort Lawes', '1982-09-25 10:22:09', NULL, NULL, '2003-04-03 05:03:59', '2 Delladonna Center', 0, 'children', 2, '2023-06-16 12:20:47', '2023-07-01 15:25:06', '36202017683', 'Cập nhật thay đổi thành chủ hộ', 'M');
INSERT INTO `people` VALUES (41, 'Rô Nan Độ', '2005-02-18 00:00:00', 'Bồ Đào Nha', NULL, NULL, 'Anh Lợn', 1, 'self', 3, '2023-07-01 13:32:34', '2023-07-01 15:24:22', '349238423', 'Cập nhật thay đổi thành chủ hộ', 'M');
INSERT INTO `people` VALUES (42, 'Al Sa Tỵ', '2023-07-10 00:00:00', 'Argentina', NULL, NULL, 'Bồ Đào Nha', 1, 'self', 1, '2023-07-01 20:54:08', '2023-07-01 20:55:19', '1324324324', 'Cập nhật thay đổi thành chủ hộ', 'M');
INSERT INTO `people` VALUES (43, 'AL Sa Tỵ', '2018-06-14 00:00:00', 'Argentina', NULL, NULL, 'Tay ban nha', 1, 'self', 2, '2023-07-01 21:06:15', '2023-07-01 21:06:57', '34093284', 'Cập nhật thay đổi thành chủ hộ', 'F');

-- ----------------------------
-- Table structure for temporary_absences
-- ----------------------------
DROP TABLE IF EXISTS `temporary_absences`;
CREATE TABLE `temporary_absences`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `StartDate` datetime NULL DEFAULT NULL,
  `EndDate` datetime NULL DEFAULT NULL,
  `Destination` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `personId` int NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `check` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `personId`(`personId` ASC) USING BTREE,
  CONSTRAINT `temporary_absences_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `people` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of temporary_absences
-- ----------------------------
INSERT INTO `temporary_absences` VALUES (1, '2023-04-26 22:00:29', '2023-07-30 04:36:02', '75678 Vernon Parkway', 'Đi học', 17, '2023-06-16 12:22:46', '2023-06-16 12:22:46', 0);
INSERT INTO `temporary_absences` VALUES (2, '2023-02-10 17:05:36', '2023-09-10 19:55:44', '664 Warbler Lane', 'Đi du lịch', 10, '2023-06-16 12:22:46', '2023-06-16 12:22:46', 0);
INSERT INTO `temporary_absences` VALUES (3, '2023-05-19 18:36:53', '2024-05-22 19:16:37', '3 Starling Hill', 'Đi công tác', 12, '2023-06-16 12:22:46', '2023-06-16 12:22:46', 1);
INSERT INTO `temporary_absences` VALUES (4, '2022-11-25 06:21:28', '2023-09-02 02:31:50', '5 Farwell Road', 'Đi thăm người thân', 7, '2023-06-16 12:22:46', '2023-06-16 12:22:46', 1);
INSERT INTO `temporary_absences` VALUES (5, '2022-07-30 07:41:35', '2024-09-15 05:43:56', '02 Canary Junction', 'Đi du lịch', 3, '2023-06-16 12:22:46', '2023-06-16 12:22:46', 1);

-- ----------------------------
-- Table structure for temporary_residences
-- ----------------------------
DROP TABLE IF EXISTS `temporary_residences`;
CREATE TABLE `temporary_residences`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `StartDate` datetime NULL DEFAULT NULL,
  `EndDate` datetime NULL DEFAULT NULL,
  `PreviousResidenceAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `personId` int NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `check` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `personId`(`personId` ASC) USING BTREE,
  CONSTRAINT `temporary_residences_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `people` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of temporary_residences
-- ----------------------------
INSERT INTO `temporary_residences` VALUES (1, '2022-07-01 10:35:23', '2024-09-16 08:36:41', '6 Bultman Lane', 21, '2023-06-16 12:22:54', '2023-06-16 12:22:54', 0);
INSERT INTO `temporary_residences` VALUES (2, '2023-01-09 11:23:28', '2023-11-26 19:24:30', '80 Vera Pass', 10, '2023-06-16 12:22:54', '2023-06-16 12:22:54', 0);
INSERT INTO `temporary_residences` VALUES (3, '2022-12-21 22:53:11', '2025-05-22 03:38:26', '709 Spohn Hill', 2, '2023-06-16 12:22:54', '2023-06-16 12:22:54', 1);
INSERT INTO `temporary_residences` VALUES (4, '2022-08-10 00:01:26', '2024-03-23 11:24:05', '3329 Del Mar Trail', 2, '2023-06-16 12:22:54', '2023-06-16 12:22:54', 1);
INSERT INTO `temporary_residences` VALUES (5, '2023-04-25 13:19:28', '2023-11-28 13:38:12', '62851 Johnson Way', 16, '2023-06-16 12:22:54', '2023-06-16 12:22:54', 1);
INSERT INTO `temporary_residences` VALUES (6, '2023-05-28 04:52:47', '2024-01-12 09:31:09', '198 Scott Terrace', 19, '2023-06-16 12:22:54', '2023-06-16 12:22:54', 1);
INSERT INTO `temporary_residences` VALUES (7, '2022-11-23 09:11:16', '2024-10-07 17:29:44', '753 Waxwing Parkway', 16, '2023-06-16 12:22:54', '2023-06-16 12:22:54', 1);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `personId` int NOT NULL,
  PRIMARY KEY (`id`, `username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', '123', 1, '2023-06-16 12:23:26', '2023-06-16 12:23:26', 0);
INSERT INTO `users` VALUES (2, 'huy', '123', 0, '2023-06-16 12:23:26', '2023-06-16 12:23:26', 12);
INSERT INTO `users` VALUES (3, 'duc', '123', 0, '2023-06-16 12:23:26', '2023-06-16 12:23:26', 5);

SET FOREIGN_KEY_CHECKS = 1;
