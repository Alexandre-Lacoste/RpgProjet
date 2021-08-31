package spring.boot.tptRpg.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.Arme;
import spring.boot.tptRpg.model.Objet;

public interface IObjetRepository extends JpaRepository<Objet, Long>{
	@Query("select o.id from Objet o where o.nom = :nom")
	Integer findIdObjetForNom(@Param("nom") String nom);
	
	@Query("select o from Objet o where o.id = :id")
	Optional <Objet> findByObjetId(@Param("id") Long id);
	
//	@Query("SELECT o FROM Objet o ORDER BY o.prixAchat ASC")
//	Objet orderByBuyingPriceAsc();
//	
//	@Query("SELECT o FROM Objet o ORDER BY o.prixAchat DESC")
//	Objet orderByBuyingPriceDesc();
//	
//	@Query("SELECT o FROM Objet o ORDER BY o.prixVente ASC")
//	Objet orderBySellingPriceAsc();
//	
//	@Query("SELECT o FROM Objet o ORDER BY o.prixVente DESC")
//	Objet orderBySellingPriceDesc();
	
//	// Pour trouver les classer en fonction de leur type
//	@Query("SELECT o FROM Objet o ORDER BY o.typeObjet ASC")
//	Objet findAllByTypeObjetAsc();
//	@Query("SELECT o FROM Objet o ORDER BY o.typeObjet DESC")
//	Objet findAllByTypeObjetDesc();
	
//	//Pour choisir un type precis à afficher
//	@Query("SELECT o FROM Objet o WHERE o.typeObjet = :type")
//	Objet findTypeObjet(@Param("type") Long typeObjet);
	
	
	@Query("SELECT o.qte FROM Objet o WHERE o.nom = 'Gold'")
	double findQteGold();
	
	
//	
//	@Query("SELECT o.prixAchat FROM Objet o where o.nom = :nom")
//	double findObjetBuyingPriceFromName(@Param("nom") Long nom);
//	
//	
	
	
	
}
