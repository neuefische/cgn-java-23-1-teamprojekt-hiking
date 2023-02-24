package de.trailmate.backend.service;

import de.trailmate.backend.model.Tour;
import de.trailmate.backend.repository.TourRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@Service
public class TourService {

    private final TourRepository tourRepository;

    public TourService(TourRepository tourRepository){

        this.tourRepository = tourRepository;

    }

    public List<Tour> getTourList() {
        return tourRepository.getAllTours();
    }

    public Tour getSingleTour(String id) {

        return tourRepository.getSingleTour(id);

    }

    public Tour addTour(Tour tour){
       try {
           return tourRepository.addTour(tour);
       }
       catch (IllegalArgumentException e){
           throw new ResponseStatusException(HttpStatus.CONFLICT);
       }
    }


}
