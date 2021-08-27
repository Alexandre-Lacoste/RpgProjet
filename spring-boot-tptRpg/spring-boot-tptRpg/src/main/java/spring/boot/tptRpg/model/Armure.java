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
@Table(name="Armure")
public class Armure {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView({Views.ViewArmureDetail.class,Views.ViewUtilisateurDetail.class,Views.ViewUtilisateur.class})
	private Long id;
	@Version
	@JsonView({Views.ViewArmureDetail.class,Views.ViewUtilisateurDetail.class,Views.ViewUtilisateur.class})
	private int version;
	@Column(name="nom")
	@JsonView(Views.ViewCommon.class)
	private String nom;
	
	@Column(name="typeArmure")
	@Enumerated(EnumType.STRING)
	@JsonView(Views.ViewCommon.class)
	private TypeArmure typearmure;
	
	@Column(name="description")
	@Lob
	@JsonView(Views.ViewCommon.class)
	private String description;
	
	@Column(name="defense")
	@JsonView({Views.ViewArmure.class,Views.ViewUtilisateurDetail.class,Views.ViewMonstreDetail.class,Views.ViewUtilisateur.class})
	private double defense;
	
	@Column(name="vitesse")
	@JsonView({Views.ViewArmure.class,Views.ViewUtilisateurDetail.class,Views.ViewMonstreDetail.class,Views.ViewUtilisateur.class})
	private double vitesse;
	
	@Column(name="prixVente")
	@JsonView({Views.ViewArmureDetail.class,Views.ViewMonstreDetail.class,Views.ViewUtilisateurDetail.class,Views.ViewUtilisateur.class})
	private double prixVente;
	@Column(name="prixAchat")
	@JsonView({Views.ViewArmureDetail.class,Views.ViewUtilisateurDetail.class,Views.ViewUtilisateur.class})
	private double prixAchat;
	
	@OneToMany(mappedBy = "armure")
	@JsonIgnore
	private List<MarchandArmure> marchandArmures = new ArrayList<MarchandArmure>();
	@OneToMany(mappedBy = "armure")
	@JsonIgnore
	private List<InventaireArmure> inventaireArmures = new ArrayList<InventaireArmure>();
	
	public Armure(Long id, int version, String nom, TypeArmure typearmure, String description, double defense,
			double vitesse, double prixVente, double prixAchat, List<MarchandArmure> marchandArmures,
			List<InventaireArmure> inventaireArmures) {
		super();
		this.id = id;
		this.version = version;
		this.nom = nom;
		this.typearmure = typearmure;
		this.description = description;
		this.defense = defense;
		this.vitesse = vitesse;
		this.prixVente = prixVente;
		this.prixAchat = prixAchat;
		this.marchandArmures = marchandArmures;
		this.inventaireArmures = inventaireArmures;
	}
	
	

	public Armure(String nom, TypeArmure typearmure, String description, double defense, double vitesse,
			double prixVente, double prixAchat) {
		super();
		this.nom = nom;
		this.typearmure = typearmure;
		this.description = description;
		this.defense = defense;
		this.vitesse = vitesse;
		this.prixVente = prixVente;
		this.prixAchat = prixAchat;
	}



	public Armure() {
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

	public TypeArmure getTypearmure() {
		return typearmure;
	}

	public void setTypearmure(TypeArmure typearmure) {
		this.typearmure = typearmure;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getDefense() {
		return defense;
	}

	public void setDefense(double defense) {
		this.defense = defense;
	}

	public double getVitesse() {
		return vitesse;
	}

	public void setVitesse(double vitesse) {
		this.vitesse = vitesse;
	}

	public double getPrixVente() {
		return prixVente;
	}

	public void setPrixVente(double prixVente) {
		this.prixVente = prixVente;
	}

	public double getPrixAchat() {
		return prixAchat;
	}

	public void setPrixAchat(double prixAchat) {
		this.prixAchat = prixAchat;
	}

	public List<MarchandArmure> getMarchandArmures() {
		return marchandArmures;
	}

	public void setMarchandArmures(List<MarchandArmure> marchandArmures) {
		this.marchandArmures = marchandArmures;
	}

	public List<InventaireArmure> getInventaireArmures() {
		return inventaireArmures;
	}

	public void setInventaireArmures(List<InventaireArmure> inventaireArmures) {
		this.inventaireArmures = inventaireArmures;
	}

	@Override
	public String toString() {
		return "Armure [id=" + id + ", version=" + version + ", nom=" + nom + ", typearmure=" + typearmure
				+ ", description=" + description + ", defense=" + defense + ", vitesse=" + vitesse + ", prixVente="
				+ prixVente + ", prixAchat=" + prixAchat + "]";
	}

	
	
	

	
	


	




}
