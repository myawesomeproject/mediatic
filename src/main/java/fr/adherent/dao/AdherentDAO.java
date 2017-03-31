package fr.adherent.dao;

import java.util.List;
import javax.persistence.TypedQuery;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adherent.model.Adherent;
import fr.emprunt.model.Emprunt;
import fr.service.GenericDAO;

@Service
@Repository
@Transactional
public class AdherentDAO extends GenericDAO<Adherent> {

	private static AdherentDAO dao;

	public AdherentDAO() {
		super(Adherent.class);
	}

	public static AdherentDAO instance() {
		if (dao == null) {
			dao = new AdherentDAO();
		}
		return dao;
	}

	public List<Emprunt> MediasBoughtBy2Requests(Long AdherentId) {
		List<Emprunt> empruntMedia = em.find(Adherent.class, AdherentId).getEmprunts();
		Hibernate.initialize(empruntMedia);
		return empruntMedia;
	}

	public Adherent MediasEmprunt(Long AdherentId) {
		String qlQuery = "SELECT a " + "FROM Adherent a " + "LEFT JOIN FETCH a.emprunts e " + "LEFT JOIN FETCH e.media "
				+ "WHERE a.id=:id";
		TypedQuery<Adherent> query = em.createQuery(qlQuery, Adherent.class);
		query.setParameter("id", AdherentId);
		return query.getSingleResult();
	}
	

	public List<Adherent> getListAdherent() {
		TypedQuery<Adherent> query = em.createQuery("from Adherent", Adherent.class);
		List<Adherent> adherents = query.getResultList();
		return adherents;
	}

}
