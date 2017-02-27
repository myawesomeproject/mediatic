package adherent.model;

import javax.persistence.*;

import org.hibernate.validator.constraints.NotBlank;

import java.util.Date;


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
	private String adresse;
	
	@NotBlank
	private Integer codePostal;
	
	@NotBlank
	private String ville;
	
	@NotBlank
	private String email;
	
	@OneToOne
	private Cotisation cotisation;

	
	public Adherent(){
	}
	
	
	
}
