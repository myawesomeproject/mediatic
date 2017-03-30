
package fr.adherent.dao;

import fr.adherent.model.*;
import fr.emprunt.model.Emprunt;
import fr.media.model.*;
import fr.service.DatabaseHelper;
import fr.service.GenericDAO;

import org.hibernate.Hibernate;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

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
		EntityManager entityManager = DatabaseHelper.createEntityManager();
		List<Emprunt> empruntMedia = entityManager.find(Adherent.class, AdherentId).getEmprunts();
		Hibernate.initialize(empruntMedia);
		return empruntMedia;
	}

	public Adherent MediasEmprunt(Long AdherentId) {
		EntityManager entityManager = DatabaseHelper.createEntityManager();
		String qlQuery = "SELECT a " + "FROM Adherent a " + "LEFT JOIN FETCH a.emprunts e " + "LEFT JOIN FETCH e.media "
				+ "WHERE a.id=:id";
		TypedQuery<Adherent> query = entityManager.createQuery(qlQuery, Adherent.class);
		query.setParameter("id", AdherentId);
		return query.getSingleResult();
	}
	

	public List<Adherent> getListAdherent() {
		EntityManager entityManager = DatabaseHelper.createEntityManager();
		TypedQuery<Adherent> query = entityManager.createQuery("from Adherent", Adherent.class);
		List<Adherent> adherents = query.getResultList();
		return adherents;
	}

}
