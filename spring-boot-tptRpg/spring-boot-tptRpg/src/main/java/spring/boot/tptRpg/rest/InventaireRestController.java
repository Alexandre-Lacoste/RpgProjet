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
import spring.boot.tptRpg.model.Inventaire;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IInventaireRepository;

@RestController
@RequestMapping("/inventaire")
@CrossOrigin("*")
public class InventaireRestController {
	
	@Autowired
	private IInventaireRepository inventaireRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewInventaire.class)
	public List<Inventaire> findAll(){
		return inventaireRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewInventaire.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Inventaire findInventaireId(@PathVariable Long id) {
		Optional<Inventaire> optInventaire = inventaireRepo.findById(id);
		
		if (optInventaire.isPresent()) {
			return optInventaire.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Inventaire create(@RequestBody Inventaire inventaire) {
		inventaire = inventaireRepo.save(inventaire);
		return inventaire;
	}
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewInventaire.class)
	public Inventaire update(@RequestBody Inventaire inv , @PathVariable Long id) {
		if (!inventaireRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		inv = inventaireRepo.save(inv);

		return inv;
	}
	
	@DeleteMapping
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!inventaireRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		inventaireRepo.deleteById(id);
	}

}
