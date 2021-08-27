package spring.boot.tptRpg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;


@Entity
@Table(name="InventaireArmure")
public class InventaireArmure {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Column
	@JsonView(Views.ViewCommon.class)
	private double qte;
	
	@ManyToOne
	@JoinColumn(name="armure_id")
	@JsonView(Views.ViewUtilisateur.class)
	private Armure armure;
	
	@ManyToOne
	@JoinColumn(name="inventaire_id")
	@JsonIgnore
	private Inventaire inventaire;
	
	
	public InventaireArmure() {
		super();
	}





	public InventaireArmure(Long id, double qte, Armure armure, Inventaire inventaire) {
		this.id = id;
		this.qte = qte;
		this.armure = armure;
		this.inventaire = inventaire;
	}
	
	public InventaireArmure( double qte, Armure armure, Inventaire inventaire) {
		this.qte = qte;
		this.armure = armure;
		this.inventaire = inventaire;
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


	public Armure getArmure() {
		return armure;
	}


	public void setArmure(Armure armure) {
		this.armure = armure;

	}

	public Inventaire getInventaire() {
		return inventaire;
	}


	public void setInventaire(Inventaire inventaire) {
		this.inventaire = inventaire;
	}






	@Override
	public String toString() {
		return "InventaireArmure [id=" + id + ", qte=" + qte + ", armure=" + armure + ", inventaire=" + inventaire
				+ "]";
	}




	
	
	
}
