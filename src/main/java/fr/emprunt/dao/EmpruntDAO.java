package fr.emprunt.dao;


import fr.emprunt.model.*;
import fr.service.GenericDAO;

public class EmpruntDAO extends GenericDAO<Emprunt> {

	
	private static EmpruntDAO dao;

    private EmpruntDAO() {
        super(Emprunt.class);
    }

    public static EmpruntDAO instance() {
        if (dao == null) {
            dao = new EmpruntDAO();
        }
        return dao;
    }
}
