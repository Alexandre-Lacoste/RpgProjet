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

import spring.boot.tptRpg.model.InventairePotion;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IInventairePotionRepository;

@RestController
@RequestMapping("/inventairePotion")
@CrossOrigin("*")
public class InventairePotionRestController {
	@Autowired
	private IInventairePotionRepository invPotionRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewInventairePotion.class)
	public List<InventairePotion> findAll(){
		return invPotionRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewInventairePotion.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public InventairePotion findInventairePotionById(@PathVariable Long id) {
		Optional<InventairePotion> optInvPotion = invPotionRepo.findById(id);
		
		if (optInvPotion.isPresent()) {
			return optInvPotion.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping
	@JsonView(Views.ViewInventairePotion.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public InventairePotion create(@RequestBody InventairePotion invPotion) {
		invPotion = invPotionRepo.save(invPotion);
		return invPotion;
	}
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewInventairePotion.class)
	public  InventairePotion update (@RequestBody InventairePotion invPotion , @PathVariable Long id) {
		if (!invPotionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		invPotion = invPotionRepo.save(invPotion);

		return invPotion;
	}
	
	@DeleteMapping
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!invPotionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		invPotionRepo.deleteById(id);
	}

}
