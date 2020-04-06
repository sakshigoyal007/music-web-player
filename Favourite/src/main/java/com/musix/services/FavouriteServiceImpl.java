package com.musix.services;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.musix.model.Favourite;
import com.musix.repository.FavouriteRepository;

@Service
public class FavouriteServiceImpl implements FavouriteService {
	
	@Autowired
	private FavouriteRepository favouriteRepository;
	
	FavouriteServiceImpl(FavouriteRepository favouriteRepository){
		this.favouriteRepository  = favouriteRepository;
	}

	@Override
	public List<Favourite> findByUserId(String userId) {
		// TODO Auto-generated method stub
		List<Favourite> list = favouriteRepository.findByUserId(userId);
		return list;
	}
	
	
	@Override
	public Favourite addFavourite(Favourite favourite) {
		// TODO Auto-generated method stub
		List<Favourite> list = findByUserId(favourite.getUserId());
		Iterator itr = list.iterator();
		Object data = favourite.getData();
		boolean flag = false;
		while(itr.hasNext()) {
			Favourite r = (Favourite) itr.next();
			if(data.equals(r.getData())) {
				flag = true;
			}
		}
		if(flag == false) {
			Favourite fav = favouriteRepository.insert(favourite);
			return fav;
		}
		return null;
	}

	@Override
	public boolean deleteFavourite(Favourite favourite) {
		// TODO Auto-generated method stub
		
		Favourite fav = favouriteRepository.findByDataIdAndUserId(favourite.getDataId(), favourite.getUserId());
		if(fav == null) {
			return false;
		}
		favouriteRepository.delete(favourite);
		return true;
			
	}


	@Override
	public List<Favourite> findAllFavourite() {
		// TODO Auto-generated method stub
		List<Favourite> list = favouriteRepository.findAll();
		return list;
	}

	@Override
	public Favourite findById(String id,String userId) {
		// TODO Auto-generated method stub
		Favourite fav = favouriteRepository.findByDataIdAndUserId(id, userId);
		return fav;
	}

}
