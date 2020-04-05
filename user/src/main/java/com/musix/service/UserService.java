package com.musix.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.musix.model.User;
import com.musix.repository.UserRepository;

@Service  
public class UserService {
	@Autowired 
	private UserRepository repository;
	public List<User> getAllUsers()   
	{  
	List<User> users = new ArrayList<User>();  
	repository.findAll().forEach(users1 -> users.add(users1));  
	return users;  
	}  
	public User getUsersById(String id)   
	{  
	return repository.findById(id).get();
	}  
	//saving a specific record by using the method save() of CrudRepository  
	public User saveOrUpdate(User users)   
	{  
		User user = repository.save(users); 
		return user;
	}
	//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(String id)   
	{  
	repository.deleteById(id);  
	}  
	
//	updating a record  
	public void update(User users, String newPwd)   
	{  
		repository.save(users);  
	}  
	
	public User findByEmailId(String email)  {
		User user = repository.findByemail(email);
		System.out.println(user);
		return user;
	}
	
	public User findByUserIdAndPassword(String email, String password){
		User returned = repository.findByEmailAndPassword(email, password);
			return returned;
	}
	
	public User changePassword(String email,String newPwd)  {
		User user = findByEmailId(email);
		System.out.println("hi");
		user.setPassword(newPwd);
		User user1 = repository.save(user);
		return user1;
	}
	
	
	
	

}
