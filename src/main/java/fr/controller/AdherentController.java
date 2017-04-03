package fr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import fr.dao.AdherentDAO;
import fr.dao.CotisationDAO;
import fr.model.Adherent;
import fr.model.Cotisation;

@Controller
@RequestMapping("/resource")
@Transactional

public class AdherentController {

	@Autowired
	private AdherentDAO adherentDAO;

	@Autowired
	private CotisationDAO cotisationDAO;

	@ResponseBody
	@RequestMapping(value = "/adherent.recherche", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Adherent> display() {
		List<Adherent> result = adherentDAO.getListAdherent();
		return result;
	}

	// @ResponseBody
	// @RequestMapping(value = "/adherent/{id}", method = RequestMethod.GET)
	// public Adherent display(@PathVariable long id) {
	// return adherentDAO.find(id);
	// }

	@RequestMapping(value = "/adherent.accession", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Adherent> displayOne(@RequestParam("id") long id) {
		Adherent adherent = adherentDAO.find(id);
		System.out.println(adherent.toString());

		return ResponseEntity.status(HttpStatus.OK).body(adherent);
	}

	@RequestMapping(value = "/adherent.creation", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Adherent> CreateAdherent(@RequestBody Adherent adherent) {
		// System.out.println(adherent.getCotisation());
		Cotisation cot;
		cot = adherent.getCotisation();
		cotisationDAO.persist(cot);

		adherentDAO.persist(adherent);

		System.out.println(adherent.toString());

		return ResponseEntity.status(HttpStatus.OK).body(adherent);
	}

	@RequestMapping(value = "/adherent.modification", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Adherent> UpdateAdherent(@RequestBody Adherent adherent) {
		if (adherent.getCotisation() != null) {
			cotisationDAO.merge(adherent.getCotisation());
		} else {

			cotisationDAO.persist(adherent.getCotisation());
		}

		adherentDAO.merge(adherent);

		return ResponseEntity.status(HttpStatus.OK).body(adherent);
	}

}
