package com.example.devlog_backend.Service;

import com.example.devlog_backend.Entity.Prompt;
import com.example.devlog_backend.Repository.PromptRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromptService {

    @Autowired
    PromptRepo promptRepo;

    public void createNewPrompt(String promptTitle,Long id){
        Prompt aPrompt = new Prompt(id,promptTitle);
        promptRepo.save(aPrompt);
        System.out.println("service: saved prompt");

    }

    public List<Prompt> getAllPrompts(){
        return promptRepo.findAll();
    }

}
