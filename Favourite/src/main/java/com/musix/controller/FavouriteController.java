package com.musix.controller;

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

import com.musix.model.Favourite;
import com.musix.services.FavouriteService;

@CrossOrigin(origins="*")
@RestController
public class FavouriteController {
	
	@Autowired
	private FavouriteService favService;
	
	public FavouriteController(FavouriteService favService) {
		// TODO Auto-generated constructor stub
		this.favService  = favService;
	}
	
	@GetMapping(value="/")
	public String welcome() {
		return "welcome..|";
	}
	
	@GetMapping(value="/musix/favourite/{userId}")
	public ResponseEntity<?> getFavouriteByUserId(@PathVariable("userId") String userId){
		List<Favourite> list = favService.findByUserId(userId);
		if(list.size()==0) {
			return new ResponseEntity<String>("No Favourite",HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<List<Favourite>>(list,HttpStatus.OK);
		
	}
	
	@PostMapping(value="/musix/favourite/add")
	public ResponseEntity<?> addFavourite(@RequestBody Favourite favour){
		Favourite fav = favService.addFavourite(favour);
		if(fav==null) {
			return new ResponseEntity<String>("Favourite already added",HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("Favourite added",HttpStatus.OK);
	}
	
	
	
	@DeleteMapping(value="/musix/favourite/{id}/{userId}")
	public ResponseEntity<?> deleteFavourite(@PathVariable("id") String id, @PathVariable("userId") String userId){
		Favourite fav = favService.findById(id, userId);
		if(fav==null) {
			return new ResponseEntity<String>("No such Favourite found",HttpStatus.BAD_REQUEST);
		}
		else {
			boolean isDeleted = favService.deleteFavourite(fav);
			if(isDeleted) {
				return new ResponseEntity<String>("Deleted Successfully", HttpStatus.OK);
			}
			else {
				return new ResponseEntity<String>("No such Favourite found",HttpStatus.BAD_REQUEST);
			}
			
		}
	}
	
	
}

