package org.itstep.restjson;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestJsonApplication {

    public static void main(String[] args) {
       /* Book book = new Book(1, "Title","123-123",2020,     ПРОВЕРКА
                new String[]{"Author"});
        System.out.println(Arrays.toString(book.getAuthors()));*/
        SpringApplication.run(RestJsonApplication.class, args);
    }

}
