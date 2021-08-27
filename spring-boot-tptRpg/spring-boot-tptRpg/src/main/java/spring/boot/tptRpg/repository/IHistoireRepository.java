package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.boot.tptRpg.model.Histoire;

public interface IHistoireRepository extends JpaRepository<Histoire, Long>{

}
