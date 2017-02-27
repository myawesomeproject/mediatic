import java.sql.Date;

import adherent.dao.AdherentDAO;
import adherent.model.Adherent;
import adherent.model.Cotisation;
import emprunt.dao.EmpruntDAO;
import emprunt.model.Emprunt;
import media.dao.MediaDAO;
import media.model.Media;
import media.model.TypeMedia;


public class Run {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	//	EntityManager manager = DatabaseHelper.createEntityManager();

		Media m1 = new Media();
		
		m1.setAuteur("toto");
		m1.setTitre("toto");
		m1.setType(TypeMedia.Livre);
		
		MediaDAO.instance().persist(m1);
		
		//System.out.println(MediaDAO.instance().findByAuteur("toto").toString());
		//System.out.println(MediaDAO.instance().findByTitre("toto").toString());
		
		//Cotisation c1 = new Cotisation();
		Adherent a1 = new Adherent();
		
		a1.setNom("boby");
		a1.setPrenom("eponge");
		a1.setEmail("b.eponge@gmail.com");
		a1.setAdresse("fgsdkjf");
		a1.setCodePostal(42555);
		a1.setVille("toto");
		a1.setDateNaissance(new Date(1990,03,10));
		
		AdherentDAO.instance().persist(a1);
		
		Emprunt e1 = new Emprunt();
		
		e1.setadherent(a1);
		e1.setMedia(m1);
		Date date = new Date(2017,03,27);
		
		e1.setDateEmprunt(new Date(2017,02,27));
		e1.setDateRetour(date);
		
		EmpruntDAO.instance().persist(e1);
		
		
		AdherentDAO adao = AdherentDAO.instance();
		adao.MediasEmprunt(2L);
		
	}

}

