package fr.dao;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.model.Cotisation;
import fr.service.GenericDAO;

@Service
@Repository
@Transactional
public class CotisationDAO  extends GenericDAO<Cotisation> {


	private static CotisationDAO dao;

	public CotisationDAO() {
		super(Cotisation.class);
	}

	public static CotisationDAO instance() {
		if (dao == null) {
			dao = new CotisationDAO();
		}
		return dao;
	}

}
