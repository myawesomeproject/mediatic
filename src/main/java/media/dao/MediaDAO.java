package media.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import adherent.model.Adherent;
import media.model.*;
import service.DatabaseHelper;
import service.GenericDAO;

public class MediaDAO extends GenericDAO<Media> {

	private static MediaDAO dao;

	private MediaDAO() {
		super(Media.class);
	}

	public static MediaDAO instance() {
		if (dao == null) {
			dao = new MediaDAO();
		}
		return dao;
	}

	public List<Media> findByTitre(String titre) {
		EntityManager entityManager = DatabaseHelper.createEntityManager();
		String qlQuery = "SELECT m " + "FROM Media m " + "WHERE m.titre=:titre";
		TypedQuery<Media> query = entityManager.createQuery(qlQuery, Media.class);
		query.setParameter("titre", titre);
		return query.getResultList();
	}

	public List<Media> findByAuteur(String auteur) {
		EntityManager entityManager = DatabaseHelper.createEntityManager();
		String qlQuery = "SELECT m " + "FROM Media m " + "WHERE m.auteur=:auteur";
		TypedQuery<Media> query = entityManager.createQuery(qlQuery, Media.class);
		query.setParameter("auteur", auteur);
		return query.getResultList();
	}

	public Media findByIdwithEmprunt(long id_media) {
		EntityManager entityManager = DatabaseHelper.createEntityManager();
		String qlQuery = "SELECT m "
					+ "FROM Media m " 
					+ "left join fetch m.emprunts e "
					+ "left join fetch e.adherent a "
					+ "where m.id =:id ";
		TypedQuery<Media> query = entityManager.createQuery(qlQuery, Media.class);
		query.setParameter("id", id_media);
		return query.getSingleResult();
	}

}