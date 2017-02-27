package adherent.model;
import javax.persistence.*;

import org.hibernate.validator.constraints.NotBlank;

@Entity
public class Cotisation {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@NotBlank
	private String dateCotisation;
	
	@NotBlank
	private Long montantCotisation;
	
	public Cotisation(){
		
	}

	
	
}
