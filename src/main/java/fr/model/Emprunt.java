package fr.model;

import java.util.Date;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "emprunt")
// @JsonIgnore
public class Emprunt {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne
	@JsonIgnoreProperties("emprunts")
	//@JsonManagedReference
	private Adherent adherent;

	@ManyToOne
	@JsonIgnoreProperties("emprunts")
	private Media media;

	@Column
	@Temporal(TemporalType.DATE)
	private Date dateEmprunt;

	@Column
	@Temporal(TemporalType.DATE)
	private Date dateRetour;

	@Column
	private boolean retourner = false;

	/****************** GET & SET **************************/
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Adherent getadherent() {
		return adherent;
	}

	public void setadherent(Adherent adherent) {
		this.adherent = adherent;
	}

	public Media getMedia() {
		return media;
	}

	public void setMedia(Media media) {
		this.media = media;
	}

	public Date getDateEmprunt() {
		return dateEmprunt;
	}

	public void setDateEmprunt(Date dateEmprunt) {
		this.dateEmprunt = dateEmprunt;
	}

	public Date getDateRetour() {
		return dateRetour;
	}

	public void setDateRetour(Date dateRetour) {
		this.dateRetour = dateRetour;
	}

	public Boolean getRetourner() {
		return retourner;
	}

	public void setRetourner(Boolean retourner) {
		this.retourner = retourner;
	}

	@Override
	public String toString() {
		return "Emprunt [id=" + id + ", adherent=" + adherent + ", media=" + media + ", dateEmprunt=" + dateEmprunt
				+ ", dateRetour=" + dateRetour + ", retourner=" + retourner + "]";
	}

}
