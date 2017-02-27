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
	private String dateNaissance;
	
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

	
	public Adherent(){
	}
	
	
	
}
