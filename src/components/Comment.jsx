import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment({ content, deleteComment }){
    const[likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        console.log('Deletar')

        deleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false}  src="https://media.licdn.com/dms/image/v2/D4D03AQEhhhMNTuJXdg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691481849468?e=1730332800&v=beta&t=CAZoH8DII3xxpL6y0XLyl0Q1LZWv5PCNY0L8PYPwv7k"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        
                                <strong>Stélvio Tombela</strong>
                                <time tittle="28 de Angosto às 08:28" dateTime='2024-08-24 08:13:44'>Publicado há 1h</time>
                             </div>

                            <button onClick={handleDeleteComment} title='Deletar comentário'>
                                <Trash size={20}/>
                            </button>

                       

                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>


    )
}