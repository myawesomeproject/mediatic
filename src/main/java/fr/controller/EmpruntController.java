package fr.controller;

import java.util.List;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import fr.dao.*;
import fr.model.*;

@Controller
@RequestMapping("/resource")
@Transactional

public class EmpruntController {

	@Autowired
	private EmpruntDAO empruntDAO;
	
//	@ResponseBody
//	@RequestMapping(value = "/adherent.emprunt", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public List<Adherent> display() {
//		List<Adherent> result = empruntDAO.getListAdherent();
//		return result;
//	}		
//	
//	@RequestMapping(value = "/adherent.accession", method = RequestMethod.GET , produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Adherent> displayOne(@RequestParam("id") long id) {
//		Adherent adherent = empruntDAO.find(id);
//		System.out.println(adherent.toString());
//		
//		return ResponseEntity.status(HttpStatus.OK).body(adherent);
//	}
//	
//	@RequestMapping(value = "/adherent.creation", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Adherent> CreateAdherent(@RequestBody Adherent adherent) {
//		 empruntDAO.persist(adherent);
//		System.out.println(adherent.toString());
//		
//		return ResponseEntity.status(HttpStatus.OK).body(adherent);
//	}
//	
}
