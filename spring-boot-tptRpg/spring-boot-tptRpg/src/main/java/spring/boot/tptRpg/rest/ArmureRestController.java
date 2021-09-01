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
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IArmureRepository;

@RestController
@RequestMapping("/armure")
@CrossOrigin("*")
public class ArmureRestController {
	
	@Autowired
	private IArmureRepository armureRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewArmure.class)
	public List<Armure> findAll(){
		return armureRepo.findAll();
	}
	
	@GetMapping("/detail")
	@JsonView(Views.ViewArmureDetail.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public List<Armure> findDetailAll(){
		return armureRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewArmure.class)
	public Armure findArmureId(@PathVariable Long id) {
		Optional<Armure> optArmure = armureRepo.findById(id);
		
		if (optArmure.isPresent()) {
			return optArmure.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/{id}/detail")
	@JsonView(Views.ViewArmureDetail.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public Armure findArmureDetailId(@PathVariable Long id) {
		Optional<Armure> optArmure = armureRepo.findById(id);
		
		if (optArmure.isPresent()) {
			return optArmure.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping("")
	@JsonView(Views.ViewCommon.class)
//	@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Armure create(@RequestBody Armure armure) {
		armure = armureRepo.save(armure);
		return armure;
	}
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewCommon.class)
	public  Armure update(@RequestBody Armure armure  , @PathVariable Long id) {
		if (!armureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		armure = armureRepo.save(armure);

		return armure ;
	}
	
	@DeleteMapping("/{id}")
	@JsonView(Views.ViewCommon.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!armureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		armureRepo.deleteById(id);
	}

}
