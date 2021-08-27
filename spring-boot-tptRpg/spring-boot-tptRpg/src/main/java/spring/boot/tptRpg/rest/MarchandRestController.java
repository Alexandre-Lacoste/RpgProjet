package spring.boot.tptRpg.rest;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import spring.boot.tptRpg.model.Marchand;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IMarchandRepository;

@RestController
@RequestMapping("/marchand")
@CrossOrigin("*")
public class MarchandRestController {

	@Autowired
	private IMarchandRepository marchandRepo;

	@GetMapping("")
	@JsonView(Views.ViewMarchand.class)
	public List<Marchand> findAll() {
		return marchandRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewMarchand.class)
	public Marchand find(@PathVariable Long id) {

		Optional<Marchand> optMarchand = marchandRepo.findById(id);

		if (optMarchand.isPresent()) {
			return optMarchand.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewMarchand.class)
	public Marchand create(@Valid @RequestBody Marchand marchand, BindingResult result) {
//		if(result.hasErrors()) {
//			throw new MarchandValidationException();
//		}
		
		marchand = marchandRepo.save(marchand);

		return marchand;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewMarchand.class)
	public Marchand update(@RequestBody Marchand marchand, @PathVariable Long id) {
		if (!marchandRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		marchand = marchandRepo.save(marchand);

		return marchand;
	}

	@PatchMapping("/{id}")
	public Marchand partialUpdate(@RequestBody Map<String, Object> updates, @PathVariable Long id) {
		if (!marchandRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		Marchand marchandFind = marchandRepo.findById(id).get();

		marchandFind = marchandRepo.save(marchandFind);

		return marchandFind;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!marchandRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		marchandRepo.deleteById(id);
	}
}
