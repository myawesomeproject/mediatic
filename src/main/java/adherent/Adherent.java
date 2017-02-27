package adherent;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table (name="adherent")
public class Adherent {

	@Id
	@GeneratedValue
	private Long id;
	@Column
	private String nom;
	@Column
	private String prenom;
	@Column
	private String adresse;
	@Column
	private int code_postal;
	@Column
	private String ville;
	@Column
	private String email;
	@Column
	private Boolean adhesion;	
	
/*	@OneToMany
	private Long id_emprunt;
	@OneToMany
	private Long id_media;
	@OneToMany
	private Date date_emprunt;
	@OneToMany
	private Date date_retour;
	@OneToOne
	private long id_cotisation;
	@OneToOne
	private Date date_cotisation;
	@OneToOne
	private int montant;*/
	
	
	
	
	
}
