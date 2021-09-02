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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import spring.boot.tptRpg.model.Admin;
import spring.boot.tptRpg.model.Arme;
import spring.boot.tptRpg.model.Armure;
import spring.boot.tptRpg.model.Compte;
import spring.boot.tptRpg.model.Potion;
import spring.boot.tptRpg.model.Utilisateur;
import spring.boot.tptRpg.model.Views;
import spring.boot.tptRpg.repository.IAdminRepository;
import spring.boot.tptRpg.repository.IArmeRepository;
import spring.boot.tptRpg.repository.IArmureRepository;
import spring.boot.tptRpg.repository.ICompteRepository;
import spring.boot.tptRpg.repository.IPotionRepository;
import spring.boot.tptRpg.repository.IUtilisateurRepository;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminRestController {

	@Autowired
	private IAdminRepository adminRepo;
	@Autowired
	private ICompteRepository compteRepo;
	@Autowired
	private IUtilisateurRepository utilisateurRepo;
	@Autowired
	private IArmeRepository armeRepo;
	@Autowired
	private IArmureRepository armureRepo;
	@Autowired
	private IPotionRepository potionRepo;
//	@Autowired
//	private IMonstreRepository monstreRepo;

	
	@GetMapping("/compte")
	@JsonView(Views.ViewAdmin.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public List<Compte> findAllCompte() {
		return compteRepo.findAll();
	}
	
	@GetMapping(value  = "/compte", params = "id")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Compte findComptebyId(@RequestParam("id") Long id) {

		Optional<Compte> optCompte = compteRepo.findById(id);

		if (optCompte.isPresent()) {
			return optCompte.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	
	
	@GetMapping(value  = "/compte", params = "pseudo")
	@JsonView(Views.ViewAdmin.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	
	public Compte findComptebyPseudo(@RequestParam("pseudo") String pseudo) {

		Optional<Compte> optCompte = compteRepo.findByPseudo(pseudo);

		if (optCompte.isPresent()) {
			return optCompte.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping(value  = "/compte", params = "mail")
	@JsonView(Views.ViewAdmin.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public Compte findCompteByMail(@RequestParam("mail") String mail) {

		Optional<Compte> optCompte = compteRepo.findCompteByMail(mail);

		if (optCompte.isPresent()) {
			return optCompte.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	

	
	
	@GetMapping("")
	@JsonView(Views.ViewAdmin.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public List<Admin> findAllAdmin() {
		return adminRepo.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.ViewAdmin.class)
	public Admin findAdminById(@PathVariable Long id) {
		Optional<Admin> optAdmin = adminRepo.findById(id);
		
		if (optAdmin.isPresent()) {
			return optAdmin.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping("")
	@JsonView(Views.ViewAdmin.class)
	//@PreAuthorize("hasAnyRole('ADMIN')")
	public Admin creatAdmin(@RequestBody Admin admin) {

		admin = adminRepo.save(admin);
		return admin;
	}
	
//	@PostMapping("/compte/users/connexion/")
////	@PreAuthorize("hasAnyRole('ADMIN')")
//	@JsonView(Views.ViewAdmin.class)
//	public Compte findConnexion(@RequestParam("pseudo") String pseudo ,@RequestParam("mdp") String mdp) {
//		Optional<Compte> optAdmin = compteRepo.findByPseudoMdp(pseudo,mdp);
//		
//		if (optAdmin.isPresent()) {
//			return optAdmin.get();
//		} else {
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
//		}
//	}
	
	@RequestMapping(value="/compte/users/connexion",method=RequestMethod.POST)
	@JsonView(Views.ViewAdmin.class)
	public Compte findConnexion(@RequestParam("pseudo") String pseudo ,@RequestParam("mdp") String mdp) {
		Optional<Compte> optAdmin = compteRepo.findByPseudoMdp(pseudo,mdp);
		
		if (optAdmin.isPresent()) {
			return optAdmin.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PutMapping("/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Admin updateAdmin(@RequestBody Admin admin, @PathVariable Long id) {
		if (!adminRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		admin = adminRepo.save(admin);

		return admin;
	}
	
	@DeleteMapping("/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public void deleteAdmin(@PathVariable Long id) {
		if (!adminRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		adminRepo.deleteById(id);
	}
	
	
	
	
	
	@PostMapping("/adduser")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Compte createUser(@RequestBody Utilisateur utilisateur) {
		utilisateur = utilisateurRepo.save(utilisateur);

		return utilisateur;
	}
	
	
	
	@PutMapping("/compte/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Admin updateCompte(@RequestBody Admin admin, @PathVariable Long id) {
		if (!adminRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		admin = adminRepo.save(admin);

		return admin;
	}

	@DeleteMapping("/compte/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public void deleteCompte(@PathVariable Long id) {
		if (!adminRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		adminRepo.deleteById(id);
	}
	
	
	
	
	
	
	
	@GetMapping("/arme")
	@JsonView(Views.ViewAdmin.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public List<Arme> findAllArme() {
		return armeRepo.findAll();
	}
	
	@GetMapping("/arme/{id}")
	@JsonView(Views.ViewArme.class)
	public Arme findArmeId(@PathVariable Long id) {
		Optional<Arme> optArme = armeRepo.findByArmeId(id);
		
		if (optArme.isPresent()) {
			return optArme.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@PostMapping("/addarme/")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Arme createArme(@RequestBody Arme arme) {
		arme = armeRepo.save(arme);

		return arme;
	}
	
	@PutMapping("/arme/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Arme updateArme(@RequestBody Arme arme, @PathVariable Long id) {
		if (!armeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		arme = armeRepo.save(arme);

		return arme;
	}

	@DeleteMapping("/arme/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public void deleteArme(@PathVariable Long id) {
		if (!armeRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		armeRepo.deleteById(id);
	}
	
	
	
	
	
	
	
	@GetMapping("/armure")
	@JsonView(Views.ViewAdmin.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public List<Armure> findAllArmure() {
		return armureRepo.findAll();
	}
	
	@PostMapping("/addarmure")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Armure createArmure(@RequestBody Armure armure) {
		armure = armureRepo.save(armure);

		return armure;
	}
	
	@PutMapping("/armure/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Armure updateArmure(@RequestBody Armure armure, @PathVariable Long id) {
		if (!armureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		armure = armureRepo.save(armure);

		return armure;
	}

	@DeleteMapping("/armure/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public void deleteArmure(@PathVariable Long id) {
		if (!armureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		armureRepo.deleteById(id);
	}
	
	
	
	
	
	
	
	
	
	
	@GetMapping("/potion")
	@JsonView(Views.ViewAdmin.class)
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public List<Potion> findAllPotion() {
		return potionRepo.findAll();
	}
	
	@PostMapping("/addpotion")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Potion createPotion(@RequestBody Potion potion) {
		potion = potionRepo.save(potion);

		return potion;
	}
	
	@PutMapping("/potion/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	@JsonView(Views.ViewAdmin.class)
	public Potion updatePotion(@RequestBody Potion potion, @PathVariable Long id) {
		if (!potionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		potion = potionRepo.save(potion);

		return potion;
	}

	@DeleteMapping("/potion/{id}")
//	@PreAuthorize("hasAnyRole('ADMIN')")
	public void deletePotion(@PathVariable Long id) {
		if (!potionRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		potionRepo.deleteById(id);
	}
	
}
