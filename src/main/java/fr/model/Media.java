package fr.model;

import java.util.List;
import javax.persistence.*;
import org.hibernate.validator.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import fr.model.*;


@Entity
@Table(name = "media")
public class Media {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@NotBlank
	private String titre;
	
	@Enumerated (EnumType.STRING)
	@Column
	private TypeMedia type;
	
	@Column
	private String auteur;
	
	@OneToMany (fetch = FetchType.EAGER,mappedBy = "media")
	private List<Emprunt> emprunts;

	/* si besoin pour plus tard
	@Column
	private Emprunt emprunt;
	*/
	
	
	/*********************  SET et GET  *****************/
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public TypeMedia getType() {
		return type;
	}

	public void setType(TypeMedia type) {
		this.type = type;
	}

	public String getAuteur() {
		return auteur;
	}

	public void setAuteur(String auteur) {
		this.auteur = auteur;
	}

	public List<Emprunt> getEmprunts() {
		return emprunts;
	}

	public void setEmprunts(List<Emprunt> emprunts) {
		this.emprunts = emprunts;
	}

	@Override
	public String toString() {
		return "Media [id=" + id + ", titre=" + titre + ", type=" + type + ", auteur=" + auteur + "]";
	}

	
	
}
