package de.trailmate.backend.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import de.trailmate.backend.model.Tour;
import de.trailmate.backend.repository.TourRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@AutoConfigureMockMvc
public class TourControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private TourRepository tourRepository;

    ObjectMapper mapper = new ObjectMapper();



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

        Tour testTour = new Tour("1","DGHDsgdhsdg", "fancy tour for experts", 50.95554563841488, 6.94026447165975, 50.94339660284997, 6.950264291165975 , "expert");

        tourRepository.addTour(testTour);

        String jsonObj = mapper.writeValueAsString(testTour);


        mockMvc.perform(MockMvcRequestBuilders
                        .get("/api/tours/1"))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk())
                .andExpect(MockMvcResultMatchers
                        .content().json(jsonObj));

        

    }
}