package de.trailmate.backend.service;

import de.trailmate.backend.model.Tour;
import de.trailmate.backend.repository.TourRepository;
import org.springframework.stereotype.Service;

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

}
