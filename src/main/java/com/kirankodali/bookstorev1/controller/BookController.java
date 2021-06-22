package com.kirankodali.bookstorev1.controller;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kirankodali.bookstorev1.business.bean.BookBean;
import com.kirankodali.bookstorev1.service.BookService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

	@Autowired
	private BookService bookService;
	
	/**
	 * @return a response entity containing all the books available
	 */
	@GetMapping(path = "books")
	public ResponseEntity<List<BookBean>> getAllBookDetails(){
		List<BookBean> bookBeanList = new ArrayList<BookBean>();
		try {
			bookBeanList = bookService.getAllBookDetails();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<List<BookBean>>(bookBeanList, HttpStatus.OK);
	}
	
	/**
	 * @param bookBean: details of book to be added.
	 * @return response entity containing the bookId created.
	 */
	@PostMapping(path="book")
	public ResponseEntity<Integer> createNewBook(@RequestBody BookBean bookBean){
		Integer bookId = null;
		try {
			bookId = bookService.uploadNewBook(bookBean);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Integer>(bookId, HttpStatus.OK);
	}
	
	/**
	 * @param bookId: book id to be deleted
	 * @return returns a message deleted upon successful deletion of the book
	 */
	@DeleteMapping(path = "book")
	public ResponseEntity<String> deleteBookById(@RequestBody LinkedHashMap<String, Integer> bookId){
//		System.out.println(bookId.get("bookId"));
		
		try {
			bookService.deleteBookById((Integer)bookId.get("bookId"));
		} catch (Exception e) {
			e.printStackTrace();
			new ResponseEntity<String>("error", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>("deleted", HttpStatus.OK);
	}
	
	/**
	 * @param bookBean: contains the book details that need to be updated.
	 * @return a string(message) upon updating book details successfully.
	 */
	@PutMapping(path="book")
	public ResponseEntity<String> updateBookDetails(@RequestBody BookBean bookBean){
		try {
			bookService.updateBookDetails(bookBean);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new ResponseEntity<String>("error", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<String>("updated", HttpStatus.OK);
	}

}
