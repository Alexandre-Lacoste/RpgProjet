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

import spring.boot.tptRpg.model.MarchandArmure;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IMarchandArmureRepository;

@RestController
@RequestMapping("/marchandArmure")
@CrossOrigin("*")
public class MarchandArmureRestController {

	@Autowired
	private IMarchandArmureRepository marchandArmureRepo;

	@GetMapping("")
	@JsonView(Views.ViewMarchandArmure.class)
	public List<MarchandArmure> findAll() {
		return marchandArmureRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewMarchandArmure.class)
	public MarchandArmure find(@PathVariable Long id) {

		Optional<MarchandArmure> optMarchandArmure = marchandArmureRepo.findById(id);

		if (optMarchandArmure.isPresent()) {
			return optMarchandArmure.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewMarchandArmure.class)
	public MarchandArmure create(@Valid @RequestBody MarchandArmure marchandArmure, BindingResult result) {
//		if(result.hasErrors()) {
//			throw new MarchandArmureValidationException();
//		}
		
		marchandArmure = marchandArmureRepo.save(marchandArmure);

		return marchandArmure;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewMarchandArmure.class)
	public MarchandArmure update(@RequestBody MarchandArmure marchandArmure, @PathVariable Long id) {
		if (!marchandArmureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		marchandArmure = marchandArmureRepo.save(marchandArmure);

		return marchandArmure;
	}

	@PatchMapping("/{id}")
	@JsonView(Views.ViewMarchandArmure.class)
	public MarchandArmure partialUpdate(@RequestBody Map<String, Object> updates, @PathVariable Long id) {
		if (!marchandArmureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		MarchandArmure marchandArmureFind = marchandArmureRepo.findById(id).get();

		marchandArmureFind = marchandArmureRepo.save(marchandArmureFind);

		return marchandArmureFind;
	}

	@DeleteMapping("/{id}")
	@JsonView(Views.ViewMarchandArmure.class)
	public void delete(@PathVariable Long id) {
		if (!marchandArmureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		marchandArmureRepo.deleteById(id);
	}
}
