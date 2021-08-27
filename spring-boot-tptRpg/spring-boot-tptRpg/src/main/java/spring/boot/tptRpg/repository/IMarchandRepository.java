package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.boot.tptRpg.model.Marchand;

public interface IMarchandRepository extends JpaRepository<Marchand, Long> {


}
