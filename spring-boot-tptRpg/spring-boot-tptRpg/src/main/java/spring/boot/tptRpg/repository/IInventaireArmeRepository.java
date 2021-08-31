package spring.boot.tptRpg.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.Arme;
import spring.boot.tptRpg.model.InventaireArme;
import spring.boot.tptRpg.model.TypeArme;

public interface IInventaireArmeRepository  extends JpaRepository<InventaireArme, Long>{
	@Query("select ip.arme from InventaireArme ip  where ip.inventaire.id = :id")
	List<Arme> findAllArmeByInventaireId(@Param("id") Long id); // @Query
	
	@Query("select ip.arme from InventaireArme ip  where ip.arme.typearme = :type")
	List<Arme> findAllArmeByType( @Param("type") TypeArme type); // @Query
	
	@Query("select ip.arme from InventaireArme ip  where ip.arme.typearme = :type and ip.inventaire.id = :id")
	List<Arme> findAllArmeByTypeAndInventaireId( @Param("type") TypeArme type,@Param("id") Long id); // @Query

	@Query("select ip.arme from InventaireArme ip where ip.arme.nom = :nom and ip.inventaire.id = :id")
	Arme findArmeNameInInveantaire(@Param("nom") String nom, @Param("id") Long id);
	
	@Query("select ip from InventaireArme ip where ip.arme.id = :idA and ip.inventaire.id = :idInv")
	InventaireArme findInventaireArmeByIdArmeAndIdInv(@Param("idA") Long idA, @Param("idInv") Long idInv);
	
	@Query("select ip from InventaireArme ip where ip.arme.id = :id")
	Optional<InventaireArme> findInventaireArmeByIdArme(@Param("id") Long id);
}
