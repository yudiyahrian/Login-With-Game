-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2022 at 10:35 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user`
--

-- --------------------------------------------------------

--
-- Table structure for table `akun`
--

CREATE TABLE `akun` (
  `id` int(5) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `username` varchar(12) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `akun`
--

INSERT INTO `akun` (`id`, `fullname`, `username`, `password`, `created_at`) VALUES
(32423, 'mikuchan', 'mikuchan', '123', '2022-10-07'),
(68037, 'sdfsdf', 'sfdfsdf', 'sdfsf', '2022-10-20'),
(86074, 'fafsdf', 'sdfsd', 'fsdf', '2022-10-20'),
(89013, 'sadasf', 'safasf', 'safas', '2022-10-20'),
(43259, 'asdas', 'fasfas', 'fasf', '2022-10-20'),
(83956, 'asfsaf', 'asfasf', 'asfasf', '2022-10-20'),
(82437, 'asfsaf', 'asfasfas', 'fasf', '2022-10-20'),
(84560, 'asdasd', 'asdasd', 'asdasd', '2022-10-20'),
(87635, 'abay', 'abay0000', '123', '2022-10-20'),
(32985, 'sjagdsd', 'fasdas', 'sadsa', '2022-10-20'),
(57409, 'sadsad', 'asdasds', 'fsadsada', '2022-10-20'),
(40312, 'varel', 'varel', '123', '2022-10-20');

-- --------------------------------------------------------

--
-- Table structure for table `data_user`
--

CREATE TABLE `data_user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `city` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_user`
--

INSERT INTO `data_user` (`id`, `name`, `email`, `phone`, `city`) VALUES
(5, 'Radit Gokil', 'raditbogor@gmail.com', '0823751723', 'Bogor2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_user`
--
ALTER TABLE `data_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_user`
--
ALTER TABLE `data_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
