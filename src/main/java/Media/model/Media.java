package Media.model;

import javax.persistence.*;

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
	private Type type;
	
	@Column
	private String auteur;

}
