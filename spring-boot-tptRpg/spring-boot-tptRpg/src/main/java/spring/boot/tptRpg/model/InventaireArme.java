package spring.boot.tptRpg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="InventaireArme")
public class InventaireArme {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column(name="quantite")
	@JsonView(Views.ViewCommon.class)
	private double quantite;
	@ManyToOne
	@JoinColumn(name="arme_id")
	@JsonView({Views.ViewUtilisateur.class,Views.ViewInventaireArme.class})
	private Arme arme;
	@ManyToOne
	@JoinColumn(name="inventaire_id")
	@JsonView({Views.ViewUtilisateur.class,Views.ViewInventaireArme.class})
	private Inventaire inventaire;
	
	public InventaireArme(Long id, int version, double quantite, Arme arme, Inventaire inventaire) {
		super();
		this.id = id;
		this.version = version;
		this.quantite = quantite;
		this.arme = arme;
		this.inventaire = inventaire;
	}

	public InventaireArme() {
		super();
	}

	public InventaireArme( double quantite, Arme arme, Inventaire inventaire) {
		super();
		this.quantite = quantite;
		this.arme = arme;
		this.inventaire = inventaire;
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

	public double getQuantite() {
		return quantite;
	}

	public void setQuantite(double quantite) {
		this.quantite = quantite;
	}

	public Arme getArme() {
		return arme;
	}

	public void setArme(Arme arme) {
		this.arme = arme;
	}

	public Inventaire getInventaire() {
		return inventaire;
	}

	public void setInventaire(Inventaire inventaire) {
		this.inventaire = inventaire;
	}

	@Override
	public String toString() {
		return "InventaireArme [id=" + id + ", version=" + version + ", quantite=" + quantite + ", arme=" + arme
				+ ", inventaire=" + inventaire + "]";
	}
	
	
	
	
	

}
