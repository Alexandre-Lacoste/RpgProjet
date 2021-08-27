package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.Inventaire;
import spring.boot.tptRpg.model.Objet;

public interface IInventaireRepository extends JpaRepository<Inventaire, Long>{
	@Query("select i.objet  From Inventaire i where i.utilisateur.pseudo = :pseudo and i.objet.nom = :nom  ")
	Objet findQteObjetForUserPseudo(@Param("pseudo") String pseudo,@Param("nom") String nom);

}