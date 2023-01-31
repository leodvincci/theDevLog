package com.example.devlog_backend.Controller;

import com.example.devlog_backend.Entity.UserPrompt;
import com.example.devlog_backend.Service.UserPromptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserPromptController {

    @Autowired
    UserPromptService userPromptService;

    @PostMapping("/saveUserPrompt")
    public void saveUserPrompt(@RequestBody UserPrompt userPrompt){
        userPromptService.saveUserPrompt(userPrompt.getId(),userPrompt.getDays(),userPrompt.getMonths(),userPrompt.getYears(),userPrompt.getTitle(),userPrompt.getPromptValue());
        System.out.println("Controller: Saved User Prompt");
    }

}
