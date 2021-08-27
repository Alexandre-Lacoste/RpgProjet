package spring.boot.tptRpg.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.Hero;
import spring.boot.tptRpg.model.Monstre;
import spring.boot.tptRpg.model.Personnage;
import spring.boot.tptRpg.model.TypeMonstre;
import spring.boot.tptRpg.model.TypePersonnage;

public interface IPersonnageRepository extends JpaRepository<Personnage, Long> {
	@Query("select h from Hero h ")
	List<Hero> findAllHero();
	
	@Query("select h from Hero h where h.typePersonnage = :type")
	List<Hero> findAllHeroWithSpecificType(@Param("type") TypePersonnage type);
	
	@Query("select m from Monstre m ")
	List<Monstre> findAllMonstre();
	
	@Query("select m from Monstre m where m.typeMonstre = :type")
	List<Monstre> findAllMonstreWithSpecificType(@Param("type") TypeMonstre type);	
	
	@Query("select h from Hero h where h.id = :id")
	Optional<Hero> findHeroById(@Param("id") Long id);
	
	@Query("select m from Monstre m where m.id = :id")
	Optional<Monstre> findMonstreById(@Param("id") Long id);
}

