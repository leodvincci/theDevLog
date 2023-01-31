package com.example.devlog_backend.Controller;

import com.example.devlog_backend.Entity.Prompt;
import com.example.devlog_backend.Service.PromptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PromptController {

    @Autowired
    PromptService promptService;

    @CrossOrigin
    @PostMapping("/addPrompt")
    public void addPrompt(@RequestBody Prompt prompt){
        promptService.createNewPrompt(prompt.getTitle(),prompt.getId());
        System.out.println("controller: added prompt");
    }

    @CrossOrigin
    @GetMapping("/getPrompts")
    public List<Prompt> getPrompts(){
        return promptService.getAllPrompts();
    }


}
