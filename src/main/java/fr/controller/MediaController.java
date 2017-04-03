package fr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import fr.dao.AdherentDAO;
import fr.dao.MediaDAO;
import fr.model.Adherent;
import fr.model.Media;

@RestController
@RequestMapping("/resource")
@Transactional
public class MediaController {
	
	@Autowired
	private MediaDAO mediaDAO;
	
	@ResponseBody
	@RequestMapping(value = "/media.recherche", method = RequestMethod.GET)
	public List<Media> display() {
		List<Media> result = mediaDAO.getListMedia();
		return result;
	}
	
//	@ResponseBody
//	@RequestMapping(value = "/adherent/{id}", method = RequestMethod.GET)
//	public Adherent display(@PathVariable long id) {
//		return adherentDAO.find(id);
//	}
		
	
	@RequestMapping(value = "/media.accession", method = RequestMethod.GET)
	public ResponseEntity<Media> displayOne(@RequestParam("id") long id) {
		Media media = mediaDAO.find(id);
		System.out.println(media.toString());
		
		return ResponseEntity.status(HttpStatus.OK).body(media);
	}

	@RequestMapping(value = "/media.creation", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Media> CreateMedia(@RequestBody Media media) {
		 mediaDAO.persist(media);
		System.out.println(media.toString());
		
		return ResponseEntity.status(HttpStatus.OK).body(media);
	}
}
