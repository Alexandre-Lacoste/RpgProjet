package spring.boot.tptRpg.model;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "Compte")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
public class Compte {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.Compte.class)
	private int version;
	@Column()
	@JsonView(Views.ViewCommon.class)
	private String pseudo;
	@Column()
	@JsonView(Views.ViewCommon.class)
	private String mail;
	@Column()
	@JsonView(Views.ViewCommon.class)
	private String mdp;
	
	public Compte() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Compte(Long id, int version, String pseudo, String mail, String mdp) {
		this.id = id;
		this.version = version;
		this.pseudo = pseudo;
		this.mail = mail;
		this.mdp = mdp;
	}
	
	public Compte(String pseudo, String mail, String mdp) {
		this.pseudo = pseudo;
		this.mail = mail;
		this.mdp = mdp;}

		
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
	public String getPseudo() {
		return pseudo;
	}
	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getMdp() {
		return mdp;
	}
	public void setMdp(String mdp) {
		this.mdp = mdp;
	}
	@Override
	public String toString() {
		return "Compte [id=" + id + ", version=" + version + ", pseudo=" + pseudo + ", mail=" + mail + ", mdp=" + mdp
				+ "]";
	}

	
	
}