package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.boot.tptRpg.model.Compte;

public interface ICompteRepository extends JpaRepository<Compte, Long> {

}
	