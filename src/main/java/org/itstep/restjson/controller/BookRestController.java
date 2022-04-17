package org.itstep.restjson.controller;

import org.itstep.restjson.model.Book;
import org.itstep.restjson.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

@RestController

public class BookRestController {

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public List<Book> getBooks() {
        //System.out.println("hello");
        return bookService.getBooks();
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id) {
        try {
            Book book = bookService.getBookById(id);
            return new ResponseEntity<Book>(book, HttpStatus.OK);
        }
        catch (NoSuchElementException e) {
            return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/books")
    public void addBook(@RequestBody Book book) throws IOException {
        bookService.addBook(book);
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<?> updateBook(@RequestBody Book book, @PathVariable int id){
        try {
            book.setId(id);
            bookService.updateBook(book);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch (NoSuchElementException | IOException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/books/{id}")
    public void deleteBook(@PathVariable int id) throws IOException {
        bookService.deleteBook(id);
    }
}
