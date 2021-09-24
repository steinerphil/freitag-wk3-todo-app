package de.neuefische.backend.repo;

import de.neuefische.backend.model.TodoItem;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class TodoRepo {
    Map<Integer, TodoItem> todoRepo =new HashMap<>();
    private int id=1;


    private int generateId(){
        return id++;
    }
    public TodoItem add(TodoItem todoItem){
        todoItem.setId(generateId());
        //System.out.println(todoItem);
        todoRepo.put(todoItem.getId(),todoItem);
        System.out.println(todoItem);
        return todoItem;
    }

    public List<TodoItem> list() {
        return new ArrayList<>(todoRepo.values());
    }

    public TodoItem getById(int id) {
        return todoRepo.get(id);
    }

    public void deleteItem(int id) {
        todoRepo.remove(id);
    }
}
