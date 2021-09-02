package spring.boot.tptRpg.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import spring.boot.tptRpg.model.Compte;

public interface ICompteRepository extends JpaRepository<Compte, Long> {
	
	@Query("select distinct c from Compte c where c.pseudo = :pseudo")
	Optional<Compte> findBypseudoWithRoles(@Param("pseudo") String pseudo);
//	c left join fetch
	
	@Query("select u from Compte u where u.pseudo = :pseudo")
	Optional<Compte> findByPseudo(@Param("pseudo") String pseudo); // @Query
	
	@Query("select u from Compte u where u.pseudo = :pseudo and u.mdp = :mdp")
	Optional<Compte> findByPseudoMdp(@Param("pseudo") String pseudo,@Param("mdp") String mdp); 
	
	@Query("select u from Compte u where u.mail = :mail")
	Optional<Compte> findCompteByMail(@Param("mail") String mail); // @Query

}
	