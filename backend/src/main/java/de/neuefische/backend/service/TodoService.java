package de.neuefische.backend.service;

import de.neuefische.backend.model.TodoItem;
import de.neuefische.backend.repo.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private TodoRepo todoRepo;
    @Autowired
    public TodoService(TodoRepo todoRepo) {
        this.todoRepo = todoRepo;
    }

    public TodoItem add(TodoItem todoItem){
        return todoRepo.add(todoItem);
    }

    public List<TodoItem> list() {
        return todoRepo.list();
    }

    public void updateStatus(int id,String status) {
      todoRepo
              .getById(id)
              .setStatus(status);
    }


}
