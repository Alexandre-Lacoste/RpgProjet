package spring.boot.tptRpg.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "Personnage")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
public abstract class Personnage  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	private int version;
	@JsonView(Views.ViewCommon.class)
	@Column(name = "nom", length = 20)
	private String nom;
	@OneToMany(mappedBy = "personnage")
	@JsonIgnore
	private List<Equipe> equipes = new ArrayList<Equipe>();
	
	public Personnage() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Personnage(Long id, int version, String nom, List<Equipe> equipes) {
		this.id = id;
		this.version = version;
		this.nom = nom;
		this.equipes = equipes;
	}
	
	public Personnage(int version, String nom, List<Equipe> equipes) {
		this.version = version;
		this.nom = nom;
		this.equipes = equipes;
	}
	
	public Personnage(String nom, List<Equipe> equipes) {
		this.nom = nom;
		this.equipes = equipes;
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

	public List<Equipe> getEquipes() {
		return equipes;
	}

	public void setEquipes(List<Equipe> equipes) {
		this.equipes = equipes;
	}

	@Override
	public String toString() {
		return "Personnage [id=" + id + ", version=" + version + ", nom=" + nom + ", equipes=" + equipes + "]";
	}
	
	
	
}
