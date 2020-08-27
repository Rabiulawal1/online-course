import React from 'react';
import {useState} from 'react';
import './Body.css';
import fakeData from '../../../fakeData/fakeData';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Body = () => {
    
    const courseData = fakeData;
    const [course, setCourse] = useState(courseData);

    const [cart, setCart] = useState([]);

    const addButton = (course) =>{
        console.log("add",course);
        const newCart = [...cart,course];
        setCart(newCart);

    }
    
    

    return (
        <div className='body'>
            <div className='body-part'>
              
                  {
                      course.map(course => <Course
                      addButton = {addButton}
                      >{course}</Course>)
                  }
            </div>
            <div className='cart-part'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;