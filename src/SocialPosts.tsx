import { useState } from 'react';
import { Post } from './Post'
import { PostInList } from './PostInList';
import { PostForm } from './PostForm'
import { title } from 'process';


export function SocialPosts () {

const [posts, setPosts] = useState<Post[]>([
    {title:'First Post', thought:'had a great day today', votes:0}, 
    {title:'Yet another post', thought:'Why not? Second post', votes:0}, 
    {title:'Yet another post2', thought:'Why not? Second post2', votes:0}, 
]);

const [showForm, setShowForm] = useState(false)


function handleDelete(title:string) {

    setPosts(posts.filter((post)=> post.title != title));

}


function handleSubmit(post:Post) {
    setPosts([...posts,post])
    handleClose()
}

function handleClose() {
    setShowForm(false)
}

function handleUpVotes (title:string, votes:number) {

console.log(`hello`)

const newPost = posts.find((post)=> post.title === title)

const newArr = [...posts];

const newArrIndex = newArr.findIndex((post)=> post.title === title)

newArr.splice(newArrIndex,1, {title:`${newPost?.title}`, thought: `${newPost?.thought}`, votes:votes+1})

setPosts(newArr)

}


    return(

        <div className='socialPosts-container'>
            <header>My Thoughts</header>
            <main>
                <button onClick={()=> setShowForm(!showForm)}>New Thought</button>
                <ul className='list-container'>
                    {posts.map((post, i)=>
                    <PostInList
                    key={i}
                    post={post}
                    onDelete={()=> handleDelete(post.title)}
                    upVote={()=>handleUpVotes(post.title, post.votes)}
                    ></PostInList>

                    )}
                   
                </ul>
            </main>
            {showForm && <PostForm onSubmit={handleSubmit} onClose={handleClose}></PostForm>}
        </div>
 
    );


}