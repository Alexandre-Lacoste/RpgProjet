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

import spring.boot.tptRpg.model.Arme;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IArmeRepository;

@RestController
@RequestMapping("/arme")
@CrossOrigin("*")
public class ArmeRestController {
	
	@Autowired
	private IArmeRepository armeRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewArme.class)
	public List<Arme> findAll(){
		return armeRepo.findAll();
	}
	
	@GetMapping("/detail")
	@JsonView(Views.ViewArmeDetail.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public List<Arme> findDetailAll(){
		return armeRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewArme.class)
	public Arme findArmeId(@PathVariable Long id) {
		Optional<Arme> optArme = armeRepo.findByArmeId(id);
		
		if (optArme.isPresent()) {
			return optArme.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/{id}/detail")
	@JsonView(Views.ViewArmeDetail.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Arme findArmeDetailId(@PathVariable Long id) {
		Optional<Arme> optArme = armeRepo.findByArmeId(id);
		
		if (optArme.isPresent()) {
			return optArme.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping
	@JsonView(Views.ViewCommon.class)
//	@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Arme create(@RequestBody Arme arme) {
		arme = armeRepo.save(arme);
		return arme;
	}
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewCommon.class)
	public  Arme update(@RequestBody Arme arme  , @PathVariable Long id) {
		if (!armeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		arme = armeRepo.save(arme);

		return arme ;
	}
	
	@DeleteMapping
	@JsonView(Views.ViewCommon.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!armeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		armeRepo.deleteById(id);
	}

}
