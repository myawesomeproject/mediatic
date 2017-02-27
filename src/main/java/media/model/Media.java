package media.model;


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

	
	
	
	/*********************  SET et GET  *****************/
	protected Long getId() {
		return id;
	}

	protected void setId(Long id) {
		this.id = id;
	}

	protected String getTitre() {
		return titre;
	}

	protected void setTitre(String titre) {
		this.titre = titre;
	}

	protected TypeMedia getType() {
		return type;
	}

	protected void setType(TypeMedia type) {
		this.type = type;
	}

	protected String getAuteur() {
		return auteur;
	}

	protected void setAuteur(String auteur) {
		this.auteur = auteur;
	}

	protected List<Emprunt> getEmprunts() {
		return emprunts;
	}

	protected void setEmprunts(List<Emprunt> emprunts) {
		this.emprunts = emprunts;
	}

	@Override
	public String toString() {
		return "Media [id=" + id + ", titre=" + titre + ", type=" + type + ", auteur=" + auteur + ", emprunts="
				+ emprunts + "]";
	}

	
	
}
