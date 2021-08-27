package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.Potion;
import spring.boot.tptRpg.model.TypePotion;

public interface IPotionRepository  extends JpaRepository<Potion, Long>{
	@Query("select p from Potion p where p.nom = :nom")
	Potion findPotionByName(@Param("nom") String nom);
	
	@Query("SELECT p FROM Potion p ORDER BY p.prixAchat ASC")
	Potion orderByBuyingPriceAsc();
	
	@Query("SELECT p FROM Potion p ORDER BY p.prixAchat DESC")
	Potion orderByBuyingPriceDesc();
	
	@Query("SELECT p FROM Potion p ORDER BY p.prixVente ASC")
	Potion orderBySellingPriceAsc();
	
	@Query("SELECT p FROM Potion p ORDER BY p.prixVente DESC")
	Potion orderBySellingPriceDesc();
	
	// Pour trouver les classer en fonction de leur type
	@Query("SELECT p FROM Potion p ORDER BY p.type ASC")
	Potion findAllByTypePotionAsc();
	@Query("SELECT p FROM Potion p ORDER BY p.type DESC")
	Potion findAllByTypePotionDesc();
	
	//Pour choisir un type precis à afficher
	@Query("SELECT p FROM Potion p WHERE p.type = :type")
	Potion findTypePotion(@Param("type") TypePotion type);
	
	
	@Query("SELECT p.prixAchat FROM Potion p where p.nom = :nom")
	double findPotionBuyingPriceFromName(@Param("nom") Long nom);
	

	
}
