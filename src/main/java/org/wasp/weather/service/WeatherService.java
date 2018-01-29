package org.wasp.weather.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.wasp.weather.config.OpenWeatherProperties;
import org.wasp.weather.domain.Status;

@Service
public class WeatherService {
    
    private RestTemplate restTemplate;
    private OpenWeatherProperties openWeatherProperties;
    
    public WeatherService(RestTemplate restTemplate, OpenWeatherProperties openWeatherProperties) {
        this.restTemplate = restTemplate;
        this.openWeatherProperties = openWeatherProperties;
    }
    
    public Status getCurrentWeather(double latitude, double longitude) {
        return restTemplate.getForObject("http://api.openweathermap.org/data/2.5/weather?lat=" 
                        + String.valueOf(latitude) +"&lon=" + String.valueOf(longitude) 
                        + "&appid=" + openWeatherProperties.getAppKey(),
                Status.class);
    }

    
}
