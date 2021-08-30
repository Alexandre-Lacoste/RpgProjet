package spring.boot.tptRpg.service;

import spring.boot.tptRpg.model.Monstre;
import spring.boot.tptRpg.model.Utilisateur;

public interface UtilisateurService {
	public abstract void attaquer(Utilisateur utilisateur,Monstre m);
	
	public abstract void fuir(Utilisateur utilisateur);
	
	public abstract void potion(Utilisateur utilisateur,String choix);

}
