package de.trailmate.backend.controller;

import de.trailmate.backend.service.TourService;
import de.trailmate.backend.model.Tour;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api")
public class TourController {

    private final TourService tourService;

    public TourController(TourService tourService){
        this.tourService = tourService;
    }

    @GetMapping("/tours")
    public List<Tour> getAllTours(){
        return tourService.getTourList();
    }

    @GetMapping("/tours/{id}")
    public Tour getTourDetails(@PathVariable String id){
        return tourService.getSingleTour(id);
    }

    @PostMapping("/tours/add")
    public Tour addTour(@RequestBody Tour tour){
        return tourService.addTour(tour);
    }


}
