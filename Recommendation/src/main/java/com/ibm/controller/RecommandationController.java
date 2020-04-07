package com.ibm.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.model.Recommendation;
import com.ibm.services.RecommendationService;

@CrossOrigin(origins="*")
@RestController
public class RecommandationController {
	
	@Autowired
	private RecommendationService recService;
	
	public RecommandationController(RecommendationService recService) {
		// TODO Auto-generated constructor stub
		this.recService  = recService;
	}
	
	@GetMapping(value="/")
	public String welcome() {
		return "welcome..|";
	}
	
	@GetMapping(value="/musix/recommandation/{userId}")
	public ResponseEntity<?> getRecommandationByUserId(@PathVariable("userId") String userId){
		List<Recommendation> list = recService.findByUserId(userId);
		if(list.size()==0) {
			return new ResponseEntity<String>("No Recommandation",HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<List<Recommendation>>(list,HttpStatus.OK);
		
	}
	
	@PostMapping(value="/musix/recommandation/add")
	public ResponseEntity<?> addRecommand(@RequestBody Recommendation recom){
		Recommendation rec = recService.addRecommendation(recom);
		if(rec==null) {
			return new ResponseEntity<String>("Recommandation already added",HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("Recommandation added",HttpStatus.OK);
	}
	
	
	
	@DeleteMapping(value="/musix/delete/recommandation/{id}/{userId}")
	public ResponseEntity<?> deleteRecommandation(@PathVariable("id") String id, @PathVariable("userId") String userId){
		Recommendation rec = recService.findById(id, userId);
		if(rec==null) {
			return new ResponseEntity<String>("No such Recommandation found",HttpStatus.BAD_REQUEST);
		}
		else {
			boolean isDeleted = recService.deleteRecommendation(rec);
			if(isDeleted) {
				return new ResponseEntity<String>("Deleted Successfully", HttpStatus.OK);
			}
			else {
				return new ResponseEntity<String>("No such Recommandation found",HttpStatus.BAD_REQUEST);
			}
			
		}
	}
	
	@GetMapping(value="/musix/allrecommandation")
	public ResponseEntity<?> getAllRecommandationByUserId( String userId){
		List<Recommendation> list = recService.findAllRecommendation();
		if(list.size()==0) {
			return new ResponseEntity<String>("No Recommandation",HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<List<Recommendation>>(list,HttpStatus.OK);
		
	}
	
	
	
}
