package de.trailmate.backend.repository;

import de.trailmate.backend.model.Tour;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Repository
public class TourRepository {

    Map<String, Tour> tourList = new HashMap<String, Tour>();

    public List<Tour> getAllTours(){
        return tourList.values().stream().toList();
    }


}
