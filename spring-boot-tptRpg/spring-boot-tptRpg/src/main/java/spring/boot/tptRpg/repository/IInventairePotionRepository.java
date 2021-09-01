package spring.boot.tptRpg.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.InventairePotion;
import spring.boot.tptRpg.model.InventairePotion;
import spring.boot.tptRpg.model.Potion;
import spring.boot.tptRpg.model.TypePotion;

public interface IInventairePotionRepository  extends JpaRepository<InventairePotion, Long>{
	@Query("select ip  from InventairePotion ip  where ip.inventaire.id = :id")
	Optional<List<InventairePotion>> findAllInventairePotionByInventaireId(@Param("id") Long id); // @Query
	
	@Query("select ip.potion from InventairePotion ip  where ip.potion.type = :type")
	List<Potion> findAllPotionByType( @Param("type") TypePotion type); // @Query
	
	@Query("select ip.potion from InventairePotion ip  where ip.potion.type = :type and ip.inventaire.id = :id")
	List<Potion> findAllPotionByTypeAndInventaireId( @Param("type") TypePotion type,@Param("id") Long id); // @Query

	@Query("select ip.potion from InventairePotion ip where ip.potion.nom = :nom and ip.inventaire.id = :id")
	Potion findPotionNameInInveantaire(@Param("nom") String nom, @Param("id") Long id);
	
	@Query("select ip from InventairePotion ip where ip.potion.id = :idP and ip.inventaire.id = :idInv")
	InventairePotion findInventairePotionByIdPotionAndIdInv(@Param("idP") Long idP, @Param("idInv") Long idInv);
	

	@Query("select ip from InventairePotion ip where ip.potion.id = :id")
	Optional<InventairePotion> findInventairePotionByIdPotion(@Param("id") Long id);
}
