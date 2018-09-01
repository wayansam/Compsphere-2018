-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2018 at 08:11 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs`
--

-- --------------------------------------------------------

--
-- Table structure for table `participant`
--

CREATE TABLE `participant` (
  `id` int(11) NOT NULL,
  `name1` varchar(64) NOT NULL,
  `school1` varchar(32) NOT NULL,
  `email1` varchar(64) NOT NULL,
  `stdid1` varchar(32) NOT NULL,
  `photo1` varchar(128) NOT NULL,
  `name2` varchar(64) NOT NULL,
  `stdid2` varchar(32) NOT NULL,
  `photo2` varchar(128) NOT NULL,
  `name3` varchar(64) NOT NULL,
  `stdid3` varchar(32) NOT NULL,
  `photo3` varchar(128) NOT NULL,
  `name4` varchar(64) NOT NULL,
  `stdid4` varchar(32) NOT NULL,
  `photo4` varchar(128) NOT NULL,
  `name5` varchar(64) NOT NULL,
  `stdid5` varchar(32) NOT NULL,
  `photo5` varchar(128) NOT NULL,
  `note` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `participant`
--
ALTER TABLE `participant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `participant`
--
ALTER TABLE `participant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
