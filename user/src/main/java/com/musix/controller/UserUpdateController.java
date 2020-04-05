package com.musix.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.musix.service.UserService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/musix/updateuser")
public class UserUpdateController {
	
	
	@Autowired  
	UserService userService;  
	
	@PutMapping("/changepassword/{pass}")
    public ResponseEntity<?> changePassword(@PathVariable("pass") String userPassword, @RequestHeader("authorization") String token){
		System.out.println(token);
		
		final Claims claims1 = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody();
//        System.out.println(claims1.getSubject());
                try {
                    final Claims claims = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody();
                    System.out.println(claims.getSubject());
                   
                    String userEmail = claims.getSubject();
                    
                    userService.changePassword(userPassword, userEmail);
                    return new ResponseEntity<>(userEmail,HttpStatus.OK);
                } catch (Exception e) {
                    return new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
                }
            }
}
