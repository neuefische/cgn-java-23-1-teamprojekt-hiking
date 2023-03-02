package de.trailmate.backend.repository;

import de.trailmate.backend.model.Tour;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TourRepository extends MongoRepository <Tour, String> {

}
