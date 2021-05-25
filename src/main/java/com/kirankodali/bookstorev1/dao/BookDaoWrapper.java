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
	
	// Method to return all the books
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
	
	

}
