import React from "react";
import "./Photos.css";

 export default function Photos (props){
    if (props.photos) {
    return (
        <section className="Photos">
            <div className="row"/>
            {props.photos.map(function (Photos, index){
            return(
                <div className="col-4" key={index}>
                  <a href={Photos.src.original}  target="_blank" rel="noreferrer">            <img src={Photos.src.landscape} 
             className="img-fluid"/>
             </a>
       </div>
            );
    })}
 </section>
    );
 } else {
    return null;
 }
 }