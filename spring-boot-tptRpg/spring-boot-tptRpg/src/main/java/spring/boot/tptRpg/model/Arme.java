package spring.boot.tptRpg.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="Arme")
public class Arme{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView({Views.ViewArmeDetail.class,Views.ViewUtilisateurDetail.class,Views.ViewMonstreDetail.class})
	private Long id;
	@Version
	@JsonView({Views.ViewArmeDetail.class,Views.ViewUtilisateurDetail.class,Views.ViewUtilisateur.class,Views.ViewMonstreDetail.class})
	private int version;
	@Column(name="nom")
	@JsonView(Views.ViewCommon.class)
	private String nom;
	@Column(name="typeArme")
	@Enumerated(EnumType.STRING)
	@JsonView(Views.ViewCommon.class)
	private TypeArme typearme;
	@Column(name="description")
	@Lob
	@JsonView(Views.ViewCommon.class)
	private String description;
	@Column(name="attaque")
	@JsonView({Views.ViewArme.class,Views.ViewUtilisateurDetail.class,Views.ViewMonstreDetail.class,Views.ViewUtilisateur.class})
	private double attaque;
	@Column(name="agilite")
	@JsonView({Views.ViewArme.class,Views.ViewUtilisateurDetail.class,Views.ViewMonstreDetail.class,Views.ViewUtilisateur.class})
	private double agilite;
	@Column(name="prixAchat")
	@JsonView({Views.ViewArmeDetail.class,Views.ViewUtilisateurDetail.class,Views.ViewUtilisateur.class})
	private double prixAchat;
	@Column(name="prixVente")
	@JsonView({Views.ViewArmeDetail.class,Views.ViewMonstreDetail.class,Views.ViewUtilisateurDetail.class,Views.ViewUtilisateur.class})
	private double prixVente;
	
	@OneToMany(mappedBy = "arme")
	@JsonIgnore
	private List<MarchandArme> marchandArmes = new ArrayList<MarchandArme>();
	
	@OneToMany(mappedBy = "arme")
	@JsonIgnore
	private List<InventaireArme> inventaireArme = new ArrayList<InventaireArme>();
	
	

	public Arme(Long id, int version, String nom, TypeArme typeArme, String description, double attaque, double agilite,
			double prixAchat, double prixVente, List<MarchandArme> marchandArmes, List<InventaireArme> inventaireArme) {
		super();
		this.id = id;
		this.version = version;
		this.nom = nom;
		this.typearme = typeArme;
		this.description = description;
		this.attaque = attaque;
		this.agilite = agilite;
		this.prixAchat = prixAchat;
		this.prixVente = prixVente;
		this.marchandArmes = marchandArmes;
		this.inventaireArme = inventaireArme;
	}


	

	public Arme(String nom, TypeArme typeArme, String description, double attaque, double agilite, double prixAchat,
			double prixVente) {
		super();
		this.nom = nom;
		this.typearme = typeArme;
		this.description = description;
		this.attaque = attaque;
		this.agilite = agilite;
		this.prixAchat = prixAchat;
		this.prixVente = prixVente;
	}




	public Arme() {
		super();
	}
	
	



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public TypeArme getTypeArme() {
		return typearme;
	}

	public void setTypeArme(TypeArme typeArme) {
		this.typearme = typeArme;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getAttaque() {
		return attaque;
	}

	public void setAttaque(double attaque) {
		this.attaque = attaque;
	}

	public double getAgilite() {
		return agilite;
	}

	public void setAgilite(double agilite) {
		this.agilite = agilite;
	}

	public double getPrixAchat() {
		return prixAchat;
	}

	public void setPrixAchat(double prixAchat) {
		this.prixAchat = prixAchat;
	}

	public double getPrixVente() {
		return prixVente;
	}

	public void setPrixVente(double prixVente) {
		this.prixVente = prixVente;
	}

	public List<MarchandArme> getMarchandArmes() {
		return marchandArmes;
	}

	public void setMarchandArmes(List<MarchandArme> marchandArmes) {
		this.marchandArmes = marchandArmes;
	}

	public List<InventaireArme> getInventaireArme() {
		return inventaireArme;
	}

	public void setInventaireArme(List<InventaireArme> inventaireArme) {
		this.inventaireArme = inventaireArme;
	}

	@Override
	public String toString() {
		return "Arme [id=" + id + ", version=" + version + ", nom=" + nom + ", typeArme=" + typearme + ", description="
				+ description + ", attaque=" + attaque + ", agilite=" + agilite + ", prixAchat=" + prixAchat
				+ ", prixVente=" + prixVente+"]";
	}

	


	
	
	
}