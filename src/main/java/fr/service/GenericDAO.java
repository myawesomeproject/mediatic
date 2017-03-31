package fr.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

<<<<<<< HEAD
=======

>>>>>>> 1f451bb72151d6d72005eb063b085d96d8619cfa
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
