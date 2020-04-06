package com.ibm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


//import com.ibm.jwtfilter.JwtFilter;

@SpringBootApplication
public class RecommendationApplication {
	
//	@Bean
//	public FilterRegistrationBean jwtFilter() {
//		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
//		registrationBean.setFilter(new JwtFilter());
//		registrationBean.addUrlPatterns("/musix/*");
//		return registrationBean;
//	}

	public static void main(String[] args) {
		SpringApplication.run(RecommendationApplication.class, args);
	}

}
