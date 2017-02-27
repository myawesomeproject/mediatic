package adherent.model;

import javax.persistence.*;

import org.hibernate.validator.constraints.NotBlank;

import emprunt.model.Emprunt;

import java.util.Date;
import java.util.List;


@Entity
@Table (name="adherent")
public class Adherent {

	@Id
	@GeneratedValue
	private Long id;
	
	@NotBlank
	private String nom;
	
	@NotBlank
	private String prenom;
	
	@NotBlank
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	
	@NotBlank
	private String adresse;
	
	@NotBlank
	private Integer codePostal;
	
	@NotBlank
	private String ville;
	
	@NotBlank
	private String email;
	
	@OneToOne
	private Cotisation cotisation;
	
	@OneToMany (mappedBy = "adherent")
	private List<Emprunt> emprunts;

	
<<<<<<< HEAD
	public Adherent(){
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public String getPrenom() {
		return prenom;
	}


	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}


	public Date getDateNaissance() {
		return dateNaissance;
	}


	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}


	public String getAdresse() {
		return adresse;
	}


	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}


	public Integer getCodePostal() {
		return codePostal;
	}


	public void setCodePostal(Integer codePostal) {
		this.codePostal = codePostal;
	}


	public String getVille() {
		return ville;
	}


	public void setVille(String ville) {
		this.ville = ville;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Cotisation getCotisation() {
		return cotisation;
	}


	public void setCotisation(Cotisation cotisation) {
		this.cotisation = cotisation;
	}


	public List<Emprunt> getEmprunts() {
		return emprunts;
	}


	public void setEmprunts(List<Emprunt> emprunts) {
		this.emprunts = emprunts;
	}
	
	
=======
>>>>>>> 5a40f018a29f8780f892d149e27484f06a272c19
	
	
}
