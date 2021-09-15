-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2021 at 08:52 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mymadgames`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `GameId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `UserId`, `GameId`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(14, 21, 19, 9, 135000, '2021-09-14 20:45:34', '2021-09-14 20:45:34'),
(18, 21, 22, 9, 54000, '2021-09-15 13:42:41', '2021-09-15 13:42:41'),
(19, 23, 19, 5, 75000, '2021-09-15 18:34:17', '2021-09-15 18:34:17'),
(20, 23, 22, 4, 24000, '2021-09-15 18:35:03', '2021-09-15 18:35:03');

-- --------------------------------------------------------

--
-- Table structure for table `favs`
--

CREATE TABLE `favs` (
  `id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `GameId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favs`
--

INSERT INTO `favs` (`id`, `UserId`, `GameId`, `created_at`, `updated_at`) VALUES
(3, 21, 13, '2021-09-04 03:06:15', '2021-09-04 03:06:15'),
(8, 21, 5, '2021-09-04 03:15:18', '2021-09-04 03:15:18');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `image` varchar(150) NOT NULL,
  `genreId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `platformId` int(11) NOT NULL,
  `release_year` year(4) NOT NULL,
  `requirements` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `link` varchar(150) NOT NULL,
  `category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `image`, `genreId`, `name`, `price`, `platformId`, `release_year`, `requirements`, `description`, `link`, `category`, `created_at`, `updated_at`) VALUES
(5, '/images/44437-the-last-of-us.jpg', 2, 'The last of Us 2', 9000, 3, 0000, 'N/A', 'The Last of Us Part 2 nos pone en el papel de Ellie algunos años después del final de la primera entrega. Seguiremos una historia con mucho sentimiento de furia, llorar en los primeros 30 minutos de juego fue algo que solo pasó en su precuela. Ahora nos enojaremos, haciendo que la vida cobre un valor desechable.', 'https://www.youtube.com/embed/orDRnUXu-Rw', 1, '2021-08-30 23:47:22', '2021-08-30 23:47:22'),
(13, '/images/GTA.jpg', 2, 'GTAV', 2400, 5, 0000, 'Operating System: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1.\r\nProcessor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5', 'For me, Grand Theft Auto V’s extraordinary scope is summed up in two favourite moments. One is from a mid-game mission in which I flew a plane into another plane, fought the crew, hijacked the thing, and then parachuted out and watched it crash into the sea to escape death at the hands of incoming military fighter jets. Another time, whilst driving around in an off-road buggy, I got distracted by something that looked like a path up one of the San Andreas mountains. Turns out it was a path, and I spent 15 minutes following to the summit, where I nearly ran over a group of hikers. “Typical!” one of them yelled at me, as if he nearly gets run over by a rogue ATV on top of a mountain every time he goes on a hike.', 'https://www.youtube.com/embed/_UB5hpk0iqg', 1, '2021-09-01 02:21:36', '2021-09-01 02:21:36'),
(14, '/images/godOfWar.jpg', 2, 'God of war', 6000, 3, 0000, '', 'His vengeance against the gods of Olympus far behind him, Kratos now lives as a man in the lands of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. As mentor and protector to a son determined to earn his respect, Kratos is faced with an unexpected opportunity to master the rage that has long defined him. Questioning the dark lineage he’s passed on to his son, he hopes to make amends for the shortcomings of his past. Set within the untamed forests, mountains, and realms of Norse lore, God of War features a distinctly new setting with its own pantheon of creatures, monsters, and gods.', 'https://www.youtube.com/embed/x_MtcOznfM4', 1, '2021-09-01 02:23:35', '2021-09-01 02:23:35'),
(15, '/images/daysGone.jpg', 1, 'Days Gone', 7000, 3, 0000, '', 'Days Gone is a fun post-apocalyptic road trip simulator, but the things it does well are ultimately overwhelmed by the dreary story, repetitive missions, sluggish controls, and lifeless world. It\'s great seeing more PlayStation exclusives coming to PC, and long may that continue. But if Days Gone hadn\'t made the transition, I don\'t think it would have been a great loss for the platform. Look, just play Avalanche\'s Mad Max game from 2015 instead. It does everything Days Gone does, but with a sense of humour, a wasteland that\'s actually worth exploring, and you get to be the road warrior Max R', 'https://www.youtube.com/embed/D3_EFHlDBFg', 1, '2021-09-01 02:26:42', '2021-09-01 02:26:42'),
(19, '/images/fc.jpg', 2, 'Far cry 6', 15000, 5, 0000, 'N/A', 'The Far Cry series has changed a lot over the 17 years since the original launched on PC in 2004. Not everything has been as drastic as Far Cry 2’s choice to abandon the genetically engineered man-monsters of the first, or the introduction of RPG-style skill trees in FC3, but almost every game has done its part to tweak things in some way or another. Far Cry 6 will certainly feel extremely familiar to longtime fans, but it also takes some big swings at shaking things up. It’s a combo that, based on my experience with the first few hours in a recent remote demo, mostly works really well – though I’m not entirely sold yet on some of its newer elements.\r\n\r\nThe core pillars of Far Cry-dom – exotic locations, maniacal bad guys (I only had one face-to-face run-in with Giancarlo Esposito’s Anton Castillo, but he was, as expected, delightfully ominous), and a hefty dose of madcap violence – are all still there. I only explored a fraction of Yara’s apparently massive map, and while it’s great to be back in a tropical setting with the added benefit of modern graphics, I’m actually most looking forward to seeing how Far Cry 6 plays with all new environments. After all, aside from the one strip of a rural main street in Far Cry 5 and a couple of villages in 4, we’ve never really seen a proper town in a Far Cry game - let alone a whole modern city like Yara’s capital of Esperanza, and I’m really curious to see how the guerilla tactics the series is known for translate to an urban setting.', 'https://www.youtube.com/embed/-os7uPIXK20', 2, '2021-09-07 19:52:22', '2021-09-07 19:52:22'),
(22, '/images/Hitman-3-PS4.jpg', 2, 'Hitman', 6000, 3, 0000, 'N/A', 'Hagamos un repasito. Hitman es un juego de puro sigilo. Cada nivel es un mini mundo abierto habitado por cientos de personajes, donde la misión y el objetivo principal es siempre el mismo: eliminar a uno, dos, o más blancos que suelen estar escondidos y altamente vigilados.\r\n\r\nLa libertad del jugador es absoluta. En menos de cinco minutos se puede entrar al nivel, buscar los objetivos, disparar desde la distancia (creando un caos) y salir corriendo. O se puede pasar una hora recorriendo cada milímetro del nivel preparando una trampa perfecta en la que todos los objetivos del Agente 47 se encuentren y mueran al mismo tiempo, simulando un accidente.\r\n\r\nHitman, entonces, es una trilogía que premia la creatividad. Meter veneno para ratas en la energy drink de una heredera y, cuando corre al baño, ahogarla en el inodoro fuera de la mirada de curiosos. Crear una pérdida de agua y pelar un cable cerca del charco, justo cuando un científico pasa descalzo. Hasta hay un patito explosivo. Las posibilidades son infinitas.', 'https://www.youtube.com/embed/Z29ORu6_p34', 2, '2021-09-07 20:01:17', '2021-09-07 20:01:17'),
(23, '/images/resident_village.jpeg', 1, 'Resident evil village', 9000, 4, 0000, 'N/A', '', 'https://www.youtube.com/embed/CsRFVyoHKoY', 2, '2021-09-07 20:04:15', '2021-09-07 20:04:15'),
(24, '/images/resident_village.jpeg', 1, 'Resident evil village', 9000, 4, 0000, 'N/A', '', 'https://www.youtube.com/embed/CsRFVyoHKoY', 2, '2021-09-07 20:05:33', '2021-09-07 20:05:33');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Horror', '2021-08-30 21:06:45', '2021-08-30 21:06:45'),
(2, 'Accion', '2021-08-30 21:06:49', '2021-08-30 21:06:49'),
(3, 'Deportes', '2021-08-30 21:06:54', '2021-08-30 21:06:54'),
(4, 'Casual', '2021-08-30 21:07:02', '2021-08-30 21:07:02'),
(5, 'Board', '2021-08-30 21:07:11', '2021-08-30 21:07:11'),
(6, 'Carrera', '2021-08-30 21:07:16', '2021-08-30 21:07:16'),
(7, 'Lucha', '2021-08-30 21:07:22', '2021-08-30 21:07:22'),
(8, 'Arcade', '2021-08-30 21:07:28', '2021-08-30 21:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `platforms`
--

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `platforms`
--

INSERT INTO `platforms` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'PC', '2021-08-30 21:05:04', '2021-08-30 21:05:04'),
(3, 'PS', '2021-08-30 21:05:37', '2021-08-30 21:05:37'),
(4, 'XBOX', '2021-08-30 21:05:54', '2021-08-30 21:05:54'),
(5, 'MULTIPLATFORM', '2021-08-30 21:06:04', '2021-08-30 21:06:04'),
(6, 'OTHER', '2021-08-30 21:06:13', '2021-08-30 21:06:13');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `PurchaseId` int(11) NOT NULL,
  `GameId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `PurchaseId`, `GameId`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(5, 2, 5, 1, 9000, '2021-09-13 13:43:47', '2021-09-13 13:43:47'),
(6, 2, 14, 1, 6000, '2021-09-13 13:43:47', '2021-09-13 13:43:47'),
(7, 2, 15, 1, 7000, '2021-09-13 13:43:47', '2021-09-13 13:43:47'),
(8, 2, 19, 1, 15000, '2021-09-13 13:43:47', '2021-09-13 13:43:47'),
(9, 3, 19, 7, 15000, '2021-09-13 22:05:41', '2021-09-13 22:05:41');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `total` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `UserId`, `status`, `total`, `created_at`, `updated_at`) VALUES
(2, 21, 0, 37000, '2021-09-13 13:43:47', '2021-09-13 13:43:47'),
(3, 21, 0, 105000, '2021-09-13 22:05:41', '2021-09-13 22:05:41');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roleId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roleId`, `name`, `created_at`, `updated_at`) VALUES
(1, 'user', '2021-08-22 16:58:31', '2021-08-22 16:58:31'),
(2, 'admin', '2021-08-22 16:58:52', '2021-08-22 16:58:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `bday` date NOT NULL,
  `image` varchar(150) DEFAULT NULL,
  `RoleId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `password`, `email`, `bday`, `image`, `RoleId`, `created_at`, `updated_at`) VALUES
