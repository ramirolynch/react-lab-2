import { useState } from "react";
import { Post } from "./Post";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export function PostForm (props : {onSubmit:(post:Post)=>void, onClose:()=>void}) {



 function onSubmitHandler(e:any) {
     e.preventDefault()

     const newPost = {
         title:e.target[0].value,
         thought:e.target[1].value,
         votes:0
     }
     props.onSubmit(newPost)
    
 }

 function onCloseHandler (){
     props.onClose();
 }


    return (
        <div>

        <form onSubmit={onSubmitHandler}>
            <label htmlFor="title">
                Title
            <input id='title' type="text" autoFocus />
            </label>
   
            <label htmlFor="thought">
                Thought
            <textarea id='thought' />
            </label>
            <button type='submit'>Add Post</button>
            <button onClick={onCloseHandler} className='cancelBtn'><span className="material-icons">cancel</span></button>
        </form>
        
        </div>
    );



}