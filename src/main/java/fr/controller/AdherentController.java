package fr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import fr.adherent.dao.AdherentDAO;
import fr.adherent.model.Adherent;

@RestController
@RequestMapping("/resource")
public class AdherentController {

	@Autowired
	private AdherentDAO adherentDAO;
	
	@ResponseBody
	@RequestMapping(value = "/adherent.recherche", method = RequestMethod.GET)
	public List<Adherent> display() {
		return adherentDAO.getListAdherent();
	}
	
//	@ResponseBody
//	@RequestMapping(value = "/adherent/{id}", method = RequestMethod.GET)
//	public Adherent display(@PathVariable long id) {
//		return adherentDAO.find(id);
//	}
		
	
	@RequestMapping(value = "/adherent.accession", method = RequestMethod.GET)
	public ResponseEntity<Adherent> displayOne(@RequestParam("id") long id) {
		Adherent adherent = adherentDAO.find(id);
		System.out.println(adherent.toString());
		
		return ResponseEntity.status(HttpStatus.OK).body(adherent);
	}
	
}