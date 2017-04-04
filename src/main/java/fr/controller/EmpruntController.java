package fr.controller;

import java.text.DateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

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
import fr.model.TypeMedia;

@Controller
@RequestMapping("/resource")
@Transactional
public class EmpruntController {

	@Autowired
	private EmpruntDAO empruntDAO;

	@RequestMapping(value = "/emprunt.ajout", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Emprunt> CreateEmprunt(@RequestBody Emprunt emprunt) {
		// empruntDAO.persist(emprunt);
		Date date = emprunt.getDateEmprunt();
		TypeMedia type = emprunt.getMedia().getType();
		emprunt.setDateRetour(getDateRetour(date, type));
		empruntDAO.persist(emprunt);
		
		// Date d = emprunt.getDateEmprunt();
		// Calendar calendar = Calendar.getInstance();
		// calendar.setTime(d);
		// calendar.add(Calendar.DAY_OF_MONTH, 30);
		// Date date = calendar.getTime();

	
		return ResponseEntity.status(HttpStatus.OK).body(emprunt);
	}

	private Date getDateRetour(Date d, TypeMedia type) {

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(d);
		if (type.toString().equals("Livre")) {
			calendar.add(Calendar.DAY_OF_MONTH, 30);
		} else {
			calendar.add(Calendar.DAY_OF_MONTH, 15);
		}

		Date date = calendar.getTime();
		System.out.println(date);
		return date;

	}

}
