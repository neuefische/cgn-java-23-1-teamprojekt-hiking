package de.trailmate.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class TourDTO {
    String title;
    String description;
    double startLongitude;
    double startLatitude;
    double endLongitude;
    double endLatitude;
    String category;
}


