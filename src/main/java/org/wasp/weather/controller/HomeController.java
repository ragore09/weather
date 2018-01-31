package org.wasp.weather.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.wasp.weather.domain.Status;
import org.wasp.weather.service.WeatherService;

@Controller
public class HomeController {
    
    private WeatherService weatherService;

    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    public HomeController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @RequestMapping(value = "/")
    public String index() { 
        return "index";
    }
    
    @RequestMapping(value = "/getLocation")
    public @ResponseBody Status getLocation(@RequestParam("lat") Double latitude, 
                                            @RequestParam("lon") Double longitude) {
        logger.info("im here");
        Status status = weatherService.getCurrentWeather(latitude, longitude);
        logger.info(status.toString());
        return status;
//        return "";
    }
    
}
