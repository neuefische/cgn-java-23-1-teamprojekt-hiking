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
}