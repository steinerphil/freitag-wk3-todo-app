package de.neuefische.backend.repo;

import de.neuefische.backend.model.TodoItem;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class TodoRepo {
    Map<Integer, TodoItem>todoDoing=new HashMap<>();
    private int id=1;


    private int generateId(){
        return id++;
    }
    public TodoItem add(TodoItem todoItem){
        todoItem.setId(generateId());
        //System.out.println(todoItem);
        todoDoing.put(todoItem.getId(),todoItem);
        System.out.println(todoItem);
        return todoItem;
    }

    public List<TodoItem> list() {
        return new ArrayList<>(todoDoing.values());
    }
}
