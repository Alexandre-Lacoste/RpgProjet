package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.boot.tptRpg.model.MarchandArme;

public interface IMarchandArmeRepository extends JpaRepository<MarchandArme, Long> {
	
	// check si l'article est présent chez le marchand lors de l'achat par exemple, a mettre directement dans la classe metier. 
	// l'interface est là pour les appels de base ?
	

}
