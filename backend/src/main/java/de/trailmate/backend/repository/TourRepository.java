package de.trailmate.backend.repository;

import de.trailmate.backend.model.Tour;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;
import java.util.*;


@NoArgsConstructor
@Data

@Repository
public class TourRepository {

    private Map<String, Tour> tourList = new HashMap<>();


    public List<Tour> getAllTours(){
        return tourList.values().stream().toList();
    }


    public Tour getSingleTour(String id) throws NoSuchElementException {

        Optional<Tour> singleTour = Optional.ofNullable(tourList.get(id));

        if(singleTour.isPresent()){
            return singleTour.get();
        }

           throw new NoSuchElementException("Tour does not exist");

    }

    public Tour addTour(Tour tour)  {
        if(tourList.containsKey(tour.getId())) {
            throw new IllegalArgumentException("The Element already exists");
        }
       tourList.put(tour.getId(), tour);
       return tour;
    }


}
