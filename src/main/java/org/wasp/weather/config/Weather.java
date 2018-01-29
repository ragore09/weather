package org.wasp.weather.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.wasp.weather.domain.Quote;

@SpringBootApplication
public class Weather {
    
    private static final Logger logger = LoggerFactory.getLogger(Weather.class);
    
    public static void main(String []args) {
        SpringApplication.run(Weather.class);
    }
    
    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder restTemplateBuilder) { 
        return restTemplateBuilder.build();
    }
    
    @Bean
    public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
        return args -> {
            Quote quote = restTemplate.getForObject(
                    "http://gturnquist-quoters.cfapps.io/api/random", Quote.class);
            logger.info(quote.toString());
        };
    }
    
}
