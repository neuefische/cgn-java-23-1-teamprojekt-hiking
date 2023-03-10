package de.trailmate.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.trailmate.backend.model.Tour;
import de.trailmate.backend.repository.TourRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Optional;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;


@SpringBootTest
@AutoConfigureMockMvc
class TourControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private TourRepository tourRepository;

    ObjectMapper mapper = new ObjectMapper();

    Tour testTour = new Tour("1", "DGHDsgdhsdg", "fancy tour for experts", 50.95554563841488, 6.94026447165975, 50.94339660284997, 6.950264291165975, "expert");


    @Test
    void whenGetAllTours_ThenReturnEmptyList() throws Exception {


        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/tours"))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk())
                .andExpect(MockMvcResultMatchers
                        .content().json("""
                                                        
                                        []
                                                        
                                """));

    }


    @Test
    void whenGetSingleTour_ThenReturnSingleTour() throws Exception {


        tourRepository.save(testTour);

        String jsonObj = mapper.writeValueAsString(testTour);


        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/tours/1"))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk())
                .andExpect(MockMvcResultMatchers
                        .content().json(jsonObj));


    }

    @Test
    @DirtiesContext
    void whenAddTourisCalled_isTourAddedCorrectlyAndReturnAddedTour() throws Exception {


        String jsonObj = mapper.writeValueAsString(testTour);


        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/tours/add")
                        .contentType(MediaType.APPLICATION_JSON).
                        content(jsonObj))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk())
                .andExpect(jsonPath("$.title").value("DGHDsgdhsdg"));

    }

    @Test
    @DirtiesContext
    void whenUpdateTourCalled_isTourUpdatedCorrectly() throws Exception {

      testTour.setId("bd4d11c5-8760-4f99-9020-958e10941fab");
      tourRepository.save(testTour);

        String jsonObj = """
            {
            "title": "DGHDsgdhsdg",
            "description": "fancy tour for experts",
            "startLongitude": 50.95554563841488,
            "startLatitude": 6.94026447165975,
            "endLongitude": 50.94339660284997,
            "endLatitude": 6.950264291165975,
            "category": "expert"
            }
        """;

        mockMvc.perform(MockMvcRequestBuilders
                        .put("/api/tours/bd4d11c5-8760-4f99-9020-958e10941fab")
                        .contentType(MediaType.APPLICATION_JSON).
                        content(jsonObj))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk())
                .andExpect(jsonPath("$.title").value("DGHDsgdhsdg"))
                .andExpect(jsonPath("$.id").value("bd4d11c5-8760-4f99-9020-958e10941fab"))
        ;
    }

    @Test
    @DirtiesContext
    void whenTourDeleted_isTourActuallyDeleted() throws Exception{
        testTour.setId("bd4d11c5-8760-4f99-9020-958e10941fab");
        tourRepository.save(testTour);

        String jsonObj = """
            {
            "title": "DGHDsgdhsdg",
            "description": "fancy tour for experts",
            "startLongitude": 50.95554563841488,
            "startLatitude": 6.94026447165975,
            "endLongitude": 50.94339660284997,
            "endLatitude": 6.950264291165975,
            "category": "expert"
            }
        """;

        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/api/tours/delete/bd4d11c5-8760-4f99-9020-958e10941fab")
                        .contentType(MediaType.APPLICATION_JSON).
                        content(jsonObj))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk());

        Assertions.assertEquals(Optional.empty(), tourRepository.findById(testTour.getId()));
    }

}
