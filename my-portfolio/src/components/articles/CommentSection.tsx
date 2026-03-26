import React, { useEffect, useState } from 'react';
import CommentForm from '../comments/CommentForm';
import CommentList from '../comments/CommentList';
import { fetchComments, createComment, deleteComment, updateComment } from '../../actions/commentActions';
import { useSession } from 'next-auth/react';

const CommentSection = ({ articleId }) => {
    const { data: session } = useSession();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadComments = async () => {
            try {
                const fetchedComments = await fetchComments(articleId);
                setComments(fetchedComments);
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            } finally {
                setLoading(false);
            }
        };

        loadComments();
    }, [articleId]);

    const handleCommentCreate = async (commentData) => {
        if (!session) return;

        const newComment = await createComment(articleId, commentData);
        setComments((prev) => [...prev, newComment]);
    };

    const handleCommentDelete = async (commentId) => {
        if (!session) return;

        await deleteComment(commentId);
        setComments((prev) => prev.filter(comment => comment.id !== commentId));
    };

    const handleCommentUpdate = async (commentId, updatedData) => {
        if (!session) return;

        const updatedComment = await updateComment(commentId, updatedData);
        setComments((prev) => prev.map(comment => (comment.id === commentId ? updatedComment : comment)));
    };

    if (loading) {
        return <p>Loading comments...</p>;
    }

    return (
        <div>
            <CommentForm onSubmit={handleCommentCreate} />
            <CommentList 
                comments={comments} 
                onDelete={handleCommentDelete} 
                onUpdate={handleCommentUpdate} 
                userSession={session} 
            />
        </div>
    );
};

export default CommentSection;