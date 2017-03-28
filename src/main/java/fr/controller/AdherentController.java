package fr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import fr.adherent.dao.AdherentDAO;
import fr.adherent.model.Adherent;

@RestController
@RequestMapping("resource")
public class AdherentController {

	@Autowired
	private AdherentDAO adherentDAO;
	
	@ResponseBody
	@RequestMapping(value = "/adherent.recherche", method = RequestMethod.GET)
	public List<Adherent> display() {
		return adherentDAO.getListAdherent();
	}

}
