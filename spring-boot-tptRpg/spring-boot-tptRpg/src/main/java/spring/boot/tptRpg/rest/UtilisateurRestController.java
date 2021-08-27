package spring.boot.tptRpg.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import spring.boot.tptRpg.model.Hero;
import spring.boot.tptRpg.model.Utilisateur;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IUtilisateurRepository;

@RestController
@RequestMapping("/utilisateur")
@CrossOrigin("*")

public class UtilisateurRestController {

	@Autowired
	private IUtilisateurRepository utilRepo;
	
	
	@GetMapping("")
	@JsonView(Views.ViewUtilisateur.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public List<Utilisateur> findAll(){
		return utilRepo.findAll();
	}

	
	@GetMapping("/{id}")
	@JsonView(Views.ViewUtilisateur.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Utilisateur findUtilisateurId(@PathVariable Long id) {
		Optional<Utilisateur> optUtil = utilRepo.findById(id);
		
		if (optUtil.isPresent()) {
			return optUtil.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/{id}/detail")
	@JsonView(Views.ViewUtilisateurDetail.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Utilisateur findUtilisateurDetailId(@PathVariable Long id) {
		Optional<Utilisateur> optUtil = utilRepo.findById(id);
		
		if (optUtil.isPresent()) {
			return optUtil.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Utilisateur create(@RequestBody Utilisateur utilisateur) {
		utilisateur = utilRepo.save(utilisateur);
		return utilisateur;
	}
	
	@PutMapping("/{id}")
	@JsonView(Views.ViewUtilisateur.class)
	//@PreAuthorize("hasAnyRole('ADMIN",'USER')
	public Utilisateur update(@RequestBody Utilisateur util, @PathVariable Long id) {
		if (!utilRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		util = utilRepo.save(util);

		return util;
	}
	
	@DeleteMapping
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!utilRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		utilRepo.deleteById(id);
	}
}
