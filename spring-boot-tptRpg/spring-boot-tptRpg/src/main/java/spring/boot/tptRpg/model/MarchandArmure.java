package spring.boot.tptRpg.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="MarchandArmure")
public class MarchandArmure {
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
	@JoinColumn(name="armure_id")
	@JsonView(Views.ViewMarchandArmure.class)
	private Armure armure;
	
	@ManyToOne
	@JoinColumn(name="marchand_id")
	@JsonView(Views.ViewMarchandArmure.class)
	private Marchand marchand;
	
	public MarchandArmure() {
		super();
	}

	public MarchandArmure(Long id, int version, double quantite, Armure armure, Marchand marchand) {
		super();
		this.id = id;
		this.version = version;
		this.quantite = quantite;
		this.armure = armure;
		this.marchand = marchand;
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

	public Armure getArmure() {
		return armure;
	}

	public void setArmure(Armure armure) {
		this.armure = armure;
	}

	public Marchand getMarchand() {
		return marchand;
	}

	public void setMarchand(Marchand marchand) {
		this.marchand = marchand;
	}

	@Override
	public String toString() {
		return "MarchandArmure [id=" + id + ", version=" + version + ", quantite=" + quantite + ", armure=" + armure
				+ ", marchand=" + marchand + "]";
	}

	
	
}
