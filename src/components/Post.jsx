import { Avatar } from './Avatar';
import { useState } from 'react';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt }) {
    const [comments, setComments] = useState(['Post muito bacana']);
    const [newCommentText, setNewCommentText] = useState('');
    
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(publishedAt)); 

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment(event) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title="28 de Agosto às 08:28" dateTime={publishedAt}>
                    {publishedDateFormatted}
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea 
                    required
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    name='comment'
                    placeholder='Deixe o seu comentário' 
                    value={newCommentText} />
                <button type='submit' disabled={newCommentText.length === 0}>Comentar</button>
            </form>
            <div className={styles.commentList}>
               {comments.map(comment => (
                <Comment key={comment} content={comment} deleteComment={deleteComment}/>
               ))}
            </div>
        </article>
    );
}
