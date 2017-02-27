package emprunt.model;

import java.util.Date;

import javax.persistence.*;

import adherent.model.*;
import media.model.Media;




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
	private Boolean retourner;

	protected Long getId() {
		return id;
	}

	protected void setId(Long id) {
		this.id = id;
	}

	protected Adherent getadherent() {
		return adherent;
	}

	protected void setadherent(Adherent adherent) {
		this.adherent = adherent;
	}

	protected Media getMedia() {
		return media;
	}

	protected void setMedia(Media media) {
		this.media = media;
	}

	protected Date getDateEmprunt() {
		return dateEmprunt;
	}

	protected void setDateEmprunt(Date dateEmprunt) {
		this.dateEmprunt = dateEmprunt;
	}

	protected Date getDateRetour() {
		return dateRetour;
	}

	protected void setDateRetour(Date dateRetour) {
		this.dateRetour = dateRetour;
	}

	protected Boolean getRetourner() {
		return retourner;
	}

	protected void setRetourner(Boolean retourner) {
		this.retourner = retourner;
	}

	@Override
	public String toString() {
		return "Emprunt [id=" + id + ", adherent=" + adherent + ", media=" + media + ", date_emprunt=" + dateEmprunt
				+ ", date_retour=" + dateRetour + ", retourner=" + retourner + "]";
	}
	
	
		
	
	
}
