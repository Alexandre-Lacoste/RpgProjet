package spring.boot.tptRpg.model;

import java.util.List;
import java.util.Random;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("monstre")
public class Monstre extends Personnage {
	@Enumerated(EnumType.STRING)
	@Column(name="TypeMonstre")
	@JsonView(Views.ViewCommon.class)
	private TypeMonstre typeMonstre;
	@Column()
	@JsonView(Views.ViewMonstre.class)
	private double attaque;
	@Column()
	@JsonView(Views.ViewMonstre.class)
	private double defense;
	@Column()
	@JsonView(Views.ViewMonstre.class)
	private double vie;
	@Column()
	@JsonView(Views.ViewMonstre.class)
	private double agilite;
	@Column()
	@JsonView(Views.ViewMonstre.class)
	private double vitesse;
	@Column()
	@JsonView(Views.ViewMonstreDetail.class)
	private int gold;
	@Column()
	@JsonView(Views.ViewMonstreDetail.class)
	private int exp;
	@ManyToOne
	@JoinColumn(name="arme_id")
	@JsonView(Views.ViewMonstreDetail.class)
	private Arme arme;
	@ManyToOne
	@JoinColumn(name="armure_id")
	@JsonView(Views.ViewMonstreDetail.class)
	private Armure armure;
	
	
	public Monstre() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Monstre(Long id, int version, String nom, List<Equipe> equipes) {
		super(id, version, nom, equipes);
		// TODO Auto-generated constructor stub
	}
	public Monstre(String nom, List<Equipe> equipes) {
		super(nom, equipes);
		// TODO Auto-generated constructor stub
	}
	
	public Monstre(TypeMonstre typeMonstre, double attaque, double defense, double vie, double agilite,
			double vitesse, int gold, int exp, Arme arme, Armure armure) {
		this.typeMonstre = typeMonstre;
		this.attaque = attaque;
		this.defense = defense;
		this.vie = vie;
		this.agilite = agilite;
		this.vitesse = vitesse;
		this.gold = gold;
		this.exp = exp;
		this.arme = arme;
		this.armure = armure;
	}
	
	public Monstre(Long id, int version, String nom, List<Equipe> equipes, TypeMonstre typeMonstre, double attaque, double defense, double vie, double agilite,
			double vitesse, int gold, int exp, Arme arme, Armure armure) {
		super(id, version, nom, equipes);
		this.typeMonstre = typeMonstre;
		this.attaque = attaque;
		this.defense = defense;
		this.vie = vie;
		this.agilite = agilite;
		this.vitesse = vitesse;
		this.gold = gold;
		this.exp = exp;
		this.arme = arme;
		this.armure = armure;
	}


	public TypeMonstre getTypeMonstre() {
		return typeMonstre;
	}


	public void setTypeMonstre(TypeMonstre typeMonstre) {
		this.typeMonstre = typeMonstre;
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


	public double getVie() {
		return vie;
	}


	public void setVie(double vie) {
		this.vie = vie;
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


	public int getGold() {
		return gold;
	}


	public void setGold(int gold) {
		this.gold = gold;
	}


	public int getExp() {
		return exp;
	}


	public void setExp(int exp) {
		this.exp = exp;
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


	@Override
	public String toString() {
		return "Monstre [typeMonstre=" + typeMonstre + ", attaque=" + attaque + ", defense=" + defense + ", vie=" + vie
				+ ", agilite=" + agilite + ", vitesse=" + vitesse + ", gold=" + gold + ", exp=" + exp + ", arme="
				+ arme + ", armure=" + armure + "]";
	}
	
	public double defendre() {
		double def=0;
		Random rand = new Random();
		double scale = Math.pow(10, 0);
		double coef;
		int jetDe = rand.nextInt(6); // jet de dé entre 0 et 6-1
		if(jetDe <3) {
			def = this.defense+this.getArmure().getDefense();
		}else {		
			coef = this.vitesse/this.getArmure().getVitesse();
			coef = Math.round(coef*scale)/scale;
			def = this.defense+this.getArmure().getDefense() * coef;
		}
		return def;
	}
	
	public void attaquer(Utilisateur u) {
		Random rand = new Random();
		double att;
		double coef;
		double scale = Math.pow(10, 0);
		double vieUtilisateur = u.getVie();
		
		int jetDe = rand.nextInt(6);
		if(jetDe<3) {
			att = this.attaque+this.getArme().getAttaque();
			double def = u.defendre();
			vieUtilisateur = vieUtilisateur+def-att;
			vieUtilisateur = vieUtilisateur-def;
			if(vieUtilisateur<0) {
				u.setVie(0);
			}else {
				u.setVie(vieUtilisateur);
			}
		}else {
			coef = this.agilite/this.getArme().getAgilite();
			coef = Math.round(coef*scale)/scale;
			att = this.attaque+this.getArme().getAttaque()*coef;
			double def = u.defendre();
			vieUtilisateur = vieUtilisateur+def-att;
			vieUtilisateur = vieUtilisateur-def;
			if(vieUtilisateur<0) {
				u.setVie(0);
			}else {
				u.setVie(vieUtilisateur);

			}
			
		}
	}
	
	
	
}
