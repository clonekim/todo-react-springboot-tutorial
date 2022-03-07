package com.koreanair.todo.controller;

import com.koreanair.todo.entity.Todo;
import com.koreanair.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {


    @Autowired
    TodoRepository todoRepository;

    @GetMapping
    public List<Todo> getAllTodo() {
        return todoRepository.findAll();
    }


    @PostMapping
    public Todo createTodo(@Valid @RequestBody Todo todo) {
        return todoRepository.save(todo);
    }


    @PutMapping("{id}")
    public Todo updateTodo(@PathVariable("id") Integer id, @Valid @RequestBody Todo param) {
        return todoRepository.findById(id)
                .map( todo -> {
                    todo.setText(param.getText());
                    todo.setDone(param.isDone());
                    todoRepository.saveAndFlush(todo);
                    return todo;
                }).orElse(null);

    }

    @DeleteMapping("{id}")
    public void deleteTodo(@PathVariable("id") Integer id) {
        todoRepository.deleteById(id);
    }



}
