-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 01 sep. 2021 à 15:13
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tptrpg`
--
CREATE DATABASE IF NOT EXISTS `tptrpg` DEFAULT CHARACTER SET utf8 COLLATE utf8_german2_ci;
USE `tptrpg`;

-- --------------------------------------------------------

--
-- Structure de la table `arme`
--

DROP TABLE IF EXISTS `arme`;
CREATE TABLE IF NOT EXISTS `arme` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `agilite` double DEFAULT NULL,
  `attaque` double DEFAULT NULL,
  `description` longtext COLLATE utf8_german2_ci,
  `nom` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `prix_achat` double DEFAULT NULL,
  `prix_vente` double DEFAULT NULL,
  `type_arme` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `arme`
--

INSERT INTO `arme` (`id`, `agilite`, `attaque`, `description`, `nom`, `prix_achat`, `prix_vente`, `type_arme`, `version`) VALUES
(5, 24, 15, 'Forgée à Gondolin au Premier Âge, Glamdring avait appartenu au roi Turgon.', 'Glamdring', 64, 120, 'epee', 0),
(6, 4, 60, 'Grond était l\'arme de Morgoth, au temps de son retour à Angband après la destruction des Deux Arbres de Valinor de Valinor. ', 'Grond', 600, 750, 'epee', 0),
(7, 6, 50, 'Il semblerait que cette hache ait été un héritage du premier roi du Peuple de Durin, conservée à Khazad-dûm.', 'Hache de durin', 200, 180, 'epee', 0),
(8, 10, 40, 'Aeglos était la lance de Gil-galad,', 'Aeglos', 150, 120, 'lance', 0),
(9, 20, 25, 'Andúril était l\'épée d\'Aragorn II, ', 'Anduril', 1000, 2000, 'epee', 0),
(10, 60, 12, 'Belthronding était l\'arc en bois d\'if noir de Beleg Cúthalion. ', 'Belthronding', 240, 300, 'arc', 0),
(11, 25, 10, 'Dailir était le nom de la flèche fétiche de l\'archer Beleg Cúthalion, qu\'il pouvait retrouver sans peine après l\'avoir tirée. ', 'Dailir', 25, 10, 'arc', 0),
(12, 20, 18, 'Dagmor était le nom, si l\'on en croit le Lai de Leithian, de l\'épée de Beren Erchamion. ', 'Dagmor', 600, 750, 'epee', 0);

-- --------------------------------------------------------

--
-- Structure de la table `armure`
--

DROP TABLE IF EXISTS `armure`;
CREATE TABLE IF NOT EXISTS `armure` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `defense` double DEFAULT NULL,
  `description` longtext COLLATE utf8_german2_ci,
  `nom` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `prix_achat` double DEFAULT NULL,
  `prix_vente` double DEFAULT NULL,
  `type_armure` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `version` int(11) NOT NULL,
  `vitesse` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `armure`
--

INSERT INTO `armure` (`id`, `defense`, `description`, `nom`, `prix_achat`, `prix_vente`, `type_armure`, `version`, `vitesse`) VALUES
(1, 25, NULL, 'Armure Ordinatori', 150, 100, 'armure', 0, 25),
(2, 24, NULL, 'Armure eteoliciennes', 40, 100, 'armure', 0, 18),
(3, 24, 'Armure de l hemlaris', 'Armure de l\'Hemlaris', 800, 600, 'armure', 0, 19),
(4, 11, 'casque en cuir', 'casque en cuir', 20, 25, 'casque', 0, 16),
(5, 14, 'Plastron acier', 'Plastron en acier', 24, 1, 'plastron', 0, 14),
(6, 8, 'casque en maille', 'casque en maill', 8, 16, 'casque', 0, 14);

-- --------------------------------------------------------

--
-- Structure de la table `compte`
--

DROP TABLE IF EXISTS `compte`;
CREATE TABLE IF NOT EXISTS `compte` (
  `type` varchar(31) COLLATE utf8_german2_ci NOT NULL,
  `id` bigint(20) NOT NULL,
  `enable` bit(1) NOT NULL,
  `mail` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `mdp` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `pseudo` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `version` int(11) NOT NULL,
  `agilite` double DEFAULT NULL,
  `agilite_max` double DEFAULT NULL,
  `attaque` double DEFAULT NULL,
  `attaque_max` double DEFAULT NULL,
  `cpt_brulure` int(11) DEFAULT NULL,
  `cpt_combat` int(11) DEFAULT NULL,
  `cpt_combat_gagne` int(11) DEFAULT NULL,
  `cpt_empoisonnement` int(11) DEFAULT NULL,
  `cpt_etourdissement` int(11) DEFAULT NULL,
  `cpt_monstre_vaincu` int(11) DEFAULT NULL,
  `cpt_saignement` int(11) DEFAULT NULL,
  `defense` double DEFAULT NULL,
  `defense_max` double DEFAULT NULL,
  `exp` int(11) DEFAULT NULL,
  `vie` double DEFAULT NULL,
  `vie_max` double DEFAULT NULL,
  `vitesse` double DEFAULT NULL,
  `vitesse_max` double DEFAULT NULL,
  `arme` bigint(20) DEFAULT NULL,
  `armure` bigint(20) DEFAULT NULL,
  `hero_id` bigint(20) DEFAULT NULL,
  `histoire` bigint(20) DEFAULT NULL,
  `inventaire` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgmwt5asd9hinfjbphe8eu5uc7` (`arme`),
  KEY `FKb54ojhlhu72wl2uf8md46n2p5` (`armure`),
  KEY `FKffjjjnfgsnnukcgue2hedu2l2` (`hero_id`),
  KEY `FKqlx6rwtk2leku77eqlr96ol37` (`histoire`),
  KEY `FKbppcti8s542cpr3httt6vslks` (`inventaire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `compte`
--

INSERT INTO `compte` (`type`, `id`, `enable`, `mail`, `mdp`, `pseudo`, `role`, `version`, `agilite`, `agilite_max`, `attaque`, `attaque_max`, `cpt_brulure`, `cpt_combat`, `cpt_combat_gagne`, `cpt_empoisonnement`, `cpt_etourdissement`, `cpt_monstre_vaincu`, `cpt_saignement`, `defense`, `defense_max`, `exp`, `vie`, `vie_max`, `vitesse`, `vitesse_max`, `arme`, `armure`, `hero_id`, `histoire`, `inventaire`) VALUES
('user', 1, b'0', 'lacosteA@gmail.com', '1234', 'lacoste64', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 9, 6, 31, NULL, 1),
('user', 2, b'0', 'xavierD@gmail.com', '1234', 'XavierD', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 11, 4, 28, NULL, 2),
('user', 3, b'0', 'FlorianF', '12345', 'FlorianF', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, NULL, NULL, NULL, NULL, 3),
('user', 4, b'0', 'stanislasD@gmail.com', '1234', 'StanislasD', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, NULL, NULL, NULL, NULL, 4),
('Admin', 5, b'0', 'admin@gmail.com', 'admin', 'admin', NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

DROP TABLE IF EXISTS `equipe`;
CREATE TABLE IF NOT EXISTS `equipe` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `version` int(11) NOT NULL,
  `personnage` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9k1q8ebih5m59whmrj5r6tuup` (`personnage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequences`
--

DROP TABLE IF EXISTS `hibernate_sequences`;
CREATE TABLE IF NOT EXISTS `hibernate_sequences` (
  `sequence_name` varchar(255) COLLATE utf8_german2_ci NOT NULL,
  `next_val` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sequence_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `hibernate_sequences`
--

INSERT INTO `hibernate_sequences` (`sequence_name`, `next_val`) VALUES
('default', 0);

-- --------------------------------------------------------

--
-- Structure de la table `histoire`
--

DROP TABLE IF EXISTS `histoire`;
CREATE TABLE IF NOT EXISTS `histoire` (
  `id` bigint(20) NOT NULL,
  `lieu` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

-- --------------------------------------------------------

--
-- Structure de la table `inventaire`
--

DROP TABLE IF EXISTS `inventaire`;
CREATE TABLE IF NOT EXISTS `inventaire` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` int(11) NOT NULL,
  `objet_id` bigint(20) DEFAULT NULL,
  `utilisateur_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKblvx0mkorgqw6c546qdu7ve8w` (`objet_id`),
  KEY `FK2x5w46ewvx5aa5l7o3kr00uad` (`utilisateur_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `inventaire`
--

INSERT INTO `inventaire` (`id`, `version`, `objet_id`, `utilisateur_id`) VALUES
(1, 0, 1, 1),
(2, 0, 2, 2),
(3, 0, 3, 3),
(4, 0, 4, 4);

-- --------------------------------------------------------

--
-- Structure de la table `inventaire_arme`
--

DROP TABLE IF EXISTS `inventaire_arme`;
CREATE TABLE IF NOT EXISTS `inventaire_arme` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quantite` double DEFAULT NULL,
  `version` int(11) NOT NULL,
  `arme_id` bigint(20) DEFAULT NULL,
  `inventaire_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKst8hnglgk9gwb6y53dm9mnr0j` (`arme_id`),
  KEY `FKj5g8ptw3gon3bnuxrc8aekorr` (`inventaire_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `inventaire_arme`
--

INSERT INTO `inventaire_arme` (`id`, `quantite`, `version`, `arme_id`, `inventaire_id`) VALUES
(1, 10, 0, 9, 1),
(2, 10, 0, 11, 1),
(3, 1, 0, 9, 2),
(4, 1, 0, 7, 2),
(5, 100, 0, 9, 3),
(6, 1, 0, 6, 3),
(7, 1, 0, 10, 4),
(8, 1, 0, 5, 4);

-- --------------------------------------------------------

--
-- Structure de la table `inventaire_armure`
--

DROP TABLE IF EXISTS `inventaire_armure`;
CREATE TABLE IF NOT EXISTS `inventaire_armure` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `qte` double DEFAULT NULL,
  `version` int(11) NOT NULL,
  `armure_id` bigint(20) DEFAULT NULL,
  `inventaire_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn625fd22ie9fh6kx0g22oqbq7` (`armure_id`),
  KEY `FK2yal5j6xhoxxhyl67mn5o8ecl` (`inventaire_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `inventaire_armure`
--

INSERT INTO `inventaire_armure` (`id`, `qte`, `version`, `armure_id`, `inventaire_id`) VALUES
(1, 1, 0, 2, 1),
(2, 10, 0, 3, 1),
(3, 4, 0, 4, 2),
(4, 7, 0, 1, 2),
(5, 5, 0, 5, 3),
(6, 4, 0, 1, 3),
(7, 1, 0, 4, 4),
(8, 1, 0, 5, 4);

-- --------------------------------------------------------

--
-- Structure de la table `inventaire_potion`
--

DROP TABLE IF EXISTS `inventaire_potion`;
CREATE TABLE IF NOT EXISTS `inventaire_potion` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `qte` double DEFAULT NULL,
  `version` int(11) NOT NULL,
  `inventaire_id` bigint(20) DEFAULT NULL,
  `potion_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK95a3f0tn073lyv1u0e01wn785` (`inventaire_id`),
  KEY `FKik77wgi9tu3k8ehtetc2nmbar` (`potion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `inventaire_potion`
--

INSERT INTO `inventaire_potion` (`id`, `qte`, `version`, `inventaire_id`, `potion_id`) VALUES
(1, 10, 0, 1, 1),
(3, 1, 0, 1, 3),
(4, 4, 0, 1, 4),
(5, 100, 0, 1, 6),
(6, 1, 0, 1, 8),
(7, 4, 0, 2, 7),
(8, 5, 0, 2, 9),
(9, 4, 0, 2, 4),
(10, 7, 0, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `marchand`
--

DROP TABLE IF EXISTS `marchand`;
CREATE TABLE IF NOT EXISTS `marchand` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `marchand`
--

INSERT INTO `marchand` (`id`, `nom`, `version`) VALUES
(1, 'Jacques Coeur', 0),
(2, 'Pieds poudreux', 0),
(3, 'Colporteur', 0);

-- --------------------------------------------------------

--
-- Structure de la table `marchand_arme`
--

DROP TABLE IF EXISTS `marchand_arme`;
CREATE TABLE IF NOT EXISTS `marchand_arme` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quantite` double DEFAULT NULL,
  `version` int(11) NOT NULL,
  `arme_id` bigint(20) DEFAULT NULL,
  `marchand_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKacy5gh151hqyoyc5oba8trvjr` (`arme_id`),
  KEY `FKhrpsl7xisq7blifi6q418ibxv` (`marchand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `marchand_arme`
--

INSERT INTO `marchand_arme` (`id`, `quantite`, `version`, `arme_id`, `marchand_id`) VALUES
(6, 100, 0, 10, 1),
(7, 12, 0, 5, 1),
(8, 500, 0, 8, 1),
(9, 40, 0, 7, 1),
(10, 1997, 0, 9, 1);

-- --------------------------------------------------------

--
-- Structure de la table `marchand_armure`
--

DROP TABLE IF EXISTS `marchand_armure`;
CREATE TABLE IF NOT EXISTS `marchand_armure` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quantite` double DEFAULT NULL,
  `version` int(11) NOT NULL,
  `armure_id` bigint(20) DEFAULT NULL,
  `marchand_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf7y18hqil5gk2lmacmx9149r8` (`armure_id`),
  KEY `FK1cd2gsiatscyspbaouf4vsp4v` (`marchand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `marchand_armure`
--

INSERT INTO `marchand_armure` (`id`, `quantite`, `version`, `armure_id`, `marchand_id`) VALUES
(1, 120, 0, 1, 1),
(2, 14, 0, 2, 1),
(3, 80, 0, 3, 1),
(4, 800, 0, 6, 1);

-- --------------------------------------------------------

--
-- Structure de la table `marchand_potion`
--

DROP TABLE IF EXISTS `marchand_potion`;
CREATE TABLE IF NOT EXISTS `marchand_potion` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quantite` double DEFAULT NULL,
  `version` int(11) NOT NULL,
  `marchand_id` bigint(20) DEFAULT NULL,
  `potion_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7c6yfa8tss9kl4ks8b2osby3e` (`marchand_id`),
  KEY `FKsn8fqnb11vc8sprii7ep8qix7` (`potion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `marchand_potion`
--

INSERT INTO `marchand_potion` (`id`, `quantite`, `version`, `marchand_id`, `potion_id`) VALUES
(1, 150, 0, 1, 1),
(2, 10, 0, 1, 6),
(3, 158, 0, 1, 9),
(4, 4, 0, 1, 7),
(5, 145, 0, 1, 9);

-- --------------------------------------------------------

--
-- Structure de la table `objet`
--

DROP TABLE IF EXISTS `objet`;
CREATE TABLE IF NOT EXISTS `objet` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `nom` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `qte` double DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `objet`
--

INSERT INTO `objet` (`id`, `description`, `nom`, `qte`, `version`) VALUES
(1, 'or user 1', 'Or', 1000, 0),
(2, 'or user 2', 'Or', 1000, 0),
(3, 'or user 3', 'Or', 1000, 0),
(4, 'or user 4', 'Or', 1000, 0);

-- --------------------------------------------------------

--
-- Structure de la table `personnage`
--

DROP TABLE IF EXISTS `personnage`;
CREATE TABLE IF NOT EXISTS `personnage` (
  `type` varchar(31) COLLATE utf8_german2_ci NOT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) COLLATE utf8_german2_ci DEFAULT NULL,
  `version` int(11) NOT NULL,
  `agilite` double DEFAULT NULL,
  `attaque` double DEFAULT NULL,
  `coef_attaque` double DEFAULT NULL,
  `coef_defense` double DEFAULT NULL,
  `coef_precision` double DEFAULT NULL,
  `coef_vie` double DEFAULT NULL,
  `coef_vitesse` double DEFAULT NULL,
  `defense` double DEFAULT NULL,
  `type_personnage` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `vie` double DEFAULT NULL,
  `vitesse` double DEFAULT NULL,
  `exp` int(11) DEFAULT NULL,
  `gold` int(11) DEFAULT NULL,
  `type_monstre` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `arme_id` bigint(20) DEFAULT NULL,
  `armure_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1dtn4q0128r2575gxtbl4jha9` (`arme_id`),
  KEY `FK2esnkmq0iu4b8mbgtw7xl3o0d` (`armure_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `personnage`
--

INSERT INTO `personnage` (`type`, `id`, `nom`, `version`, `agilite`, `attaque`, `coef_attaque`, `coef_defense`, `coef_precision`, `coef_vie`, `coef_vitesse`, `defense`, `type_personnage`, `vie`, `vitesse`, `exp`, `gold`, `type_monstre`, `arme_id`, `armure_id`) VALUES
('monstre', 1, 'Troll des cavernes', 0, 2, 60, NULL, NULL, NULL, NULL, NULL, 50, NULL, 150, 2, 10, 0, 'Troll', 7, NULL),
('monstre', 2, 'Wargs', 0, 30, 25, NULL, NULL, NULL, NULL, NULL, 10, NULL, 70, 100, 10, 0, 'Loups', NULL, NULL),
('monstre', 3, 'Aigles geants', 0, 50, 40, NULL, NULL, NULL, NULL, NULL, 6, NULL, 90, 150, 4, 0, 'Aigle', NULL, NULL),
('monstre', 4, 'Arachnee', 0, 20, 35, NULL, NULL, NULL, NULL, NULL, 20, NULL, 100, 50, 14, 0, 'Araigne', NULL, NULL),
('monstre', 5, 'Le guetteur des eaux', 0, 40, 29, NULL, NULL, NULL, NULL, NULL, 70, NULL, 80, 40, 1, 0, 'Creature', 10, NULL),
('monstre', 6, 'Azog', 0, 65, 40, NULL, NULL, NULL, NULL, NULL, 10, NULL, 150, 20, 15, 1800, 'Orc', 5, NULL),
('monstre', 7, 'Bolg', 0, 25, 40, NULL, NULL, NULL, NULL, NULL, 30, NULL, 140, 50, 14, 5, 'Orc', 10, NULL),
('hero', 8, 'Archer', 0, 20, 24, 1, 1, 1, 1, 1, 10, 'archer', 100, 50, NULL, NULL, NULL, 10, 6),
('hero', 9, 'elfes', 0, 25, 18, 1, 1, 1, 1, 1, 10, 'archer', 120, 40, NULL, NULL, NULL, 10, 6),
('hero', 28, 'Ranger', 0, 18, 10, 1, 1, 1, 1, 1, 17, 'archer', 75, 25, NULL, NULL, NULL, 12, 4),
('hero', 29, 'Conan le barbare', 0, 5, 60, 1, 1, 1, 1, 1, 45, 'guerrier', 120, 12, NULL, NULL, NULL, 6, 5),
('hero', 30, 'Assassin', 0, 40, 16, 1, 1, 1, 1, 1, 18, 'assassin', 80, 46, NULL, NULL, NULL, 9, 3),
('hero', 31, 'Lancelot', 0, 19, 56, 1, 1, 1, 1, 1, 60, 'chevalier', 120, 37, NULL, NULL, NULL, 9, 2),
('hero', 32, 'Umaro', 0, 25, 80, 1, 1, 1, 1, 1, 2, 'berserker', 100, 10, NULL, NULL, NULL, 11, 5),
('hero', 33, 'Orson', 0, 14, 70, 1, 1, 1, 1, 1, 6, 'berserker', 111, 12, NULL, NULL, NULL, 6, 1);

-- --------------------------------------------------------

--
-- Structure de la table `potion`
--

DROP TABLE IF EXISTS `potion`;
CREATE TABLE IF NOT EXISTS `potion` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `prix_achat` double DEFAULT NULL,
  `prix_vente` double DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_german2_ci DEFAULT NULL,
  `valeur` double DEFAULT NULL,
  `version` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Déchargement des données de la table `potion`
--

INSERT INTO `potion` (`id`, `nom`, `prix_achat`, `prix_vente`, `type`, `valeur`, `version`) VALUES
(1, 'Sang de dragon', 180, 500, 'soin', 40, 0),
(2, 'Graine de glace', 40, 50, 'soin', 15, 0),
(3, 'graine de feu', 45, 50, 'attaquePlus', 20, 0),
(4, 'Graine d\'air', 100, 25, 'vitessePlus', 10, 0),
(5, 'Graine de terre', 80, 8, 'defensePlus', 24, 0),
(6, 'Feu Grecque', 2, 50, 'soin', 4, 0),
(7, 'Alkahest', 50, 100, 'attaquePlus', 50, 0),
(8, 'Elixir d\'Amaranth', 500, 0, 'vitessePlus', 4, 0),
(9, 'Elixir d\'invulnerabilite', 500, 40, 'defensePlus', 48, 0),
(10, 'Potion d etre', 40, 10, 'agilitePlus', 20, 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `compte`
--
ALTER TABLE `compte`
  ADD CONSTRAINT `FKb54ojhlhu72wl2uf8md46n2p5` FOREIGN KEY (`armure`) REFERENCES `armure` (`id`),
  ADD CONSTRAINT `FKbppcti8s542cpr3httt6vslks` FOREIGN KEY (`inventaire`) REFERENCES `inventaire` (`id`),
  ADD CONSTRAINT `FKffjjjnfgsnnukcgue2hedu2l2` FOREIGN KEY (`hero_id`) REFERENCES `personnage` (`id`),
  ADD CONSTRAINT `FKgmwt5asd9hinfjbphe8eu5uc7` FOREIGN KEY (`arme`) REFERENCES `arme` (`id`),
  ADD CONSTRAINT `FKqlx6rwtk2leku77eqlr96ol37` FOREIGN KEY (`histoire`) REFERENCES `histoire` (`id`);

--
-- Contraintes pour la table `equipe`
--
ALTER TABLE `equipe`
  ADD CONSTRAINT `FK9k1q8ebih5m59whmrj5r6tuup` FOREIGN KEY (`personnage`) REFERENCES `personnage` (`id`);

--
-- Contraintes pour la table `inventaire`
--
ALTER TABLE `inventaire`
  ADD CONSTRAINT `FK2x5w46ewvx5aa5l7o3kr00uad` FOREIGN KEY (`utilisateur_id`) REFERENCES `compte` (`id`),
  ADD CONSTRAINT `FKblvx0mkorgqw6c546qdu7ve8w` FOREIGN KEY (`objet_id`) REFERENCES `objet` (`id`);

--
-- Contraintes pour la table `inventaire_arme`
--
ALTER TABLE `inventaire_arme`
  ADD CONSTRAINT `FKj5g8ptw3gon3bnuxrc8aekorr` FOREIGN KEY (`inventaire_id`) REFERENCES `inventaire` (`id`),
  ADD CONSTRAINT `FKst8hnglgk9gwb6y53dm9mnr0j` FOREIGN KEY (`arme_id`) REFERENCES `arme` (`id`);

--
-- Contraintes pour la table `inventaire_armure`
--
ALTER TABLE `inventaire_armure`
  ADD CONSTRAINT `FK2yal5j6xhoxxhyl67mn5o8ecl` FOREIGN KEY (`inventaire_id`) REFERENCES `inventaire` (`id`),
  ADD CONSTRAINT `FKn625fd22ie9fh6kx0g22oqbq7` FOREIGN KEY (`armure_id`) REFERENCES `armure` (`id`);

--
-- Contraintes pour la table `inventaire_potion`
--
ALTER TABLE `inventaire_potion`
  ADD CONSTRAINT `FK95a3f0tn073lyv1u0e01wn785` FOREIGN KEY (`inventaire_id`) REFERENCES `inventaire` (`id`),
  ADD CONSTRAINT `FKik77wgi9tu3k8ehtetc2nmbar` FOREIGN KEY (`potion_id`) REFERENCES `potion` (`id`);

--
-- Contraintes pour la table `marchand_arme`
--
ALTER TABLE `marchand_arme`
  ADD CONSTRAINT `FKacy5gh151hqyoyc5oba8trvjr` FOREIGN KEY (`arme_id`) REFERENCES `arme` (`id`),
  ADD CONSTRAINT `FKhrpsl7xisq7blifi6q418ibxv` FOREIGN KEY (`marchand_id`) REFERENCES `marchand` (`id`);

--
-- Contraintes pour la table `marchand_armure`
--
ALTER TABLE `marchand_armure`
  ADD CONSTRAINT `FK1cd2gsiatscyspbaouf4vsp4v` FOREIGN KEY (`marchand_id`) REFERENCES `marchand` (`id`),
  ADD CONSTRAINT `FKf7y18hqil5gk2lmacmx9149r8` FOREIGN KEY (`armure_id`) REFERENCES `armure` (`id`);

--
-- Contraintes pour la table `marchand_potion`
--
ALTER TABLE `marchand_potion`
  ADD CONSTRAINT `FK7c6yfa8tss9kl4ks8b2osby3e` FOREIGN KEY (`marchand_id`) REFERENCES `marchand` (`id`),
  ADD CONSTRAINT `FKsn8fqnb11vc8sprii7ep8qix7` FOREIGN KEY (`potion_id`) REFERENCES `potion` (`id`);

--
-- Contraintes pour la table `personnage`
--
ALTER TABLE `personnage`
  ADD CONSTRAINT `FK1dtn4q0128r2575gxtbl4jha9` FOREIGN KEY (`arme_id`) REFERENCES `arme` (`id`),
  ADD CONSTRAINT `FK2esnkmq0iu4b8mbgtw7xl3o0d` FOREIGN KEY (`armure_id`) REFERENCES `armure` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
