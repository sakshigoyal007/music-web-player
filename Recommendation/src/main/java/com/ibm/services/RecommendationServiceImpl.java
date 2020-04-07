package com.ibm.services;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.model.Recommendation;
import com.ibm.repository.RecommandationRepository;

@Service
public class RecommendationServiceImpl implements RecommendationService {
	
	@Autowired
	private RecommandationRepository recommandationRepository;
	
	RecommendationServiceImpl(RecommandationRepository recommandationRepository){
		this.recommandationRepository  = recommandationRepository;
	}

	@Override
	public List<Recommendation> findByUserId(String userId) {
		// TODO Auto-generated method stub
		List<Recommendation> list = recommandationRepository.findByUserId(userId);
		return list;
	}
	
	
	@Override
	public Recommendation addRecommendation(Recommendation recommendation) {
		// TODO Auto-generated method stub
		System.out.println(recommendation);
		List<Recommendation> list = findByUserId(recommendation.getUserId());
		Iterator itr = list.iterator();
		String dataId = recommendation.getDataId();
		boolean flag = false;
		while(itr.hasNext()) {
			Recommendation r = (Recommendation) itr.next();
			if(dataId.equals(r.getDataId())) {
				flag = true;
			}
		}
		if(flag == false) {
			Recommendation recom = recommandationRepository.insert(recommendation);
			return recom;
		}
		return null;
	}

	@Override
	public boolean deleteRecommendation(Recommendation recommendation) {
		// TODO Auto-generated method stub
		
		Recommendation rec = recommandationRepository.findByDataIdAndUserId(recommendation.getDataId(), recommendation.getUserId());
		if(rec == null) {
			return false;
		}
		recommandationRepository.delete(recommendation);
		return true;
			
	}


	@Override
	public List<Recommendation> findAllRecommendation() {
		// TODO Auto-generated method stub
		List<Recommendation> list = recommandationRepository.findAll();
		return list;
	}

	@Override
	public Recommendation findById(String id,String userId) {
		// TODO Auto-generated method stub
		Recommendation rec = recommandationRepository.findByDataIdAndUserId(id, userId);
		return rec;
	}

}
