package com.example.devlog_backend.Repository;

import com.example.devlog_backend.Entity.UserPrompt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPromptRepo extends JpaRepository <UserPrompt, Long> {

}
