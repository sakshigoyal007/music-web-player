package com.musix.repository;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.musix.model.Favourite;

public interface FavouriteRepository extends MongoRepository<Favourite, String> {
	List<Favourite> findByUserId(String userId);
	
	Favourite findByDataIdAndUserId(String id,String userId);
}
