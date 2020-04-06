package com.ibm.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.model.Recommendation;

public interface RecommandationRepository extends MongoRepository<Recommendation, String> {
	List<Recommendation> findByUserId(String userId);
	
	Recommendation findByDataIdAndUserId(String id,String userId);
}
