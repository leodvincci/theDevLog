package com.example.devlog_backend.Entity;

import jakarta.persistence.*;

@Entity
public class Prompt {


    @Id
    @SequenceGenerator(
            name = "my_sequence",
            sequenceName = "my_sequence",
            allocationSize = 1
    )
            @GeneratedValue(
                    strategy = GenerationType.SEQUENCE,
                    generator = "my_sequence"
            )

    Long id;
    String title;

    public Prompt(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public Prompt() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
