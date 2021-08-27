package spring.boot.tptRpg.model;

import java.awt.image.BufferedImage;

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
import javax.swing.JPanel;

@Entity
@Table(name = "Histoire")
//@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorColumn(name = "type")
//public class Histoire extends JPanel{
public class Histoire {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	private Long id;
	@Version
	private int version;
	@Column()
	private String lieu;
//	//@Column()
//	//private BufferedImage image;
//	public Histoire() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//	public Histoire(Long id, int version, String lieu, BufferedImage image) {
//		this.id = id;
//		this.version = version;
//		this.Lieu = lieu;
//		//this.image = image;
//		
//	}
//	
//	public Histoire(String lieu, BufferedImage image) {
//		this.Lieu = lieu;
//		//this.image = image;
//		
//	}
//	public Long getId() {
//		return id;
//	}
//	public void setId(Long id) {
//		this.id = id;
//	}
//	public int getVersion() {
//		return version;
//	}
//	public void setVersion(int version) {
//		this.version = version;
//	}
//	public String getLieu() {
//		return Lieu;
//	}
//	public void setLieu(String lieu) {
//		Lieu = lieu;
//	}
////	public BufferedImage getImage() {
////		return image;
////	}
////	public void setImage(BufferedImage image) {
////		this.image = image;
////	}
//	@Override
//	public String toString() {
//		return "Histoire [id=" + id + ", version=" + version + ", Lieu=" + Lieu + "]";
//	}
	
	public Histoire(Long id, int version, String lieu) {
		super();
		this.id = id;
		this.version = version;
		this.lieu = lieu;
	}
public Histoire() {
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
public String getLieu() {
	return lieu;
}
public void setLieu(String lieu) {
	this.lieu = lieu;
}
@Override
public String toString() {
	return "Histoire [id=" + id + ", version=" + version + ", lieu=" + lieu + "]";
}
	
	

	
	
	
	
}
