package com.musix.service;


import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.musix.model.Log;
import com.musix.repository.LogRepository;



@Service
public class LogServiceImpl implements LogService {
	
	@Autowired
	private LogRepository logRepository;
	
	 /* register a new user */
	
	public Log insertLog(Log log) {
		if(log != null)
			return logRepository.save(log);
		else
			return null;
	}
}

