package com.musix;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.musix.jwtfilter.JwtFilter;

@SpringBootApplication
public class UserApplication {
	
	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/musix/updateuser/*");
		return registrationBean;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

}