(18, 'Adrian', 'Rubado', '$2a$10$NqUSdoT8MDzi4EfBaIx8SeTG8spjCXeEf5AIncAxfyt0/gwUPux22', 'adrianrubado19@gmail.com', '2002-12-30', '/images/Blue_Argentine_Ford_Fairlane.jpg', 1, '2021-08-30 20:05:49', '2021-08-30 20:05:49'),
(21, 'Roberto', 'Lechuga', '$2a$10$DFkz8v6xNKyQEYwrWpNMjOqlrXQbf9Iy8R1VTipnbezUifyBEdkhu', 'roberto@gmail.com', '2002-12-30', '/images/the-mandalorian-season-2-uhdpaper.com-hd-5.2847.jpg', 2, '2021-08-30 20:34:49', '2021-08-30 20:34:49'),
(22, 'Adrian', 'aaaaaaaaaaaaa', '$2a$10$oA0xWTGDWBmYs8UJPL9u/e/gjrgGPBgC84rsFCYHBUvjVVsfNj1ri', 'roberta@gmail.com', '2002-12-29', '/images/Hitman-3-PS4.jpg', 1, '2021-09-09 22:50:30', '2021-09-09 22:50:30'),
(23, 'Adrian', 'Rubado', '$2a$10$T255cPNhdXpDyf6UNkcly.zBR5Az0BAIbCNE.VkB.8bGcW68G6xtu', 'robertaa@gmail.com', '2002-12-30', '/images/simbolo-de-moneda-dolar.png', 1, '2021-09-15 18:33:27', '2021-09-15 18:33:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user/cart` (`UserId`),
  ADD KEY `game/cart` (`GameId`);

--
-- Indexes for table `favs`
--
ALTER TABLE `favs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user/favs` (`UserId`),
  ADD KEY `user/games` (`GameId`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gamePlatform` (`platformId`),
  ADD KEY `gameGenre` (`genreId`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `platforms`
--
ALTER TABLE `platforms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase` (`PurchaseId`),
  ADD KEY `game` (`GameId`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`UserId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `userRole` (`RoleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `favs`
--
ALTER TABLE `favs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `platforms`
--
ALTER TABLE `platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `game/cart` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `user/cart` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`);

--
-- Constraints for table `favs`
--
ALTER TABLE `favs`
  ADD CONSTRAINT `user/favs` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user/games` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`);

--
-- Constraints for table `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `gameGenre` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `gamePlatform` FOREIGN KEY (`platformId`) REFERENCES `platforms` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `game` FOREIGN KEY (`GameId`) REFERENCES `games` (`id`);

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `user` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `userRole` FOREIGN KEY (`roleId`) REFERENCES `roles` (`roleId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
