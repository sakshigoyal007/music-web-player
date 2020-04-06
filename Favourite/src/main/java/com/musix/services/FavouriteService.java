package com.musix.services;

import java.util.List;

import org.bson.types.ObjectId;

import com.musix.model.Favourite;


public interface FavouriteService {
	
	List<Favourite> findByUserId(String userId);
	
	List<Favourite> findAllFavourite();
	
	Favourite addFavourite(Favourite favourite);
	
	boolean deleteFavourite(Favourite favourite);
	
	Favourite findById(String id,String userId);
}