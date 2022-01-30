import { useState } from 'react';
import { Post } from './Post'
import { PostInList } from './PostInList';
import { PostForm } from './PostForm'
import { title } from 'process';


export function SocialPosts () {

const [posts, setPosts] = useState<Post[]>([
    {title:'First Post', thought:'had a great day today'}, 
    {title:'Yet another post', thought:'Why not? Second post'}, 
    {title:'Yet another post2', thought:'Why not? Second post2'}, 
]);

const [showForm, setShowForm] = useState(false)

function handleDelete(title:string) {

    console.log(title)
   
    setPosts(posts.filter((post)=> post.title != title));
}

function handleClick() {
    setShowForm(!showForm)
}

function handleSubmit(post:Post) {
    setPosts([...posts,post])
    handleClose()
}

function handleClose() {
    setShowForm(false)
}


    return(

        <div className='socialPosts-container'>
            <header>My Thoughts</header>
            <main>
                <button onClick={()=> setShowForm(!showForm)}>New Thought</button>
                <ul className='list-container'>
                    {posts.map(post=>
                    <PostInList
                    post={post}
                    onDelete={()=> handleDelete(post.title)}
                    ></PostInList>

                    )}
                   
                </ul>
            </main>
            {showForm && <PostForm onSubmit={handleSubmit} onClose={handleClose}></PostForm>}
        </div>
 
    );


}