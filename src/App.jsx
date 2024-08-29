import { useState } from 'react'

import {Post} from './components/Post'

import './global.css';
import { Header } from './components/Header';
import styles from './App.module.css';
import {Sidebar} from './components/sidebar';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEwYGFxA9AK7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671115385736?e=1730332800&v=beta&t=oW-nUMc8WFGH_B5IbaXNyzJVKdhuwKrouIeJnEY3mYU',
      name: 'Gil Stélvio Soares',
      role: 'Chefe de Departamento @ IMA'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare',},

     
    ],
    publishedAt: new Date('2024-08-24 20:00:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFYUzp3mppXtw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696670914617?e=1730332800&v=beta&t=gL_XQa0zlGreggGX-5oD_EmteMNt6HiaH_x0HhUf4dg',
      name: 'Mário Domingos',
      role: 'Cehefe de Departamento @ IMA'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare',},

     
    ],
    publishedAt: new Date('2024-08-22 19:00:00'),
  },

];
const algo = posts.map(post =>{
  return 1;
})


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header />
   <div className={styles.wrapper}>
    <Sidebar />
    <main>
      {posts.map(post =>{
        return (
        <Post 
        key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
        
        />
      )
      })}
    </main>
   </div>
  
   </>
  )
}

export default App
