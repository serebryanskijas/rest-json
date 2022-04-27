package org.itstep.restjson.service;

import org.itstep.restjson.model.Book;
import org.itstep.restjson.repo.BookRepo;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    private BookRepo bookRepo =
            new BookRepo("src\\main\\resources\\static\\book.json");

    public List<Book> getBooks() {
        return bookRepo.getAllBooks();

    }

    public Book getBookById(int id) {
        return bookRepo.getBookById(id);
    }

    public void addBook(Book book) throws IOException {
        bookRepo.addBook(book);
    }

    public void updateBook(Book book) throws IOException {
        bookRepo.updateBook(book);
    }

    public void deleteBook(int id) throws IOException {
        bookRepo.deleteBook(id);
    }

    public List<Book> getBookPage(int limit, int offset) {
        return bookRepo.getBookPage(limit, offset);
    }

    public List<Book> searchBook(String title) {
        return bookRepo.searchBook(title);
    }
}
