package com.vitalink.whatsapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class ApiVitalinkApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiVitalinkApplication.class, args);

	}

}
