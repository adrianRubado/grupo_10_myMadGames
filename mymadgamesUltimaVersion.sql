-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2021 at 02:18 AM
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
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `favs`
--

CREATE TABLE `favs` (
  `fav_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(6, '/images/godOfWar.jpg', 2, 'God of war', 6000, 3, 0000, 'N/A', 'God of War es una obra maestra, en que cada aspecto individual del juego se combina para completar una aventura violenta, conmovedora e inolvidable, cuya ambientación nórdica nos ha conquistado. Su único punto débil es esa sensación de que lo mejor está por llegar en próximas entregas.', 'https://www.youtube.com/embed/rjJy9XGGEhM', '2021-08-30 23:48:34', '2021-08-30 23:48:34'),
(7, '/images/GTA.jpg', 2, 'GTAV', 5000, 5, 0000, 'Procesador: Intel Core 2 Quad CPU Q6600 a 2,40 GHz (4 CPUs)/AMD Phenom 9850 Quad-Core Processor (4 CPUs) a 2.5GHz. Memoria: 4 GB. Tarjeta de vídeo: NVIDIA 9800 GT 1GB/AMD HD 4870 1GB (DX 10, 10.1, 11)', 'Grand Theft Auto V, es uno de los juegos que mejor aprovechan el potencial de PS3 y Xbox 360, gracias al cambio de personajes, el nivel gráfico del juego no alcanza lo visto en The Last Of Us, sin embargo, busca aprovechar cada componente y nos muestra una concepción de Los Ángeles hermosa, con juegos de luces en los diferentes puntos del día, con un cielo lleno de estrellas o una lluvia con rayos en todo su esplendor, ya mencionamos los vastos lugares del Condado de Blaine, los árboles, vegetación, el mar desde la arena o buceando, la gente de Rockstar North no escatimó en detalles.', 'https://www.youtube.com/embed/_UB5hpk0iqg', '2021-08-30 23:54:38', '2021-08-30 23:54:38'),
(8, '/images/horizon.jpg', 2, 'Horizon', 6000, 3, 0000, '', 'Este juego para mi tiene una historia muy buena, mecánicas grandiosas, criaturas extrañas y misteriosas, un mundo muy grande (algunos mundos grandes pueden ser repetitivos en los juegos y este juego tiene algunas partes repetitivas) y unas misiones secundarias que te van a enganchar un buen tiempo a este juego.', 'https://www.youtube.com/embed/HrxIRk3q-ck', '2021-08-31 00:03:17', '2021-08-31 00:03:17'),
(9, '/images/daysGone.jpg', 1, 'daysGone', 8000, 3, 0000, 'N/A', 'Days Gone es un videojuego de acción-aventura y horror de supervivencia, desarrollado por el estudio SIE Bend Studio y publicado por Sony Interactive Entertainment para PlayStation 4 y Microsoft Windows. Fue lanzado en PlayStation 4 el 26 de abril del año 2019 y el 18 de mayo de 2021 para Microsoft Windows.', 'https://www.youtube.com/embed/D3_EFHlDBFg', '2021-08-31 00:05:01', '2021-08-31 00:05:01'),
(10, '/images/rachet&clank.jpg', 8, 'Ratchet & Clank', 11000, 3, 0000, 'N/A', 'El veredicto. Ratchet & Clank: Una dimensión aparte es una secuela continuista, que repite la fórmula ganadora del juego original pero potencia y mejora sus virtudes. Una salvajada a nivel visual y divertido en todo momento, que solo patina a la hora de hacer interesantes añadidos como sus grandes mapas.', 'https://www.youtube.com/embed/IJNapbBHoFY', '2021-08-31 00:08:18', '2021-08-31 00:08:18');

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
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user/cart` (`user_id`),
  ADD KEY `game/cart` (`game_id`);

--
-- Indexes for table `favs`
--
ALTER TABLE `favs`
  ADD PRIMARY KEY (`fav_id`),
  ADD KEY `user/favs` (`user_id`),
  ADD KEY `user/games` (`game_id`);

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
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favs`
--
ALTER TABLE `favs`
  MODIFY `fav_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
  ADD CONSTRAINT `game/cart` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `user/cart` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `favs`
--
ALTER TABLE `favs`
  ADD CONSTRAINT `user/favs` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user/games` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`);

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
