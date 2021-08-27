package spring.boot.tptRpg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Objet")
public class Objet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String nom;
	@Column
	private String description;
	@Column
	private double qte;
	@OneToOne(mappedBy = "objet")
	private Inventaire inventaire;
	
	
	public Objet() {
		super();
	}

	public Objet(Long id, String nom, String description, int qte, Inventaire inventaire) {
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.qte = qte;
		this.inventaire = inventaire;
	}

	public Objet( String nom,int qte) {
		this.nom = nom;
		this.qte = qte;
		}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getQte() {
		return qte;
	}

	public void setQte(double qte) {
		this.qte = qte;
	}

	public Inventaire getInventaire() {
		return inventaire;
	}

	public void setInventaire(Inventaire inventaire) {
		this.inventaire = inventaire;
	}

	@Override
	public String toString() {
		return "Objet [id=" + id + ", nom=" + nom + ", description=" + description + ", qte=" + qte + ", inventaire="
				+ inventaire + "]";
	}


	
	
	
}
