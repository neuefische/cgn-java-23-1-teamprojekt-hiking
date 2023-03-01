package de.trailmate.backend.service;

import de.trailmate.backend.model.Tour;
import de.trailmate.backend.repository.TourRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Optional;

@Service
public class TourService {

    private final TourRepository tourRepository;

    public TourService(TourRepository tourRepository){

        this.tourRepository = tourRepository;

    }

    public List<Tour> getTourList() {
        return tourRepository.findAll();
    }

    public Tour getSingleTour(String id) {

        Optional<Tour> single_tour = tourRepository.findById(id);
        if (single_tour.isPresent()) {
            return single_tour.get();
        } else {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        }
    }

    public Tour addTour(Tour tour){
        tour.setId(IdService.generateId());
       try {
           return tourRepository.save(tour);
       }
       catch (IllegalArgumentException e){
           throw new ResponseStatusException(HttpStatus.CONFLICT);
       }
    }


}
