package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoItem {
    int id;
    String description;
    String status;

    public TodoItem(String description,String status){
        this.description=description;
        this.status=status;
    }



}
