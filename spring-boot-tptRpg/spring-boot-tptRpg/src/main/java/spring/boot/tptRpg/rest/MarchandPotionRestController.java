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

import spring.boot.tptRpg.model.MarchandPotion;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IMarchandPotionRepository;

@RestController
@RequestMapping("/marchandPotion")
@CrossOrigin("*")
public class MarchandPotionRestController {

	@Autowired
	private IMarchandPotionRepository marchandPotionRepo;

	@GetMapping("")
	@JsonView(Views.ViewMarchandPotion.class)
	public List<MarchandPotion> findAll() {
		return marchandPotionRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewMarchandPotion.class)
	public MarchandPotion find(@PathVariable Long id) {

		Optional<MarchandPotion> optMarchandPotion = marchandPotionRepo.findById(id);

		if (optMarchandPotion.isPresent()) {
			return optMarchandPotion.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewMarchandPotion.class)
	public MarchandPotion create(@Valid @RequestBody MarchandPotion marchandPotion, BindingResult result) {
//		if(result.hasErrors()) {
//			throw new MarchandPotionValidationException();
//		}
		
		marchandPotion = marchandPotionRepo.save(marchandPotion);

		return marchandPotion;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewMarchandPotion.class)
	public MarchandPotion update(@RequestBody MarchandPotion marchandPotion, @PathVariable Long id) {
		if (!marchandPotionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		marchandPotion = marchandPotionRepo.save(marchandPotion);

		return marchandPotion;
	}

	@PatchMapping("/{id}")
	public MarchandPotion partialUpdate(@RequestBody Map<String, Object> updates, @PathVariable Long id) {
		if (!marchandPotionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		MarchandPotion marchandPotionFind = marchandPotionRepo.findById(id).get();


		marchandPotionFind = marchandPotionRepo.save(marchandPotionFind);

		return marchandPotionFind;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!marchandPotionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		marchandPotionRepo.deleteById(id);
	}
}
