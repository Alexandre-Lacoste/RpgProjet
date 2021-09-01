package spring.boot.tptRpg.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("hero")

public class Hero extends Personnage{
	@Enumerated(EnumType.STRING)
	@Column(name="TypePersonnage")
	@JsonView(Views.ViewCommon.class)
	private TypePersonnage typePersonnage;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewHeroDetail.class,Views.ViewUtilisateurDetail.class})
	private double coefAttaque;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewHeroDetail.class,Views.ViewUtilisateurDetail.class})
	private double coefDefense;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewHeroDetail.class,Views.ViewUtilisateurDetail.class})
	private double coefVie;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewHeroDetail.class,Views.ViewUtilisateurDetail.class})
	private double coefPrecision;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewHeroDetail.class,Views.ViewUtilisateurDetail.class})
	private double coefVitesse;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewUtilisateurDetail.class})
	private double attaque;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewUtilisateurDetail.class})
	private double defense;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewUtilisateurDetail.class})
	private double vie;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewUtilisateurDetail.class})
	private double agilite;
	@Column()
	@JsonView({Views.ViewHero.class,Views.ViewUtilisateurDetail.class})
	private double vitesse;
	
	@OneToMany(mappedBy = "hero")
	@JsonIgnore
	private List<Utilisateur> utilisateurs = new ArrayList<Utilisateur>();
	
	public Hero() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Hero(Long id, int version, String nom, List<Equipe> equipes) {
		super(id, version, nom, equipes);
		// TODO Auto-generated constructor stub
	}
	public Hero(String nom, List<Equipe> equipes) {
		super(nom, equipes);
		// TODO Auto-generated constructor stub
	}

	public Hero(Long id, int version, String nom, List<Equipe> equipes, TypePersonnage typePersonnage, double coefAttaque, double coefDefense, double coefVie,
			double coefPrecision, double coefVitesse, double attaque, double defense, double vie, double agilite,
			double vitesse, Utilisateur utilisateur) {
		super(id, version, nom, equipes);
		this.typePersonnage = typePersonnage;
		this.coefAttaque = coefAttaque;
		this.coefDefense = coefDefense;
		this.coefVie = coefVie;
		this.coefPrecision = coefPrecision;
		this.coefVitesse = coefVitesse;
		this.attaque = attaque;
		this.defense = defense;
		this.vie = vie;
		this.agilite = agilite;
		this.vitesse = vitesse;
	
	}


	public Hero(TypePersonnage typePersonnage, double coefAttaque, double coefDefense, double coefVie,
			double coefPrecision, double coefVitesse, double attaque, double defense, double vie, double agilite,
			double vitesse, List<Utilisateur> utilisateurs) {
		this.typePersonnage = typePersonnage;
		this.coefAttaque = coefAttaque;
		this.coefDefense = coefDefense;
		this.coefVie = coefVie;
		this.coefPrecision = coefPrecision;
		this.coefVitesse = coefVitesse;
		this.attaque = attaque;
		this.defense = defense;
		this.vie = vie;
		this.agilite = agilite;
		this.vitesse = vitesse;
	
	}

	public Hero(TypePersonnage typePersonnage, double coefAttaque, double coefDefense, double coefVie,
			double coefPrecision, double coefVitesse, double attaque, double defense, double vie, double agilite,
			double vitesse) {
		this.typePersonnage = typePersonnage;
		this.coefAttaque = coefAttaque;
		this.coefDefense = coefDefense;
		this.coefVie = coefVie;
		this.coefPrecision = coefPrecision;
		this.coefVitesse = coefVitesse;
		this.attaque = attaque;
		this.defense = defense;
		this.vie = vie;
		this.agilite = agilite;
		this.vitesse = vitesse;
	
	}



	public TypePersonnage getTypePersonnage() {
		return typePersonnage;
	}

	public void setTypePersonnage(TypePersonnage typePersonnage) {
		this.typePersonnage = typePersonnage;
	}

	public double getCoefAttaque() {
		return coefAttaque;
	}

	public void setCoefAttaque(double coefAttaque) {
		this.coefAttaque = coefAttaque;
	}

	public double getCoefDefense() {
		return coefDefense;
	}

	public void setCoefDefense(double coefDefense) {
		this.coefDefense = coefDefense;
	}

	public double getCoefVie() {
		return coefVie;
	}

	public void setCoefVie(double coefVie) {
		this.coefVie = coefVie;
	}

	public double getCoefPrecision() {
		return coefPrecision;
	}

	public void setCoefPrecision(double coefPrecision) {
		this.coefPrecision = coefPrecision;
	}

	public double getCoefVitesse() {
		return coefVitesse;
	}

	public void setCoefVitesse(double coefVitesse) {
		this.coefVitesse = coefVitesse;
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
	
	


	@Override
	public String toString() {
		return "Hero [typePersonnage=" + typePersonnage + ", coefAttaque=" + coefAttaque + ", coefDefense="
				+ coefDefense + ", coefVie=" + coefVie + ", coefPrecision=" + coefPrecision + ", coefVitesse="
				+ coefVitesse + ", attaque=" + attaque + ", defense=" + defense + ", vie=" + vie + ", agilite="
				+ agilite + ", vitesse=" + vitesse +  "]";
	}
	
	
}
