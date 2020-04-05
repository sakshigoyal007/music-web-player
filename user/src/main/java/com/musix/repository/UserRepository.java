package com.musix.repository;
import org.springframework.data.repository.CrudRepository;

import com.musix.model.User;
public interface UserRepository extends CrudRepository<User, String> {
	User findByEmailAndPassword(String email, String password);
	
	User findByemail(String email);

}




