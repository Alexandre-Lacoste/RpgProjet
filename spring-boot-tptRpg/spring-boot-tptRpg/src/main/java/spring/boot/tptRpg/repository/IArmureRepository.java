package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.Armure;
import spring.boot.tptRpg.model.TypeArmure;

public interface IArmureRepository extends JpaRepository<Armure, Long> {

	
	@Query("SELECT a FROM Armure a ORDER BY a.prixAchat ASC")
	Armure orderByBuyingPriceAsc();
	
	@Query("SELECT a FROM Armure a ORDER BY a.prixAchat DESC")
	Armure orderByBuyingPriceDesc();
	
	@Query("SELECT a FROM Armure a ORDER BY a.prixVente ASC")
	Armure orderBySellingPriceAsc();
	
	@Query("SELECT a FROM Armure a ORDER BY a.prixVente DESC")
	Armure orderBySellingPriceDesc();
	
	// Pour trouver les classer en fonction de leur type
	@Query("SELECT a FROM Armure a ORDER BY a.typearmure ASC")
	Armure findAllByTypeArmureAsc();
	@Query("SELECT a FROM Armure a ORDER BY a.typearmure DESC")
	Armure findAllByTypeArmureDesc();
	
	
	//Pour choisir un type precis à afficher
	@Query("SELECT a FROM Armure a WHERE a.typearmure = :type")
	Armure findTypeArmure(@Param("type") TypeArmure type);
	
	
	@Query("SELECT a.prixAchat FROM Armure a where a.nom = :nom")
	double findArmureBuyingPriceFromName(@Param("nom") Long nom);
	@Query("select a from Armure a where a.nom = :nom")
	Armure findByName(@Param("nom") String nom);
}
