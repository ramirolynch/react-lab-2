import { useState } from 'react';
import { Post } from './Post'

interface Props {
    post:Post;
    onDelete:()=>void;
    upVote:()=>void;

}

export function PostInList({post, onDelete, upVote}:Props) {



    return (
      <li>
          <div>
              <h2>{post.title}</h2>
              <p>{post.thought}</p>
              <p>{post.votes}</p>
          </div>
          <button onClick={onDelete}><span className="material-icons">delete</span></button>
          <button onClick={upVote}><span className="material-icons">favorite_border</span></button>
      </li>
    );

}