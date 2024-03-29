package com.kirankodali.bookstorev1.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirankodali.bookstorev1.business.bean.BookBean;
import com.kirankodali.bookstorev1.entity.BookEntity;

@Repository
public class BookDaoWrapper {
	
	@Autowired
	private BookDao bookDao;
	
	// 
	/**
	 * Method to return all the books
	 * @return The list of books available
	 */
	public List<BookBean> getAllBookDetails(){
		List<BookBean> bookBeanList = new ArrayList<>();
		List<BookEntity> bookEntityList = bookDao.findAll();
		
		// Convert entity class to bean class 
		bookEntityList.forEach((bookEntity)->{
			BookBean bookBean = new BookBean();
			BeanUtils.copyProperties(bookEntity, bookBean);
			bookBeanList.add(bookBean);
		});
		return bookBeanList;
	}
	
	/**
	 * @param bookBean: bean to upload new book
	 * @return bookId the id of newly created book
	 */
	public Integer uploadNewBook(BookBean bookBean) {
		
		// Convert BookBean to BookEntity
		BookEntity bookEntity = new BookEntity();
		BeanUtils.copyProperties(bookBean, bookEntity);
		
		bookEntity = bookDao.save(bookEntity);
		
		return bookEntity.getBookId();
	}
	
	/**
	 * Method to delete a book by its id
	 * @param bookId: delete the book based on the book ID
	 * 
	 */
	public void deleteBookById(Integer bookId) {
		bookDao.deleteById(bookId);
	}
	
	public void updateBookDetails(BookBean bookBean) {
		BookEntity bookEntity = new BookEntity();
		BeanUtils.copyProperties(bookBean, bookEntity);
		BookEntity oldBook = new BookEntity();
		oldBook = bookDao.getById(bookEntity.getBookId());
		oldBook.setAuthor(bookEntity.getAuthor());
		oldBook.setBookTitle(bookEntity.getBookTitle());
		oldBook.setCategory(bookEntity.getCategory());
		oldBook = bookDao.save(oldBook);
//		return oldBook.getBookId();
	}
}
