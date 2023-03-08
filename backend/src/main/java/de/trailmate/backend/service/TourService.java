package de.trailmate.backend.service;

import de.trailmate.backend.model.Tour;
import de.trailmate.backend.model.TourDTO;
import de.trailmate.backend.repository.TourRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TourService {

    private final TourRepository tourRepository;
    private final IdService idService;

    public TourService(TourRepository tourRepository, IdService idService) {
        this.tourRepository = tourRepository;
        this.idService = idService;
    }

    public List<Tour> getTourList() {
        return tourRepository.findAll();
    }

    public Tour getSingleTour(String id) {

        Optional<Tour> singleTour = tourRepository.findById(id);
        if (singleTour.isPresent()) {
            return singleTour.get();
        } else {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        }
    }

    public Tour addTour(TourDTO tourRequestModel) {
        Tour tour = new Tour(tourRequestModel);
        tour.setId(idService.generateId());
        try {
            return tourRepository.save(tour);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        }
    }

    public Tour updateTour(String id, TourDTO tourRequestModel) {
        Tour tourToUpdate = tourRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.CONFLICT));

        if (tourToUpdate != null) {
                Tour newTour = new Tour(tourRequestModel);
                newTour.setId(id);
                tourRepository.save(newTour);
                return newTour;
        } else {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        }


    }


}
