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
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IPersonnageRepository;

@RestController
@RequestMapping("/hero")
@CrossOrigin("*")
public class HeroRestController {
	
	@Autowired
	private IPersonnageRepository persoRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewHero.class)
	//@PreAuthorize("hasAnyRole('GUEST','USER','ADMIN')")
	public List<Hero> findAll(){
		return persoRepo.findAllHero();
	}
	
	@GetMapping("/detail")
	@JsonView(Views.ViewHeroDetail.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public List<Hero> findAllDetail(){
		return persoRepo.findAllHero();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewHero.class)
	//@PreAuthorize("hasAnyRole('GUEST','USER','ADMIN')")
	public Hero findHeroId(@PathVariable Long id) {
		Optional<Hero> optHero = persoRepo.findHeroById(id);
		
		if (optHero.isPresent()) {
			return optHero.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/{id}/detail")
	@JsonView(Views.ViewHeroDetail.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Hero findHeroDetailId(@PathVariable Long id) {
		Optional<Hero> optHero = persoRepo.findHeroById(id);
		
		if (optHero.isPresent()) {
			return optHero.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewHero.class)
	public  Hero update(@RequestBody Hero hero  , @PathVariable Long id) {
		if (!persoRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		hero = persoRepo.save(hero);

		return hero ;
	}
	
	@PostMapping("")
	//@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Hero create(@RequestBody Hero hero) {
		hero = persoRepo.save(hero);
		return hero;
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
