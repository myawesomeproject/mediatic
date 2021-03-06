package fr.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


public class GenericDAO<T> {

	@PersistenceContext 
	protected EntityManager em;	
	
    private Class<T> klass;

    public GenericDAO(Class<T> klass) {
        this.klass = klass;
    }

    public T find(Long id) {
        T t = em.find(klass, id);
        em.close();
        return t;
    }

    public void persist(T t) {
            em.persist(t);
    }

    public T merge(T t) {     
            em.merge(t);
            return t;
    }

    public void remove(Long id) {
            em.remove(em.find(klass, id));
            
    }
}
