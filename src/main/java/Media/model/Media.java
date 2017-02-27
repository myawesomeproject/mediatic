package Media.model;


import java.util.List;

import javax.persistence.*;
import emprunt.model.*;

@Entity
@Table(name = "media")
public class Media {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column
	private String titre;
	
	@Enumerated (EnumType.STRING)
	@Column
	private TypeMedia type;
	
	@Column
	private String auteur;
	
	@OneToMany (mappedBy = "media")
	private List<Emprunt> emprunts;

}
