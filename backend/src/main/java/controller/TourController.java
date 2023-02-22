package controller;

import model.Tour;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.TourService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TourController {

    TourService tourService;

    public TourController(TourService tourService){
        this.tourService = tourService;
    }

    @GetMapping("/tours")
    public List<Tour> getAllTours(){
        return tourService.getTourList();
    }


}
