package fr.dao;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.model.*;
import fr.service.*;
@Service
@Repository
@Transactional
public class EmpruntDAO extends GenericDAO<Emprunt> {

	
	private static EmpruntDAO dao;

    public EmpruntDAO() {
        super(Emprunt.class);
    }

    public static EmpruntDAO instance() {
        if (dao == null) {
            dao = new EmpruntDAO();
        }
        return dao;
    }
}
