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
import spring.boot.tptRpg.model.InventaireArmure;
import spring.boot.tptRpg.model.InventaireArmure;
import spring.boot.tptRpg.model.InventaireArmure;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IArmureRepository;
import spring.boot.tptRpg.repository.IInventaireArmureRepository;

@RestController
@RequestMapping("/inventaireArmure")
@CrossOrigin("*")
public class InventaireArmureRestController {
	@Autowired
	private IInventaireArmureRepository invArmureRepo;

	@Autowired
	private IArmureRepository armureRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewInventaireArmure.class)
	public List<InventaireArmure> findAll(){
		return invArmureRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewInventaireArmure.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public InventaireArmure findInventaireArmureById(@PathVariable Long id) {
		Optional<InventaireArmure> optInvArmure = invArmureRepo.findById(id);
		
		if (optInvArmure.isPresent()) {
			return optInvArmure.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	
	@GetMapping("/idArmure/{idA}/{idInv}")
	@JsonView(Views.ViewInventaireArmure.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public InventaireArmure findInventaireArmureByIdArmureAndIdInv(@PathVariable("idA") Long idA, @PathVariable("idInv") Long idInv) {
		Optional<InventaireArmure> optInvArmure = invArmureRepo.findInventaireArmureByIdArmureAndIdInv(idA,idInv);
		
		if (optInvArmure.isPresent()) {
			return optInvArmure.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	
	
	@PostMapping("")
	@JsonView(Views.ViewInventaireArmure.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public InventaireArmure create(@RequestBody InventaireArmure invArmure) {
		invArmure = invArmureRepo.save(invArmure);
		return invArmure;
	}
	
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewInventaireArmure.class)
	public  InventaireArmure update(@RequestBody InventaireArmure invArmure  , @PathVariable Long id) {
		if (!invArmureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		invArmure= invArmureRepo.save(invArmure);

		return invArmure ;
	}
	
	@DeleteMapping("/{id}")
	@JsonView(Views.ViewInventaireArmure.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!invArmureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		invArmureRepo.deleteById(id);
	}

}
