package com.koreanair.todo;

import com.koreanair.todo.entity.Todo;
import com.koreanair.todo.repository.TodoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class TodoRepositoryTest {

    @Autowired
    TodoRepository todoRepository;


    @Test
    public void insertTodo() {


        Todo todo = new Todo();
        todo.setDone(true);
        todo.setText("Hello World");

        todoRepository.save(todo);

        System.out.println(todo.getId());

    }


    @Test
    public void getTodo() {
         todoRepository.findById(2)
                 .ifPresent(todo -> {

                     System.out.println(todo.isDone());
                 });
    }

}
