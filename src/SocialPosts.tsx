import { useState } from 'react';
import { Post } from './Post'
import { PostInList } from './PostInList';
import { PostForm } from './PostForm'
import { title } from 'process';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root')!);


export function SocialPosts () {

const [posts, setPosts] = useState<Post[]>([
    {title:'React Is Faster', thought:'React takes DOM to the next level by keeping in memory a virtual representation of a UI and synchronizing it with the real DOM.', votes:0}, 
    {title:'React Supports Type Systems', thought:'React comes with a built-in way to validate props, these are called propTypes. React components can be part of a hierarchy of bigger components, therefore, a good practice is to validate prop data types.', votes:0}, 
    {title:'React Components Can Fetch Data', thought:'React components can fetch data through Ajax requests and mutate state through callbacks that come from user events.', votes:0}, 
]);

const [showForm, setShowForm] = useState(false)


function handleDelete(title:string) {

    setPosts(posts.filter((post)=> post.title != title));

}

function handleSubmit(post:Post) {
    setPosts([...posts,post])
    handleClose()
    setIsOpen(false);
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

// modal starts here 

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width:'500px',
      height:'220px',
      transform: 'translate(-50%, -50%)',
      borderRadius:'1em',
    },
  };

let subtitle:any;
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
  setShowForm(true);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
  setShowForm(false);
}


    return(

        <div className='socialPosts-container'>
            <header>My Thoughts</header>
            <main>
                {/* <button onClick={()=> setShowForm(!showForm)}>New Thought</button> */}
                <button onClick={openModal}>New Thought</button>
               

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

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="New Thought"
                >

            {showForm && <PostForm onSubmit={handleSubmit} onClose={closeModal}></PostForm>}


            </Modal>

        </div>
 
    );
}