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
@Table(name="MarchandArme")
public class MarchandArme {
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
	
	//@Transient
	@ManyToOne
	@JoinColumn(name="arme_id")
	@JsonView({Views.ViewArmeDetail.class,Views.ViewMarchandArme.class})
	private Arme arme;
	//@Transient
	@ManyToOne
	@JoinColumn(name="marchand_id")
	@JsonView({Views.ViewArmeDetail.class,Views.ViewMarchandArme.class})
	private Marchand marchand;
	
	public MarchandArme(Long id, int version, double quantite, Arme arme, Marchand marchand) {
		super();
		this.id = id;
		this.version = version;
		this.quantite = quantite;
		this.arme = arme;
		this.marchand = marchand;
	}
	
	public MarchandArme() {
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
	public Arme getArme() {
		return arme;
	}
	public void setArme(Arme arme) {
		this.arme = arme;
	}
	public Marchand getMarchand() {
		return marchand;
	}
	public void setMarchand(Marchand marchand) {
		this.marchand = marchand;
	}
	@Override
	public String toString() {
		return "MarchandArme [id=" + id + ", version=" + version + ", quantite=" + quantite + ", arme=" + arme
				+ ", marchand=" + marchand + "]";
	}
	
	
	

}
