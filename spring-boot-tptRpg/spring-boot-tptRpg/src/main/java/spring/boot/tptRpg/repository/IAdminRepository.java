package spring.boot.tptRpg.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.boot.tptRpg.model.Admin;

public interface IAdminRepository extends JpaRepository<Admin, Long>{

}
