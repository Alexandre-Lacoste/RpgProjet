package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.boot.tptRpg.model.Admin;

public interface IAdminRepository extends JpaRepository<Admin, Long>{

//	@Query("select a from Admin a where a.id = :id")
//	Optional<Admin> findAdminById(@Param("id") Long id);

//	@Query("select u from Admin u where u.pseudo = :pseudo")
//	Optional<Admin> findByPseudo(@Param("pseudo") String pseudo); // @Query
	
}
