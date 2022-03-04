import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import './Feed.css'
import FeedOption from '../FeedOption/FeedOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../Post/Post';
import { db } from '../../firebase/firebase-config';
import { firestore } from 'firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    const fetchPosts = async () => {
        const dbFirebase = []
        const response = await db.collection('linkedin-posts').get();
        response.docs.forEach(doc => {
            dbFirebase.push(
                {
                    id: doc.ref.id,
                    data: doc.data()
                }
            )
        })
        setPosts(dbFirebase)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const printDB = (event) => {
        event.preventDefault();
        console.log(posts);
    }
    const addPost = (event) => {
        event.preventDefault();
        db.collection('linkedin-posts').add({
            name: 'Sabry',
            message: input,
            description: 'Software Engineer',
            photoUrl: '',
            timestamp: firestore.FieldValue.serverTimestamp(),
        });
        document.getElementById('input-post').value = '';
        fetchPosts()
    }

    return (
        <div className="Feed">
            <div className="Feed-post-container">
                <div className="Feed-post-input-container">
                    <Avatar className='Sidebar-top-avatar' />
                    <form>
                        <input
                            type="text"
                            id='input-post'
                            className="Feed-post-input"
                            placeholder='Post!'
                            onChange={e => setInput(e.target.value)} />
                        <button
                            type='submit'
                            onClick={addPost}
                        />
                    </form>
                </div>
                <div className="Feed-post-options">
                    <FeedOption
                        Icon={ImageIcon}
                        color='#70B5F9'
                        title='Photo' />
                    <FeedOption
                        Icon={SubscriptionsIcon}
                        color='#7fc15e'
                        title='Video' />
                    <FeedOption
                        Icon={EventNoteIcon}
                        color='#e7a33e'
                        title='Event' />
                    <FeedOption
                        Icon={CalendarViewDayIcon}
                        color='#fc9295'
                        title='Write Article' />
                </div>
            </div>
            <div className="Feed-recent-post-container">
                {posts.map(post => (
                    <Post
                        key={post.id}
                        name={post.data.name}
                        message={post.data.message}
                        description={post.data.description}
                        photoUrl={post.data.photoUrl}
                        timestamp={post.data.timestamp} />
                )
                )}
            </div>
        </div>
    )
}

export default Feed