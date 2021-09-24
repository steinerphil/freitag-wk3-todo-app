package de.neuefische.backend.controller;

import de.neuefische.backend.model.TodoItem;
import de.neuefische.backend.repo.TodoRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;
    @Autowired
    private TodoRepo todoRepo;

    @BeforeEach
    public void clear(){
        todoRepo.clear();
    }

    @Test
    void addToDoItemTest() {
        //Given
        String URL="http://localhost:"+port+"/api/todo";
        //When
        ResponseEntity<TodoItem> response=testRestTemplate.postForEntity(URL,new TodoItem("Title","OPEN"),TodoItem.class);
        //Then
        assertThat(response.getStatusCode(),is(HttpStatus.OK));
        assertThat(response.getBody(),is(new TodoItem(1,"Title","OPEN")));
    }

    @Test
    void updateStatus() {
        //Given
        String URL="http://localhost:"+port+"/api/todo/1";
        TodoItem todoItem=new TodoItem(1,"Title","OPEN");
        todoRepo.add(todoItem);
        //When
        HttpEntity<TodoItem> entity=new HttpEntity<>(todoItem);
        ResponseEntity<TodoItem> response1=testRestTemplate.exchange(URL, HttpMethod.PUT,entity,TodoItem.class);

        //Then
        assertThat(response1.getStatusCode(), is(HttpStatus.OK));

    }

    @Test
    void deleteItem() {

      //Given
        todoRepo.add(new TodoItem("Test1", "OPEN"));
        todoRepo.add(new TodoItem("Test2", "OPEN"));


        String URL="http://localhost:"+port+"/api/todo/1";

        //WHEN
        testRestTemplate.delete(URL);

        //THEN

        assertThat(todoRepo.getById(2),is(new TodoItem(2, "Test2","OPEN")));
        assertFalse(todoRepo.list().contains(new TodoItem(1, "Test1", "OPEN")));
    }
    }


