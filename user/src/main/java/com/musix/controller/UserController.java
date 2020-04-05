package com.musix.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.musix.model.Log;
import com.musix.model.User;
import com.musix.service.LogService;
import com.musix.service.UserService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/musix")
public class UserController {
	
	static final long EXPIRATION = 5000000;
	@Autowired  
	UserService userService;  
	
	@Autowired
	private LogService logService;
	Map<String, String> map = new HashMap<>();
	@GetMapping("/")  
	private String getstring()   
	{  
	return "welcome";
	} 

	@PostMapping("/user")  
	private User saveUser(@RequestBody User users)   
	{  	
		userService.saveOrUpdate(users);  
		return users;
	}  

	
	@PostMapping(value="/login")
	public ResponseEntity<?> login(@RequestBody User user) throws ServletException {
		String token = "";
		try {
            User userCheck = userService.findByUserIdAndPassword(user.getEmail(), user.getPassword());
			token = getToken(user.getEmail(), user.getPassword());
            Log log = new Log();
            log.setGenDate(new Date());
            log.setToken(token);
            log.setUid(userCheck.getEmail());
            log.setExpiringTime(EXPIRATION);
            logService.insertLog(log);
            map.clear();
            map.put("user", userCheck.getFname());
            map.put("userEmail", userCheck.getEmail());
            map.put("Time", new Date().toString());
            map.put("message", "user Successful logged In");
            map.put("token", token);
            map.put("status", HttpStatus.OK.toString());
            return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception e) {
            String errorMessage = e.getMessage();
            map.clear();
            map.put("Time", new Date().toString());
            map.put("message", errorMessage);
            map.put("token", null);
            map.put("status", HttpStatus.UNAUTHORIZED.toString());
            return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
		}
	}
	// Generate JWT token
	public String getToken(String email, String password) throws Exception {
		if (email == null || password == null)
			throw new ServletException();
		User user = userService.findByUserIdAndPassword(email, password);
		if (user == null)
			throw new ServletException();
		String jwt = Jwts.builder().setSubject(email).signWith(SignatureAlgorithm.HS256, "secretkey").compact();
		
		return jwt;
	}
		
	


}
