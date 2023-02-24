package de.trailmate.backend.repository;

import de.trailmate.backend.model.Tour;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import de.trailmate.backend.service.TourService;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;

class TourServiceTest {

    TourRepository tourRepository = mock(TourRepository.class);
    TourService tourService = new TourService(tourRepository);

    Tour testItem = new Tour("1","fancy TestTour", "fancy tour for experts", 50.95554563841488, 6.940264471365975, 50.94339660284997, 6.950264291165975 , "expert");


    @Test
    void isGetAllToursResponseCorrectly() {

        Mockito.when(tourRepository.getAllTours())
                .thenReturn(Collections.singletonList(testItem));

        List<Tour> actual = tourService.getTourList();

        Assertions.assertThat(actual)
                .containsExactly(testItem);

    }
    @Test
    void isGetSingleTourResponseCorrectly() {


        Mockito.when(tourRepository.getSingleTour("1"))
                .thenReturn((testItem));

        Tour actual = tourService.getSingleTour("1");

        Assertions.assertThat(actual).isEqualTo(testItem);

    }

    @Test
    void isAddTourAddingCorrectly() {

        Mockito.when(tourRepository.addTour(testItem))
                .thenReturn((testItem));

        Tour actual = tourService.addTour(testItem);

        Assertions.assertThat(actual).isEqualTo(testItem);

    }
    

}