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

import spring.boot.tptRpg.model.Armure;
import spring.boot.tptRpg.model.Objet;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IObjetRepository;

@RestController
@RequestMapping("/objet")
@CrossOrigin("*")
public class ObjetRestController {
	
	@Autowired
	private IObjetRepository objetRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewCommon.class)
	public List<Objet> findAll(){
		return objetRepo.findAll();
	}
	
	@GetMapping("/detail")
	@JsonView(Views.ViewCommon.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public List<Objet> findDetailAll(){
		return objetRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewCommon.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Objet findByObjetId(@PathVariable Long id) {
		Optional<Objet> optObjet = objetRepo.findById(id);
		
		if (optObjet.isPresent()) {
			return optObjet.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	

	@PostMapping
	@JsonView(Views.ViewCommon.class)
//	@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Objet create(@RequestBody Objet objet) {
		objet = objetRepo.save(objet);
		return objet;
	}
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewCommon.class)
	public  Objet update(@RequestBody Objet objet  , @PathVariable Long id) {
		if (!objetRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		objet = objetRepo.save(objet);

		return objet ;
	}
	
	@DeleteMapping
	@JsonView(Views.ViewCommon.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!objetRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		objetRepo.deleteById(id);
	}

}
