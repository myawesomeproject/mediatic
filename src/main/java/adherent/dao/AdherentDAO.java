package adherent.dao;

import adherent.model.*;
import media.model.*;
import service.DatabaseHelper;
import service.GenericDAO;

import org.hibernate.Hibernate;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

public class AdherentDAO extends GenericDAO<Adherent> {

    private static AdherentDAO dao;

    private AdherentDAO() {
        super(Adherent.class);
    }

    public static AdherentDAO instance() {
        if (dao == null) {
            dao = new AdherentDAO();
        }
        return dao;
    }
    
    

  /*  public Adherent findAdherentAndFetchMedias2Requests(Long id) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        Adherent Adherent = entityManager.find(Adherent.class, id);
        Hibernate.initialize(Adherent.getBoughtMedias());
        entityManager.close();
        return Adherent;
    }

    public Adherent findAdherentAndFetchMedias(Long id) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        String qlQuery =
                "SELECT c " +
                        "FROM Adherent c " +
                        "LEFT JOIN FETCH c.boughtMedias " +
                        "WHERE c.id=:id";
        TypedQuery<Adherent> query = entityManager.createQuery(qlQuery, Adherent.class);
        query.setParameter("id", id);
        return query.getSingleResult();
    }

    public List<Media> MediasBoughtBy2Requests(Long AdherentId) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        List<Media> boughtMedias = entityManager.find(Adherent.class, AdherentId).getBoughtMedias();
        Hibernate.initialize(boughtMedias);
        return boughtMedias;
    }

    public List<Media> MediasBoughtBy(Long AdherentId) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        String qlQuery =
                "SELECT b " +
                        "FROM Adherent a " +
                        "INNER JOIN a.boughtMedias b " +
                        "WHERE a.id=:id";
        TypedQuery<Media> query = entityManager.createQuery(qlQuery, Media.class);
        query.setParameter("id", AdherentId);
        return query.getResultList();
    }*/
}
