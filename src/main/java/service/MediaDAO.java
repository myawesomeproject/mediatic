package service;

import adherent.model.*;
import media.model.*;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

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

    public List<Media> boughtBooks() {
        EntityManager entityManager = DatabaseHelper.createEntityManager();
        String qlQuery =
                "SELECT distinct b " +
                        "FROM Client c " +
                        "LEFT JOIN c.boughtBooks b";
        TypedQuery<Media> query = entityManager.createQuery(qlQuery, Media.class);
        return query.getResultList();
    }

}
