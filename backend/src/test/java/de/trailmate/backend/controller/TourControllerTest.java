package de.trailmate.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.trailmate.backend.model.Tour;
import de.trailmate.backend.repository.TourRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
public class TourControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private TourRepository tourRepository;

    ObjectMapper mapper = new ObjectMapper();

    Tour testTour = new Tour("1","DGHDsgdhsdg", "fancy tour for experts", 50.95554563841488, 6.94026447165975, 50.94339660284997, 6.950264291165975 , "expert");



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



        tourRepository.addTour(testTour);

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
                .andExpect(MockMvcResultMatchers
                        .content().json(jsonObj));

    }


    @Test
    @DirtiesContext
    void whenDuplicateTourAdded_ThenStatusConflict() throws Exception {

        String jsonObj = mapper.writeValueAsString(testTour);

        mockMvc.perform(MockMvcRequestBuilders
                .post("/api/tours/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonObj));


            mockMvc.perform(MockMvcRequestBuilders
                            .post("/api/tours/add")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(jsonObj))
                    .andExpect(status().isConflict());

    }
}