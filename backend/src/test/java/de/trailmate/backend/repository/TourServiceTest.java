package de.trailmate.backend.repository;

import de.trailmate.backend.model.Tour;
import de.trailmate.backend.model.TourDTO;
import de.trailmate.backend.service.IdService;
import de.trailmate.backend.service.TourService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class TourServiceTest {

    TourRepository tourRepository = mock(TourRepository.class);
    IdService idService = mock(IdService.class);
    TourService tourService = new TourService(tourRepository, idService);


    Tour testItem = new Tour("1", "fancy TestTour", "fancy tour for experts", 50.95554563841488, 6.940264471365975, 50.94339660284997, 6.950264291165975, "expert");
    TourDTO testItem2 = new TourDTO("fancy TestTour", "fancy tour for experts", 50.95554563841488, 6.940264471365975, 50.94339660284997, 6.950264291165975, "expert");


    @Test
    void isGetAllToursResponseCorrectly() {

        when(tourRepository.findAll())
                .thenReturn(Collections.singletonList(testItem));

        List<Tour> actual = tourService.getTourList();

        Assertions.assertThat(actual)
                .containsExactly(testItem);

    }
    @Test
    void isGetSingleTourResponseCorrectly() {


        when(tourRepository.findById("1"))
                .thenReturn(Optional.ofNullable((testItem)));

        Tour actual = tourService.getSingleTour("1");

        Assertions.assertThat(actual).isEqualTo(testItem);

    }

    @Test
    void isAddTourAddingCorrectly() {
        when(idService.generateId()).thenReturn("1");

        when(tourRepository.save(testItem))
                .thenReturn((testItem));


        Tour actual = tourService.addTour(testItem2);

        Assertions.assertThat(actual).isEqualTo(testItem);

    }

    @Test
    void getSingleTourWithoutExistingIdGivesErrorCorrectly() {
        String result = "";
        try {
            tourService.getSingleTour("");
        } catch (Exception e) {
            result = e.getMessage();
        }

        Assertions.assertThat(result).isEqualTo("409 CONFLICT");
    }

}