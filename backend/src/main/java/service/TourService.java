package service;

import model.Tour;
import org.springframework.stereotype.Service;
import repository.TourRepository;

import java.util.List;

@Service
public class TourService {

    private TourRepository tourRepository;

    public TourService(TourRepository tourRepository){

        this.tourRepository = tourRepository;

    }

    public List<Tour> getTourList() {
        return tourRepository.getAllTours();
    }

}
