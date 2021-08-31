package spring.boot.tptRpg.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Admin")
public class Admin extends Compte {

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(Long id, int version, String pseudo, String mail, String mdp) {
		super(id, version, pseudo, mail, mdp);
		// TODO Auto-generated constructor stub
	}

	public Admin(String pseudo, String mail, String mdp) {
		super(pseudo, mail, mdp);
		// TODO Auto-generated constructor stub
	}
 
}
