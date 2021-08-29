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
@Table(name = "InventairePotion")
public class InventairePotion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column
	@JsonView(Views.ViewCommon.class)
	private double qte;
	@ManyToOne
	@JoinColumn(name = "inventaire_id")
	@JsonIgnore
	private Inventaire inventaire;
	@ManyToOne
	@JoinColumn(name = "potion_id")
	@JsonView(Views.ViewUtilisateur.class)
	private Potion potion;
	
	
	public InventairePotion() {
		super();
	}

	
	public int getVersion() {
		return version;
	}


	public void setVersion(int version) {
		this.version = version;
	}


	public InventairePotion(Long id, double qte, Inventaire inventaire, Potion potion) {
		this.id = id;
		this.qte = qte;
		this.inventaire = inventaire;
		this.potion = potion;
	}
	
	public InventairePotion(double qte, Inventaire inventaire, Potion potion) {
		this.qte = qte;
		this.inventaire = inventaire;
		this.potion = potion;
	}


	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Potion getPotion() {
		return potion;
	}

	public void setPotion(Potion potion) {
		this.potion = potion;
	}

	@Override
	public String toString() {
		return "InventairePotion [id=" + id + ", qte=" + qte + ", inventaire=" + inventaire + ", potion=" + potion
				+ "]";
	}
	
	
	
}
