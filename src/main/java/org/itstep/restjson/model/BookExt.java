package org.itstep.restjson.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class BookExt {
    private String title;
    private int year;
    private String author;
    private String country;
    private String imageLink;
    private String language;
    private String link;
    private int pages;


}
