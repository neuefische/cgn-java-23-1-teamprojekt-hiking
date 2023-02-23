package de.trailmate.backend.repository;

import de.trailmate.backend.model.Tour;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@NoArgsConstructor
@AllArgsConstructor
@Data

@Repository
public class TourRepository {

    private Map<String, Tour> tourList = new HashMap<>();




    public List<Tour> getAllTours(){
        return tourList.values().stream().toList();
    }


    public Tour getSingleTour(String id) {
       return tourList.get(id);
    }

    public Tour addTour(Tour tour){
       return tourList.put(tour.getId(), tour);
    }
}
