-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  jeu. 30 avr. 2020 à 20:21
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `humanitaide`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonces`
--

DROP TABLE IF EXISTS `annonces`;
CREATE TABLE IF NOT EXISTS `annonces` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(128) NOT NULL,
  `telephone` varchar(128) NOT NULL,
  `type` varchar(128) NOT NULL,
  `description` varchar(128) NOT NULL,
  `region` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `annonces`
--

INSERT INTO `annonces` (`id`, `username`, `telephone`, `type`, `description`, `region`) VALUES
(31, 'Sofiane AMARI', '056985984', 'Don de materiel', 'Bonjour, je vide mon garage, je donne donc toute sorte de matériel, contactez moi sur mon numéro de téléphone pour plus de rense', 'Marseille 13014'),
(32, 'Sami BOUDECHICHA', '07563463126', 'Nourriture', 'Bonjour, en cette période de ramadan je fais don de nourriture pour les plus démunis. Contactez moi. ', 'Marseille 13009'),
(33, 'Franc LeBoeuf', '075635412', 'Argent', 'Bonjour à tous, je viens en aide financièrement à certains utilisateurs qui ont en besoin. ', 'Paris 75016'),
(34, 'Ryad MAHREZ ', '0752603589', 'Materiel ', 'Bonjour, jen profite donc pour faire don de certaines affaires. Appelez moi pour plus de renseignements.  .  ', 'Paris 75009'),
(35, 'Sami BOUDECHICHA', '086569459', 'Vetements', 'Bonjour, je vide mon armoire et je donne certains vetements que je ne porte plus', 'Marseille 13009'),
(36, 'Lucas CRABELLO', '0955478556', 'Aide scolaire ', 'Bonjour, je suis prof de physique et je donne des cours gratuit  pour tout les niveaux. Appelez moi.', 'Toulouse'),
(37, 'Lucas CRABELLO', '0955478556', 'Aide scolaire ', 'Bonjour, je suis prof de physique et je donne des cours gratuit  pour tout les niveaux. Appelez moi.', 'Toulouse');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(128) NOT NULL,
  `fullname` varchar(128) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `password` varchar(128) NOT NULL,
  PRIMARY KEY (`username`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `telephone`, `password`) VALUES
(40, 'Franc', 'LeBOEUF', '06894752', '$2b$10$DJ9Eph9iJrpaxZn.xLjR/.XdmUOo1eIi9m2hk7Vd0tju4bvDyC53u'),
(42, 'Lucas', 'CARABELLO', '05698745', '$2b$10$NSVmlt4Gs7nfskE/w3nFx.XA.Bg4UkA3p/oGT6d2b/.wx2BAPjmOK'),
(41, 'Ryad ', 'MAHREZ', '058749625', '$2b$10$CvqnSpIwmfxJmmK23LjfSewdmes.EyAe57Z50j48IdSdgHeSZj6pu'),
(39, 'Sami ', 'BOUDECHICHA', '0652489625', '$2b$10$nVW5jNvwqnAcdzM7JWvNSeGRaeJ1sqmw263os9t3BX9TY7t935QZi'),
(38, 'Sofiane', 'AMARI', '0756986524', '$2b$10$ZOz9GM4q.nz8F/hjp1jf3OFLRmJGSs5wyMP6W8ujql6qmql5ftmiy');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
