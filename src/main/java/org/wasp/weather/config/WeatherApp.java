package org.wasp.weather.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.client.RestTemplate;
import org.wasp.weather.service.WeatherService;

@SpringBootApplication(scanBasePackages = "org.wasp.weather")
public class WeatherApp implements CommandLineRunner {

    private WeatherService weatherService;

    public WeatherApp(@Lazy WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder restTemplateBuilder) {
        return restTemplateBuilder.build();
    }


    private static final Logger logger = LoggerFactory.getLogger(WeatherApp.class);

    public static void main(String[] args) {
        SpringApplication.run(WeatherApp.class);
    }


    @Override
    public void run(String... args) throws Exception {
        logger.info("The weather today is...");
        double one = 46.806048;
        double two = -71.2442881;
        logger.info(weatherService.getCurrentWeather(one, two).toString());
    }
}
