import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Course = (props) => {

    console.log(props);
    return (
        <div>

            <div className="card mb-3" >
               <div className="row no-gutters shadow p-3 mb-5 bg-white rounded">
                    <div className="col-md-4">
                        <img src={props.children.img} className="card-img" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div class="card-body">
                            <h5 className="card-title">Course Name : {props.children.courseName}</h5>
                            <h5 className="card-title">Instructor Name : {props.children.instructor}</h5>
                            <h5 className="card-text">Course Price: {props.children.price} $ </h5> <br/> <br/>

                            <button className='btn btn-warning' onClick={() => props.addButton(props.children)}><FontAwesomeIcon icon={faBookReader} />Course enroll</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* <h1>{props.children.courseName}</h1>
           <h3>{props.children.price}</h3>
           <img src={props.children.img} alt=""/>
           <button className='btn btn-warning'>HI click me</button> */}
        </div>
    );
};

export default Course;