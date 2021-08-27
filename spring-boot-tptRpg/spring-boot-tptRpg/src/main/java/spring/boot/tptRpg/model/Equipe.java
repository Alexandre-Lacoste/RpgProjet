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

@Entity
@Table(name="Equipe")
public class Equipe {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Version
	private int version;
	@Column(name = "Nom")
	private String nom;
	@ManyToOne
	@JoinColumn(name = "Personnage")
	private Personnage personnage;
	
	public Equipe() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Equipe(Long id, int version, String nom, Personnage personnage) {
		this.id = id;
		this.version = version;
		this.nom = nom;
		this.personnage = personnage;
	}
	
	public Equipe(int version, String nom, Personnage personnage) {
		this.version = version;
		this.nom = nom;
		this.personnage = personnage;
	}
	
	public Equipe(String nom, Personnage personnage) {
		this.nom = nom;
		this.personnage = personnage;
	}
	@Override
	public String toString() {
		return "Equipe [id=" + id + ", version=" + version + ", nom=" + nom + ", personnage=" + personnage + "]";
	}
	

	
	
}
