-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2023 at 01:30 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rootcode`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `comment_des` varchar(300) NOT NULL,
  `post_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `comment_des`, `post_id`) VALUES
(1, 'this is a comment', 1),
(2, 'This is another comment', 1),
(3, 'Tsdsjdnsjdsd dn sndbsjdbsjdbjsdbs', 2),
(4, 'dsdssddsdNavod', 1),
(5, 'hjhdjwdjwbdnb283287382', 1),
(6, 'zxzzzx', 1),
(7, 'zxzzzx121112', 2);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `post_title` varchar(200) NOT NULL,
  `post_description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `post_title`, `post_description`) VALUES
(1, 'Kumara Chokshananda Sangakkara', 'Kumara Chokshananda Sangakkara (Sinhala: කුමාර් චොක්ශනාද සංගක්කාර; born 27 October 1977) is a Sri Lankan cricket commentator, former professional cricketer, businessman, ICC Hall of Fame inductee and the former president of Marylebone Cricket Club and a former captain of the Sri Lanka national cricket team in all formats, who is widely regarded as one of the greatest batsmen in the history of the sport. He was officially rated in the top three current batsmen in the world in all three formats of the game at various stages of his international career. He is the current coach of Rajasthan Royals IPL team.[1][2][3][4][5] Sangakkara scored 28,016 runs in international cricket across all formats in a career that spanned 15 years.[6] At retirement, he was the second-highest run-scorer in ODI cricket, next only to Sachin Tendulkar, and the sixth-highest run scorer in Test cricket'),
(2, 'Deshabandu Muttiah Muralitharan', 'Deshabandu Muttiah Muralitharan (Sinhala: මුත්තයියා මුරලිදරන්, Tamil: முத்தையா முரளிதரன், also spelt Muralidaran and often referred to as Murali (born 17 April 1972) is a Sri Lankan cricket coach, former professional cricketer, businessman and a member of the ICC Cricket Hall of Fame. Averaging over six wickets per Test match, Muralitharan is widely regarded as the most successful and one of the greatest bowlers in the history of the sport. He is the only bowler to take 800 Test wickets and more than 530 One Day International (ODI) wickets. As of 2022, he has taken more wickets in international cricket than any other bowler.[4]'),
(3, 'Rootcode Labs Pvt Ltd', 'We do things agile & transparent and invite you to be part of our meetings, so that you can see how we bring your product to life.Our mission, from the very start, has always been to help businesses “build great tech”. Whether you are hiring your 1st or 100th developer, we scale with you.We have helped our clients launch over 100 successful digital products in global and diverse markets. Whether you’re working in Agritech or Esports domain, we got a track record of building great tech!Our delivery maturity model has been refined with our years of experience in building over 100 successful digital products with our clients.We know how much your product means to you, that’s why we embrace the latest technology and handpick developers with the right tech expertise to bring your product to life.Strong understanding of the Scandinavian & North American culture makes the collaboration with our teams effortless. We start small with a core team who can later support the engagement to scale.'),
(4, 'Virat Kohli', 'Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] (listen); born 5 November 1988) is an Indian international cricketer and former captain of the Indian national team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for Delhi in Indian domestic cricket. Widely regarded as one of the greatest batsmen of all time,[3] Kohli holds the record for scoring most runs in both T20 internationals and in IPL. In 2020, the International Cricket Council named him as player of decade. Kohli has won Man of the Tournament award twice at the ICC World Twenty20, in 2014 and 2016. Playing for his franchise in IPL, he won the Orange Cap and Most-valuable Player Award in 2016 season. Furthermore has won most player of the match and series awards in T20I. With 40 wins in 68 Test matches, he is India\'s most successful Test captain. Kohli has also contributed to India\'s successes, including winning the 2011 World Cup and the 2013 Champions trophy.\r\n\r\nBorn and raised in Delhi,'),
(7, 'Artificial intelligence', 'Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence displayed by non-human animals and humans. Example tasks in which this is done include speech recognition, computer vision, translation between (natural) languages, as well as other mappings of inputs.\r\n\r\nAI applications include advanced web search engines (e.g., Google Search), recommendation systems (used by YouTube, Amazon and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Waymo), automated decision-making and competing at the highest level in strategic game systems (such as chess and Go).[1] As machines become increasingly capable, tasks considered to require \"intelligence\" are often removed from the definition of AI, a phenomenon known as the AI effect.[2] For instance, optical character recognition is frequently excluded from things considered to be AI,[3] having become a routine technology.[');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
