
package adherent.dao;

import adherent.model.*;
import emprunt.model.Emprunt;
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
    

    public List<Emprunt> MediasBoughtBy2Requests(Long AdherentId) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        List<Emprunt> empruntMedia = entityManager.find(Adherent.class, AdherentId).getEmprunts();
        Hibernate.initialize(empruntMedia);
        return empruntMedia;
    }

    public List<Media> MediasEmprunt(Long AdherentId) {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        String qlQuery =
                "SELECT a " +
                        "FROM Adherent a " +
                        "INNER JOIN FETCH a.emprunt e " +
                        "INNER JOIN FETCH a.media " +
                        "WHERE e.id=:id";
        TypedQuery<Media> query = entityManager.createQuery(qlQuery, Media.class);
        query.setParameter("id", AdherentId);
        return query.getResultList();
    }
    
 
}

