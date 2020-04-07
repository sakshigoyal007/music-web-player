package com.ibm.services;

import java.util.List;

import org.bson.types.ObjectId;

import com.ibm.model.Recommendation;

public interface RecommendationService {
	
	List<Recommendation> findByUserId(String userId);
	
	List<Recommendation> findAllRecommendation();
	
	Recommendation addRecommendation(Recommendation recommendation);
	
	boolean deleteRecommendation(Recommendation recommendation);
	
	Recommendation findById(String id,String userId);
}
