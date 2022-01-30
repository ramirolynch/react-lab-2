import { useState } from 'react';
import { Post } from './Post'

interface Props {
    post:Post;
    onDelete:()=>void;

}

export function PostInList({post, onDelete}:Props) {

    // const [item, setItem] = useState(true)


    return (
      <li>
          <div>
              <h2>{post.title}</h2>
              <p>{post.thought}</p>
          </div>
          <button onClick={onDelete} >Delete</button>
      </li>
    );

}