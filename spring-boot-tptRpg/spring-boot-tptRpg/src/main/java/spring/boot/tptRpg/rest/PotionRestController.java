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

import spring.boot.tptRpg.model.Potion;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IPotionRepository;

@RestController
@RequestMapping("/potion")
@CrossOrigin("*")
public class PotionRestController {
	
	@Autowired
	private IPotionRepository potionRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewPotion.class)
	public List<Potion> findAll(){
		return potionRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewPotion.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Potion findPotionId(@PathVariable Long id) {
		Optional<Potion> optPotion = potionRepo.findById(id);
		
		if (optPotion.isPresent()) {
			return optPotion.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping
	@JsonView(Views.ViewPotion.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Potion create(@RequestBody Potion Potion) {
		Potion = potionRepo.save(Potion);
		return Potion;
	}
	
	@PutMapping("/{id}")
	@JsonView(Views.ViewPotion.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Potion update(@RequestBody Potion potion, @PathVariable Long id) {
		if (!potionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		potion = potionRepo.save(potion);

		return potion;
	}
	
	@DeleteMapping
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!potionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		potionRepo.deleteById(id);
	}

}
