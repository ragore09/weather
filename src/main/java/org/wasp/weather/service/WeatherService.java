package org.wasp.weather.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.wasp.weather.domain.Status;

@Service
public class WeatherService {
    

    private RestTemplate restTemplate;


    public WeatherService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
    
    public Status getCurrentWeather(double latitude, double longitude) {
        return restTemplate.getForObject(
                "http://api.openweathermap.org/data/2.5/weather?lat=19.4130259&lon=-99.1666459&appid=061b63993c428bfa06aaccdd998f94a0"
                , Status.class);
    }

    
}
