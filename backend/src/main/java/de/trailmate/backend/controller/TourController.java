package de.trailmate.backend.controller;

import de.trailmate.backend.model.Tour;
import de.trailmate.backend.model.TourDTO;
import de.trailmate.backend.service.TourService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
    public Tour getTourDetails(@PathVariable String id) {
        return tourService.getSingleTour(id);
    }

    @PostMapping("/tours/add")
    public Tour addTour(@RequestBody TourDTO tourRequestModel) {
        return tourService.addTour(tourRequestModel);
    }

    @PutMapping("/tours/{id}")
    public Tour updateTour(@PathVariable String id, @RequestBody TourDTO tourRequestModel) {
            return tourService.updateTour(id, tourRequestModel);
    }

}


