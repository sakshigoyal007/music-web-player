package com.musix.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="usermusix")
public class User {
	@Id
	private String email;
    private String fname;
	private String lname;
	private String password;
	private String gender;
	private String image;
	private Date dob;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public User(String email, String fname, String lname, String password, String gender, String image, Date dob) {
		super();
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.gender = gender;
		this.image = image;
		this.dob = dob;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}


	@Override
	public String toString() {
		return "User [email=" + email + ", fname=" + fname + ", lname=" + lname + ", password=" + password + ", gender="
				+ gender + ", image=" + image + ", dob=" + dob + "]";
	}

	
	

}
