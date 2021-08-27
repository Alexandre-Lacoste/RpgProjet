package spring.boot.tptRpg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.Armure;
import spring.boot.tptRpg.model.InventaireArmure;
import spring.boot.tptRpg.model.TypeArmure;

public interface IInventaireArmureRepository  extends JpaRepository<InventaireArmure, Long>{
	@Query("select ip.armure from InventaireArmure ip  where ip.inventaire.id = :id")
	List<Armure> findAllArmureByInventaireId(@Param("id") Long id); // @Query
	
	@Query("select ip.armure from InventaireArmure ip  where ip.armure.typearmure = :type")
	List<Armure> findAllArmureByType( @Param("type") TypeArmure type); // @Query
	
	@Query("select ip.armure from InventaireArmure ip  where ip.armure.typearmure = :type and ip.inventaire.id = :id")
	List<Armure> findAllPotionByTypeAndInventaireId( @Param("type") TypeArmure type,@Param("id") Long id); // @Query

	@Query("select ip.armure from InventaireArmure ip where ip.armure.nom = :nom and ip.inventaire.id = :id")
	Armure findArmureNameInInveantaire(@Param("nom") String nom, @Param("id") Long id);
	
	@Query("select ip from InventaireArmure ip where ip.armure.id = :idAr and ip.inventaire.id = :idInv")
	InventaireArmure findInventaireArmureByIdArmureAndIdInv(@Param("idAr") Long idAr, @Param("idInv") Long idInv);
	
}
