package de.trailmate.backend.repository;

import de.trailmate.backend.model.Tour;
import de.trailmate.backend.repository.TourRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import de.trailmate.backend.service.TourService;

import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.mock;

class TourServiceTest {

    TourRepository tourRepository = mock(TourRepository.class);
    TourService tourService = new TourService(tourRepository);


    @Test
    void isGetAllToursResponseCorrectly() {

        Tour testItem = new Tour("1","fancy TestTour");
        Mockito.when(tourRepository.getAllTours())
                .thenReturn(Collections.singletonList(testItem));

        List<Tour> actual = tourService.getTourList();

        Assertions.assertThat(actual)
                .containsExactly(testItem);

    }

}