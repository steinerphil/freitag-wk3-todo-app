package de.neuefische.backend.controller;

import de.neuefische.backend.model.TodoItem;
import de.neuefische.backend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

   private TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<TodoItem> listAll(){
        return todoService.list();
    }

    @PostMapping
    public TodoItem addToDoItem(@RequestBody TodoItem todoItem){
        return todoService.add(todoItem);
    }

    @PutMapping("{id}")
    public TodoItem updateStatus(@PathVariable int id, @RequestBody TodoItem todoItem){
       return todoService.updateStatus(id,todoItem.getStatus());
    }
    @DeleteMapping("{id}")
    public void deleteItem(@PathVariable int id){
        todoService.deleteItem(id);
    }


}
