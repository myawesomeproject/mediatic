package fr.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import fr.dao.*;
import fr.model.*;

@RestController
@RequestMapping("/resource")
@Transactional
public class MediaController {
	
	@Autowired
	private MediaDAO mediaDAO;
	
	@ResponseBody
	@RequestMapping(value = "/media.recherche", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Media> display() {
		List<Media> result = mediaDAO.getListMedia();
		return result;
	}
	
//	@ResponseBody
//	@RequestMapping(value = "/adherent/{id}", method = RequestMethod.GET)
//	public Adherent display(@PathVariable long id) {
//		return adherentDAO.find(id);
//	}
		
	
	@RequestMapping(value = "/media.accession", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
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
