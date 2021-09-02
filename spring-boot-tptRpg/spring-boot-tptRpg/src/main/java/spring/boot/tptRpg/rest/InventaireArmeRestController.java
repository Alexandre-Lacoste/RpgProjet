package spring.boot.tptRpg.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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
import spring.boot.tptRpg.model.InventaireArme;
import spring.boot.tptRpg.model.InventaireArme;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IArmeRepository;
import spring.boot.tptRpg.repository.IInventaireArmeRepository;

@RestController
@RequestMapping("/inventaireArme")
@CrossOrigin("*")
public class InventaireArmeRestController {
	@Autowired
	private IInventaireArmeRepository invArmeRepo;

	@Autowired
	private IArmeRepository armeRepo;
	
	@GetMapping("")
	@JsonView(Views.ViewInventaireArme.class)
	public List<InventaireArme> findAll(){
		return invArmeRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewInventaireArme.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public InventaireArme findInventaireArmeById(@PathVariable Long id) {
		Optional<InventaireArme> optInvArme = invArmeRepo.findById(id);
		
		if (optInvArme.isPresent()) {
			return optInvArme.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	
	@GetMapping("/idArme/{idA}/{idInv}")
	@JsonView(Views.ViewInventaireArme.class)
	//@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public InventaireArme findInventaireArmeByIdArmeAndIdInv(@PathVariable("idA") Long idA, @PathVariable("idInv") Long idInv) {
		Optional<InventaireArme> optInvArme = invArmeRepo.findInventaireArmeByIdArmeAndIdInv(idA,idInv);
		
		if (optInvArme.isPresent()) {
			return optInvArme.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	
	@PostMapping("")
	@JsonView(Views.ViewInventaireArme.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public InventaireArme create(@RequestBody InventaireArme invArme) {
		invArme = invArmeRepo.save(invArme);
		return invArme;
	}
	
	
	@PutMapping("/{id}")
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewInventaireArme.class)
	public  InventaireArme update(@RequestBody InventaireArme invArme  , @PathVariable Long id) {
		if (!invArmeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		invArme= invArmeRepo.save(invArme);

		return invArme ;
	}
	
	@DeleteMapping("/{id}")
	@JsonView(Views.ViewInventaireArme.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public void delete(@PathVariable Long id) {
		if(!invArmeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		invArmeRepo.deleteById(id);
	}

}
