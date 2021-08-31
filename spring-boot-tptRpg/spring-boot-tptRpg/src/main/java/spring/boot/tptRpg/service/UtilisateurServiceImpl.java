package spring.boot.tptRpg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.boot.tptRpg.model.Monstre;
import spring.boot.tptRpg.model.Objet;
import spring.boot.tptRpg.model.Utilisateur;
import spring.boot.tptRpg.repository.IInventaireRepository;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {

	@Autowired
	private IInventaireRepository inventaireRepo;
	
	@Override
	public void attaquer(Utilisateur utilisateur,Monstre m) {
		utilisateur.attaquer(m);
		m.attaquer(utilisateur);
	}

	@Override
	public void fuir(Utilisateur utilisateur) {
		//utilisateur.fuir();
		//Objet orInInventaire = inventaireRepo.findQteObjetForUserPseudo(utilisateur.getPseudo(), "or");
//		double qteOr = 1000;
//		double qte = orInInventaire.getQte()-qteOr;
//		orInInventaire.setQte(qte);
//		if(orInInventaire.getQte()<0) {
//			orInInventaire.setQte(0);
//		}
		utilisateur.setPseudo("user nouveau speudo");
		
	}

	@Override
	public void potion(Utilisateur utilisateur, String choix) {
		// TODO Auto-generated method stub
		
	}

}
