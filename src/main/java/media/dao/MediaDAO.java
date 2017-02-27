package media.dao;



import media.model.*;
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


	
}
