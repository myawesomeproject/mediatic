package fr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import fr.dao.EmpruntDAO;
import fr.model.Emprunt;

@Controller
@RequestMapping("/resource")
@Transactional
public class EmpruntController {
	
	@Autowired
	private EmpruntDAO empruntDAO;
	
	@RequestMapping(value = "/emprunt.ajout", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Emprunt> CreateEmprunt(@RequestBody Emprunt emprunt) {
//		 empruntDAO.persist(emprunt);
		 System.out.println(emprunt.getDateEmprunt().getDay()+15);
		 return ResponseEntity.status(HttpStatus.OK).body(emprunt);
	}

}
