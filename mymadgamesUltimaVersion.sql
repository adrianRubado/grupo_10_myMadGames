-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2021 at 01:23 AM
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
(3, 21, 5, 14, 126000, '2021-08-31 13:48:41', '2021-08-31 13:48:41'),
(6, 21, 14, 7, 42000, '2021-09-01 03:52:24', '2021-09-01 03:52:24'),
(7, 18, 15, 7, 49000, '2021-09-01 04:09:00', '2021-09-01 04:09:00'),
(8, 18, 5, 7, 63000, '2021-09-01 04:09:15', '2021-09-01 04:09:15'),
(9, 21, 15, 7, 49000, '2021-09-04 03:15:31', '2021-09-04 03:15:31');

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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `image`, `genreId`, `name`, `price`, `platformId`, `release_year`, `requirements`, `description`, `link`, `created_at`, `updated_at`) VALUES
(5, '/images/44437-the-last-of-us.jpg', 2, 'The last of Us 2', 9000, 3, 0000, 'N/A', 'The Last of Us Part 2 nos pone en el papel de Ellie algunos años después del final de la primera entrega. Seguiremos una historia con mucho sentimiento de furia, llorar en los primeros 30 minutos de juego fue algo que solo pasó en su precuela. Ahora nos enojaremos, haciendo que la vida cobre un valor desechable.', 'https://www.youtube.com/embed/orDRnUXu-Rw', '2021-08-30 23:47:22', '2021-08-30 23:47:22'),
(13, '/images/GTA.jpg', 2, 'GTAV', 2400, 5, 0000, 'Operating System: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1.\r\nProcessor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5', 'For me, Grand Theft Auto V’s extraordinary scope is summed up in two favourite moments. One is from a mid-game mission in which I flew a plane into another plane, fought the crew, hijacked the thing, and then parachuted out and watched it crash into the sea to escape death at the hands of incoming military fighter jets. Another time, whilst driving around in an off-road buggy, I got distracted by something that looked like a path up one of the San Andreas mountains. Turns out it was a path, and I spent 15 minutes following to the summit, where I nearly ran over a group of hikers. “Typical!” one of them yelled at me, as if he nearly gets run over by a rogue ATV on top of a mountain every time he goes on a hike.', 'https://www.youtube.com/embed/_UB5hpk0iqg', '2021-09-01 02:21:36', '2021-09-01 02:21:36'),
(14, '/images/godOfWar.jpg', 2, 'God of war', 6000, 3, 0000, '', 'His vengeance against the gods of Olympus far behind him, Kratos now lives as a man in the lands of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. As mentor and protector to a son determined to earn his respect, Kratos is faced with an unexpected opportunity to master the rage that has long defined him. Questioning the dark lineage he’s passed on to his son, he hopes to make amends for the shortcomings of his past. Set within the untamed forests, mountains, and realms of Norse lore, God of War features a distinctly new setting with its own pantheon of creatures, monsters, and gods.', 'https://www.youtube.com/embed/x_MtcOznfM4', '2021-09-01 02:23:35', '2021-09-01 02:23:35'),
(15, '/images/daysGone.jpg', 1, 'Days Gone', 7000, 3, 0000, '', 'Days Gone is a fun post-apocalyptic road trip simulator, but the things it does well are ultimately overwhelmed by the dreary story, repetitive missions, sluggish controls, and lifeless world. It\'s great seeing more PlayStation exclusives coming to PC, and long may that continue. But if Days Gone hadn\'t made the transition, I don\'t think it would have been a great loss for the platform. Look, just play Avalanche\'s Mad Max game from 2015 instead. It does everything Days Gone does, but with a sense of humour, a wasteland that\'s actually worth exploring, and you get to be the road warrior Max R', 'https://www.youtube.com/embed/D3_EFHlDBFg', '2021-09-01 02:26:42', '2021-09-01 02:26:42'),
(16, '/images/fifa21.jpeg', 3, 'Fifa 21 ', 4000, 5, 0000, 'CPU: Athlon X4 880K / Core i3-6100 or better.\r\nRAM: 8 GB.\r\nOS: Windows 7/8.1/10 64-Bit.\r\nVIDEO CARD: Radeon HD 7850 or better/GeForce GTX 660 or better.\r\nPIXEL SHADER: 5.0.\r\nVERTEX SHADER: 5.0.\r\nFREE ', 'FIFA 21 on the new generation consoles is a largely familiar experience. There are no gameplay tweaks or improvements to talk about, but it does look marginally better due to a new lighting system and more realistic player models. There’s a heightened sense of atmosphere with crowds brought to life in more detail and contextual animations of making fans and players feel less like soulless AI and more like humans.\r\n\r\nNone of this changes how you play, though and is pretty much a superficial upgrade on the more powerful machines. That’s a bit of a disappointment, considering the revisions 2K made to NBA 2K21 in its new-generation version. Also, considering the lack of changes it’s annoying that there’s no cross-generational play; you’re able to carry your Volta and FUT progress over to PS5 and Series X/S, but if you have a group of friends you enjoy playing with and you all haven’t been able to get your hands on a new console yet there’s no way to join them without going back to the old version. Overall, FIFA 21 on the new generation isn’t the leap that many would have been hoping for and are left waiting until next to see what EA can achieve with the power of these consoles.', 'https://www.youtube.com/embed/p08CpE5Tzak', '2021-09-01 02:28:47', '2021-09-01 02:28:47');

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
  `product_id` int(11) NOT NULL,
  `purchase_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `purchase_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `total` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(21, 'Roberto', 'Lechuga', '$2a$10$DFkz8v6xNKyQEYwrWpNMjOqlrXQbf9Iy8R1VTipnbezUifyBEdkhu', 'roberto@gmail.com', '2002-12-30', '/images/the-mandalorian-season-2-uhdpaper.com-hd-5.2847.jpg', 2, '2021-08-30 20:34:49', '2021-08-30 20:34:49');

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
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `purchase` (`purchase_id`),
  ADD KEY `game` (`game_id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`purchase_id`),
  ADD KEY `user` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `favs`
--
ALTER TABLE `favs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `purchase_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
  ADD CONSTRAINT `game` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`);

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `userRole` FOREIGN KEY (`roleId`) REFERENCES `roles` (`roleId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
