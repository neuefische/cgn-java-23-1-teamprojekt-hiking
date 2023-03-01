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
public class Tour {
    @Id
    String id;
    String title;
    String description;
    double startLongitude;
    double startLatitude;
    double endLongitude;
    double endLatitude;
    String category;


    public Tour(TourRequestModel tourRequestModel) {
        this.id = tourRequestModel.id;
        this.title = tourRequestModel.title;
        this.description = tourRequestModel.description;
        this.startLatitude = tourRequestModel.startLatitude;
        this.startLongitude = tourRequestModel.startLongitude;
        this.endLongitude = tourRequestModel.endLongitude;
        this.endLatitude = tourRequestModel.endLatitude;
        this.category = tourRequestModel.category;
    }
}
