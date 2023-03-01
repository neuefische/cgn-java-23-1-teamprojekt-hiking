package de.trailmate.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document("tours")
public class TourRequestModel {
    @Id
    String id;
    String title;
    String description;
    double startLongitude;
    double startLatitude;
    double endLongitude;
    double endLatitude;
    String category;
}


