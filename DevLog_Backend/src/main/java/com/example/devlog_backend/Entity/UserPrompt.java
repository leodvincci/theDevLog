package com.example.devlog_backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
public class UserPrompt {


    @Id
    @SequenceGenerator(
            name = "my_sequence_2",
            sequenceName = "my_sequence_2",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "my_sequence_2"
    )
    Long id;
    Integer days;
    Integer months;
    Integer years;
    String title;
    String promptValue;

    public UserPrompt(Long id, Integer day, Integer month, Integer year, String title, String promptValue) {
        this.id = id;
        this.days = day;
        this.months = month;
        this.years = year;
        this.title = title;
        this.promptValue = promptValue;
    }

    public UserPrompt() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getDays() {
        return days;
    }

    public void setDays(Integer day) {
        this.days = day;
    }

    public Integer getMonths() {
        return months;
    }

    public void setMonths(Integer month) {
        this.months = month;
    }

    public Integer getYears() {
        return years;
    }

    public void setYears(Integer year) {
        this.years = year;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPromptValue() {
        return promptValue;
    }

    public void setPromptValue(String promptValue) {
        this.promptValue = promptValue;
    }
}
