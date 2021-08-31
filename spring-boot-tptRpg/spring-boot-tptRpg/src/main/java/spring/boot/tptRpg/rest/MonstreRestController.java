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

import spring.boot.tptRpg.model.Monstre;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IPersonnageRepository;

@RestController
@RequestMapping("/monstre")
@CrossOrigin("*")
public class MonstreRestController {
	
	@Autowired
	private IPersonnageRepository persoRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewMonstre.class)
	public List<Monstre> findAll(){
		return persoRepo.findAllMonstre();
	}

	@GetMapping("/detail")
	@JsonView(Views.ViewMonstreDetail.class)
	public List<Monstre> findAllDetail(){
		return persoRepo.findAllMonstre();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewMonstre.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Monstre findMonstreId(@PathVariable Long id) {
		Optional<Monstre> optMonstre = persoRepo.findMonstreById(id);
		
		if (optMonstre.isPresent()) {
			return optMonstre.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	
	@GetMapping("/{id}/detail")
	@JsonView(Views.ViewMonstreDetail.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Monstre findMonstreDetailId(@PathVariable Long id) {
		Optional<Monstre> optMonstre = persoRepo.findMonstreById(id);
		
		if (optMonstre.isPresent()) {
			return optMonstre.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping("")
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Monstre create(@RequestBody Monstre monstre) {
		monstre = persoRepo.save(monstre);
		return monstre;
	}
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewMonstre.class)
	public  Monstre update(@RequestBody Monstre monstre  , @PathVariable Long id) {
		if (!persoRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		monstre = persoRepo.save(monstre);

		return monstre;
	}
	
	@DeleteMapping("/{id}")
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!persoRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		persoRepo.deleteById(id);
	}

}
