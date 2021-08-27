package spring.boot.tptRpg.model;

import java.util.Random;
import java.util.Scanner;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("user")
public class Utilisateur extends Compte {
	

	@ManyToOne
	@JoinColumn(name="hero_id")
	@JsonView(Views.ViewUtilisateur.class)
	private Hero hero;
	

	@OneToOne
	@JoinColumn(name="inventaire")
	@JsonView(Views.ViewUtilisateur.class)
	private Inventaire inventaire;
	
	
	@ManyToOne
	@JoinColumn(name="Arme")
	@JsonView(Views.ViewUtilisateur.class)
	private Arme arme;
	
	@ManyToOne
	@JoinColumn(name="Armure")
	@JsonView(Views.ViewUtilisateur.class)
	private Armure armure;
	
	@OneToOne
	@JoinColumn(name="histoire")
	@JsonIgnore
	private Histoire histoire;

	
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double vie;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double attaque;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double defense;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double agilite;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double vitesse;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double vieMax;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double attaqueMax;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double defenseMax;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double agiliteMax;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private double vitesseMax;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private int cptEmpoisonnement;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private int cptEtourdissement;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private int cptSaignement;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private int cptBrulure;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private int cptCombat;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private int cptCombatGagne;
	@Column()
	@JsonView(Views.ViewUtilisateurDetail.class)
	private int cptMonstreVaincu;
	@Column()
	@JsonView(Views.ViewCommon.class)
	private int exp;
	
	
	public Utilisateur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Utilisateur(Long id, int version, String pseudo, String mail, String mdp) {
		super(id, version, pseudo, mail, mdp);
		// TODO Auto-generated constructor stub
	}
	public Utilisateur(String pseudo, String mail, String mdp) {
		super(pseudo, mail, mdp);
		// TODO Auto-generated constructor stub
	}
	
	
	public Utilisateur(Long id, int version, String pseudo, String mail, String mdp, Hero hero, Inventaire inventaire, Arme arme, Armure armure, Histoire histoire, double vie,
			double attaque, double defense, double agilite, double vitesse, double vieMax, double attaqueMax,
			double defenseMax, double agiliteMax, double vitesseMax, int cptEmpoisonnement, int cptEtourdissement,
			int cptSaignement, int cptBrulure, int cptCombat, int cptCombatGagne, int cptMonstreVaincu, int exp) {
		super(id, version, pseudo, mail, mdp);
		this.hero = hero;
		this.inventaire = inventaire;
		this.arme = arme;
		this.armure = armure;
		this.histoire = histoire;
		this.vie = vie;
		this.attaque = attaque;
		this.defense = defense;
		this.agilite = agilite;
		this.vitesse = vitesse;
		this.vieMax = vieMax;
		this.attaqueMax = attaqueMax;
		this.defenseMax = defenseMax;
		this.agiliteMax = agiliteMax;
		this.vitesseMax = vitesseMax;
		this.cptEmpoisonnement = cptEmpoisonnement;
		this.cptEtourdissement = cptEtourdissement;
		this.cptSaignement = cptSaignement;
		this.cptBrulure = cptBrulure;
		this.cptCombat = cptCombat;
		this.cptCombatGagne = cptCombatGagne;
		this.cptMonstreVaincu = cptMonstreVaincu;
		this.exp = exp;
	}
	
	
	public Utilisateur(Hero hero, Inventaire inventaire, Arme arme, Armure armure, Histoire histoire, double vie,
			double attaque, double defense, double agilite, double vitesse, double vieMax, double attaqueMax,
			double defenseMax, double agiliteMax, double vitesseMax, int cptEmpoisonnement, int cptEtourdissement,
			int cptSaignement, int cptBrulure, int cptCombat, int cptCombatGagne, int cptMonstreVaincu, int exp) {
		this.hero = hero;
		this.inventaire = inventaire;
		this.arme = arme;
		this.armure = armure;
		this.histoire = histoire;
		this.vie = vie;
		this.attaque = attaque;
		this.defense = defense;
		this.agilite = agilite;
		this.vitesse = vitesse;
		this.vieMax = vieMax;
		this.attaqueMax = attaqueMax;
		this.defenseMax = defenseMax;
		this.agiliteMax = agiliteMax;
		this.vitesseMax = vitesseMax;
		this.cptEmpoisonnement = cptEmpoisonnement;
		this.cptEtourdissement = cptEtourdissement;
		this.cptSaignement = cptSaignement;
		this.cptBrulure = cptBrulure;
		this.cptCombat = cptCombat;
		this.cptCombatGagne = cptCombatGagne;
		this.cptMonstreVaincu = cptMonstreVaincu;
		this.exp = exp;
	}
	public Hero getHero() {
		return hero;
	}
	public void setHero(Hero hero) {
		this.hero = hero;
	}
	public Inventaire getInventaire() {
		return inventaire;
	}
	public void setInventaire(Inventaire inventaire) {
		this.inventaire = inventaire;
	}
	public Arme getArme() {
		return arme;
	}
	public void setArme(Arme arme) {
		this.arme = arme;
	}
	public Armure getArmure() {
		return armure;
	}
	public void setArmure(Armure armure) {
		this.armure = armure;
	}
	public Histoire getHistoire() {
		return histoire;
	}
	public void setHistoire(Histoire histoire) {
		this.histoire = histoire;
	}
	public double getVie() {
		return vie;
	}
	public void setVie(double vie) {
		this.vie = vie;
	}
	public double getAttaque() {
		return attaque;
	}
	public void setAttaque(double attaque) {
		this.attaque = attaque;
	}
	public double getDefense() {
		return defense;
	}
	public void setDefense(double defense) {
		this.defense = defense;
	}
	public double getPrecision() {
		return agilite;
	}
	public void setPrecision(double agilite) {
		this.agilite = agilite;
	}
	public double getVitesse() {
		return vitesse;
	}
	public void setVitesse(double vitesse) {
		this.vitesse = vitesse;
	}
	public double getVieMax() {
		return vieMax;
	}
	public void setVieMax(double vieMax) {
		this.vieMax = vieMax;
	}
	public double getAttaqueMax() {
		return attaqueMax;
	}
	public void setAttaqueMax(double attaqueMax) {
		this.attaqueMax = attaqueMax;
	}
	public double getDefenseMax() {
		return defenseMax;
	}
	public void setDefenseMax(double defenseMax) {
		this.defenseMax = defenseMax;
	}
	public double getPrecisionMax() {
		return agiliteMax;
	}
	public void setPrecisionMax(double agiliteMax) {
		this.agiliteMax = agiliteMax;
	}
	public double getVitesseMax() {
		return vitesseMax;
	}
	public void setVitesseMax(double vitesseMax) {
		this.vitesseMax = vitesseMax;
	}
	public int getCptEmpoisonnement() {
		return cptEmpoisonnement;
	}
	public void setCptEmpoisonnement(int cptEmpoisonnement) {
		this.cptEmpoisonnement = cptEmpoisonnement;
	}
	public int getCptEtourdissement() {
		return cptEtourdissement;
	}
	public void setCptEtourdissement(int cptEtourdissement) {
		this.cptEtourdissement = cptEtourdissement;
	}
	public int getCptSaignement() {
		return cptSaignement;
	}
	public void setCptSaignement(int cptSaignement) {
		this.cptSaignement = cptSaignement;
	}
	public int getCptBrulure() {
		return cptBrulure;
	}
	public void setCptBrulure(int cptBrulure) {
		this.cptBrulure = cptBrulure;
	}
	public int getCptCombat() {
		return cptCombat;
	}
	public void setCptCombat(int cptCombat) {
		this.cptCombat = cptCombat;
	}
	public int getCptCombatGagne() {
		return cptCombatGagne;
	}
	public void setCptCombatGagne(int cptCombatGagne) {
		this.cptCombatGagne = cptCombatGagne;
	}
	public int getCptMonstreVaincu() {
		return cptMonstreVaincu;
	}
	public void setCptMonstreVaincu(int cptMonstreVaincu) {
		this.cptMonstreVaincu = cptMonstreVaincu;
	}
	public int getExp() {
		return exp;
	}
	public void setExp(int exp) {
		this.exp = exp;
	}
	@Override
	public String toString() {
		return "Utilisateur [hero=" + hero + ", inventaire=" + inventaire + ", arme=" + arme + ", armure=" + armure
				+ ", histoire=" + histoire + ", vie=" + vie + ", attaque=" + attaque + ", defense=" + defense
				+ ", agilite=" + agilite + ", vitesse=" + vitesse + ", vieMax=" + vieMax + ", attaqueMax="
				+ attaqueMax + ", defenseMax=" + defenseMax + ", agiliteMax=" + agiliteMax + ", vitesseMax="
				+ vitesseMax + ", cptEmpoisonnement=" + cptEmpoisonnement + ", cptEtourdissement=" + cptEtourdissement
				+ ", cptSaignement=" + cptSaignement + ", cptBrulure=" + cptBrulure + ", cptCombat=" + cptCombat
				+ ", cptCombatGagne=" + cptCombatGagne + ", cptMonstreVaincu=" + cptMonstreVaincu + ", exp=" + exp
				+ "]";
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////// METHOD Pour le jeu ////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	public static int saisieInt(String msg) 
	{
		Scanner sc=new Scanner(System.in);
		System.out.println(msg);
		return sc.nextInt();
	}
	
	
	/*
	 * Objectif : Retablir l'ensemble des attributs aux valeurs maximums
	 * Parametre : 
	 * 
	 */
	
	public void reposTotal()
	{
		if(this.vie != this.vieMax) {
			this.vie = this.vieMax;
		}
		
		if(this.attaque != this.attaqueMax) {
			this.attaque = this.attaqueMax;
		}
		
		if(this.defense != this.defenseMax) {
			this.defense = this.defenseMax;
		}
		
		if(this.agilite != this.agiliteMax) {
			this.agilite = this.agiliteMax;
		}
		
		if(this.vitesse != this.vitesseMax) {
			this.vitesse = this.vitesseMax;
		}
		
		if(this.cptEmpoisonnement != 0) {
			this.cptEmpoisonnement = 0;
		}
		
		if(this.cptEtourdissement != 0) {
			this.cptEtourdissement = 0;
		}
		
		if(this.cptSaignement != 0) {
			this.cptSaignement = 0;
		}
		
		if(this.cptBrulure != 0) {
			this.cptBrulure = 0;
		}

	}
	
	/*
	 * Objectif : Menu permettand de choisir quels attributs restaurer
	 * Parametre : 
	 * 
	 */
	public void seReposer() {
		System.out.println("Vous comptez vous reposer!");
		System.out.println("1 - Se reposer totalement (retablir tous ses attributs aux maximums)");
		System.out.println("2 - Se reposer partiellement (uniquement la vie)");
		int choix = saisieInt("");
		switch(choix) {
		case 1:	reposTotal();
			break;
		case 2 : 
			if(this.vie != this.vieMax) {
				this.vie=this.vieMax;
			}else {
				System.out.println("Votre vie est déjà aux maximum.");
			}
			break;
		}
	}
	
	public void utiliserPotion(Potion p){
		switch(p.getType().toString()) {
		case "Soigner":
			this.vie = this.vie+p.getValeur();
			if(this.vie>this.vieMax) {
				this.vie=this.vieMax;
			}
			break;
		case "AttaquePlus" : 
			this.attaque = this.attaque+p.getValeur();
			if(this.attaque>this.attaqueMax) {
				this.attaque=this.attaqueMax;
			}
			break;
		case "VitessePlus":
			this.vitesse = this.vitesse+p.getValeur();
			if(this.vitesse>this.vitesseMax) {
				this.vitesse=this.vitesseMax;
			}
			break;
		case "DefensePlus" : 
			this.defense = this.defense+p.getValeur();
			if(this.defense>this.defenseMax) {
				this.defense=this.defenseMax;
			}
			break;
		case "AgilitePlus":
			this.agilite = this.agilite+p.getValeur();
			if(this.agilite>this.agiliteMax) {
				this.agilite=this.agiliteMax;
			}
			break;
			
		case "PoisonMoins" : 
			this.cptEmpoisonnement = (int) (this.cptEmpoisonnement-p.getValeur());
			if(this.cptEmpoisonnement<0) {
				this.cptEmpoisonnement=0;
			} 
			break;
		case "SaignerMoins":
			this.cptSaignement = (int) (this.cptSaignement-p.getValeur());
			if(this.cptSaignement<0) {
				this.cptSaignement=0;
			} 
			break;
		case "BrulureMoins" : 
			this.cptBrulure = (int) (this.cptBrulure-p.getValeur());
			if(this.cptBrulure<0) {
				this.cptBrulure=0;
			} 
			break;
		case "EtourdissementMoins" : 
			this.cptEtourdissement = (int) (this.cptEtourdissement-p.getValeur());
			if(this.cptEtourdissement<0) {
				this.cptEtourdissement=0;
			} 
			break;
		}
	}
	
	
	public void attaquer(Monstre m) {
		Random rand = new Random();
		double att;
		double coef;
		double scale = Math.pow(10, 0);
		double vieMonstre = m.getVie();
		
		int jetDe = rand.nextInt(6); // jet de dé entre 0 et 6-1
		if(jetDe <2) {
			att = (this.attaque)+ this.getArme().getAttaque();
	        att = Math.round(att*scale)/scale;
		}else if(jetDe>=4) {
			coef = this.getHero().getCoefPrecision()*this.getPrecision();
			if(coef>(this.getHero().getCoefAttaque()*this.attaque)) {
				coef = (this.getHero().getCoefAttaque()*this.attaque) / coef;
			}else {
				coef = coef/(this.getHero().getCoefAttaque()*this.attaque);
			}
			att = ((this.getHero().getCoefAttaque()*this.attaque)+ this.getArme().getAttaque() )*(1+coef);
	        att = Math.round(att*scale)/scale;
	       
		}else {			
			att = (this.getHero().getCoefAttaque()*this.attaque)+ this.getArme().getAttaque();
	        att = Math.round(att*scale)/scale;		
		}
		
		double def = m.defendre();
		vieMonstre = vieMonstre+def -att;
		vieMonstre=vieMonstre-def;
		if(vieMonstre<0) {
			m.setVie(0);
		}else {
			m.setVie(vieMonstre);
		}
	}
	
	public double defendre() {
		double def=0;
		Random rand = new Random();
		double scale = Math.pow(10, 0);
		double coef;
		int jetDe = rand.nextInt(6); // jet de dé entre 0 et 6-1
		if(jetDe<2) {
			def = this.defense+this.getArmure().getDefense();
			def = Math.round(def*scale)/scale;
		}else if(jetDe>=4) {
			coef = this.getHero().getCoefVitesse()*this.getVitesse();
			if(coef>(this.getHero().getCoefDefense()*this.defense)) {
				coef = (this.getHero().getCoefDefense()*this.defense) / coef;
			}else {
				coef = coef/(this.getHero().getCoefDefense()*this.defense);
			}
			def = ((this.getHero().getCoefDefense()*this.defense)+ this.getArmure().getDefense() )*(1+coef);
			def = Math.round(def*scale)/scale;

		}else {
			coef = this.vitesse/this.getArmure().getVitesse();
			coef = Math.round(coef*scale)/scale; // si coef <1 ==> armure trop lourde et vitesse reduite
			def = ((this.getHero().getCoefDefense()*this.defense)+this.getArmure().getDefense()) * coef;
			def = Math.round(def*scale)/scale;
		}
		return def;
	}
	
	public void fuir() {
		System.out.println("Vous voulez fuir");
		System.out.println("1 - Oui");
		System.out.println("2 - Non");
		int choix = saisieInt("");
		if(choix==1) {
			System.out.println("Vous allez perdre votre arme et armure portées lors du combat et de l'or");
			this.setArmure(null);
			this.setArme(null);
			//Lors de l'appel de la methode, utiliser le repository inventaire et la fonction findQteObjetForUserPseudo afin d'enlever l'or
		}
	}
	
}
