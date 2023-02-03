package com.example.devlog_backend.Service;

import com.example.devlog_backend.Entity.UserPrompt;
import com.example.devlog_backend.Repository.UserPromptRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPromptService {

    @Autowired
    UserPromptRepo userPromptRepo;
    public void saveUserPrompt(Long id, Integer day, Integer month, Integer year, String title, String promptValue){

        UserPrompt newUserPrompt = new UserPrompt();
        newUserPrompt.setId(id);
        newUserPrompt.setDays(day);
        newUserPrompt.setMonths(month);
        newUserPrompt.setYears(year);
        newUserPrompt.setTitle(title);
        newUserPrompt.setPromptValue(promptValue);

        userPromptRepo.save(newUserPrompt);
        System.out.println("UserPromptService: Saved User Prompt");
    }

    public List<UserPrompt> getUserPrompts(){
        System.out.println("UserPromptService: Finding All User Prompts");
        return userPromptRepo.findAll();
    }

}
