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

import spring.boot.tptRpg.model.MarchandArme;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IMarchandArmeRepository;

@RestController
@RequestMapping("/marchandArme")
@CrossOrigin("*")
public class MarchandArmeRestController {

	@Autowired
	private IMarchandArmeRepository marchandArmeRepo;

	@GetMapping("")
	@JsonView(Views.ViewMarchandArme.class)
	public List<MarchandArme> findAll() {
		return marchandArmeRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewMarchandArme.class)
	public MarchandArme find(@PathVariable Long id) {

		Optional<MarchandArme> optMarchandArme = marchandArmeRepo.findById(id);

		if (optMarchandArme.isPresent()) {
			return optMarchandArme.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewMarchandArme.class)
	public MarchandArme create(@Valid @RequestBody MarchandArme marchandArme, BindingResult result) {
//		if(result.hasErrors()) {
//			throw new MarchandArmeValidationException();
//		}
		
		marchandArme = marchandArmeRepo.save(marchandArme);

		return marchandArme;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewMarchandArme.class)
	public MarchandArme update(@RequestBody MarchandArme marchandArme, @PathVariable Long id) {
		if (!marchandArmeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		marchandArme = marchandArmeRepo.save(marchandArme);

		return marchandArme;
	}

	@PatchMapping("/{id}")
	public MarchandArme partialUpdate(@RequestBody Map<String, Object> updates, @PathVariable Long id) {
		if (!marchandArmeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		MarchandArme marchandArmeFind = marchandArmeRepo.findById(id).get();

		marchandArmeFind = marchandArmeRepo.save(marchandArmeFind);

		return marchandArmeFind;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!marchandArmeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		marchandArmeRepo.deleteById(id);
	}
}
