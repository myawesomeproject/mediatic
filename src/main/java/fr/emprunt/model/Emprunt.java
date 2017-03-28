package fr.emprunt.model;

import java.util.Date;

import javax.persistence.*;

import fr.adherent.model.*;
import fr.media.model.Media;




@Entity
@Table(name = "emprunt")
public class Emprunt {

	@Id
	@GeneratedValue
	private Long id;
	
	
	@ManyToOne 
	private Adherent adherent;
	
	@ManyToOne
	private Media media;
	
	@Column
	@Temporal(TemporalType.DATE)
	private Date dateEmprunt;
	
	@Column
	@Temporal(TemporalType.DATE)
	private Date dateRetour;
	
	@Column
	private boolean retourner =false;

	
	
	/******************    GET & SET **************************/
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
