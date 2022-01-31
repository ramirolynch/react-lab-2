import { useState } from "react";
import { Post } from "./Post";

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
            <input id='title' type="text"  />
            </label>
   
            <label htmlFor="thought">
                Thought
            <input id='thought' type="text" />
            </label>
            <button type='submit'>Add Post</button>
            <button onClick={onCloseHandler} className='cancelBtn'><span className="material-icons">cancel</span></button>
        </form>
        
        </div>
    );



}