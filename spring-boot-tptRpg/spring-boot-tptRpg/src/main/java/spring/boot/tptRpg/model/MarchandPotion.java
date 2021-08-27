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

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="MarchandPotion")
public class MarchandPotion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column(name="quatite")
	@JsonView(Views.ViewCommon.class)
	private double quantite;
	
	@ManyToOne
	@JoinColumn(name="potion_id")
	@JsonView(Views.ViewMarchandPotion.class)
	private Potion potion;
	@ManyToOne
	@JoinColumn(name="marchand_id")
	@JsonView(Views.ViewMarchandPotion.class)
	private Marchand marchand;
	
	public MarchandPotion(Long id, int version, double quantite, Potion potion, Marchand marchand) {
		super();
		this.id = id;
		this.version = version;
		this.quantite = quantite;
		this.potion = potion;
		this.marchand = marchand;
	}

	public MarchandPotion() {
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

	public double getQuantite() {
		return quantite;
	}

	public void setQuantite(double quantite) {
		this.quantite = quantite;
	}

	public Potion getPotion() {
		return potion;
	}

	public void setPotion(Potion potion) {
		this.potion = potion;
	}

	public Marchand getMarchand() {
		return marchand;
	}

	public void setMarchand(Marchand marchand) {
		this.marchand = marchand;
	}

	@Override
	public String toString() {
		return "MarchandPotion [id=" + id + ", version=" + version + ", quantite=" + quantite + ", potion=" + potion
				+ ", marchand=" + marchand + "]";
	}
	
	
	
	

}
