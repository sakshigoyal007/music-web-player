package com.musix.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.musix.model.Log;

@Repository
public interface LogRepository extends CrudRepository<Log, Integer>{
	
}

