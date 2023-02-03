package com.example.devlog_backend.Controller;

import com.example.devlog_backend.Entity.UserPrompt;
import com.example.devlog_backend.Service.UserPromptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserPromptController {

    @Autowired
    UserPromptService userPromptService;

    @CrossOrigin
    @PostMapping("/saveUserPrompt")
    public void saveUserPrompt(@RequestBody UserPrompt userPrompt){
        userPromptService.saveUserPrompt(userPrompt.getId(),userPrompt.getDays(),userPrompt.getMonths(),userPrompt.getYears(),userPrompt.getTitle(),userPrompt.getPromptValue());
        System.out.println("Controller: Saved User Prompt");
    }


    @CrossOrigin
    @GetMapping("/getUserPrompts")
    public List<UserPrompt> getUserPrompt(){
        System.out.println("UserPromptController: Getting User Prompts");
        return userPromptService.getUserPrompts();
    }

}
