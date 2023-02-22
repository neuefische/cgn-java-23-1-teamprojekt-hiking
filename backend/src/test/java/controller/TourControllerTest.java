package controller;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest(classes = TourControllerTest.class)
@AutoConfigureMockMvc
public class TourControllerTest {
    @Autowired
    MockMvc mockMvc;



    @Test

    void getAllTours() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:8080/api/tours"))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk())
                .andExpect(MockMvcResultMatchers
                        .content().json("""
                        
"""

                        ));

    }
}