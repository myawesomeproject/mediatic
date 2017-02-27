package emprunt.model;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import Media.model.*;
import adherent.model.*;



@Entity
@Table(name = "emprunt")
public class Emprunt {

	@Id
	@GeneratedValue
	private Long id;
	
	
	@ManyToOne 
	private Adherent abonne;
	
	@ManyToOne
	private Media media;
	
	@Column
	private Date date_emprunt;
	
	@Column
	private Date date_retour;
	
//	@Column
//	private Boolean retourner;
//		
}
