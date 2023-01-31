package com.example.devlog_backend.Repository;

import com.example.devlog_backend.Entity.Prompt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromptRepo extends JpaRepository <Prompt,Long> {


}
