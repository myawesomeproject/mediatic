package fr.model;

import java.util.Date;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name="cotisation")
public class Cotisation {

	@Id
	@GeneratedValue
	private Long id;

	@NotNull
	@Temporal(TemporalType.DATE)
	private Date dateCotisation;

	@NotNull
	private Long montantCotisation;

	public Cotisation() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDateCotisation() {
		return dateCotisation;
	}

	public void setDateCotisation(Date dateCotisation) {
		this.dateCotisation = dateCotisation;
	}

	public Long getMontantCotisation() {
		return montantCotisation;
	}

	public void setMontantCotisation(Long montantCotisation) {
		this.montantCotisation = montantCotisation;
	}

}
