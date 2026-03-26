import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { createComment } from '../../actions/commentActions';

const CommentForm = ({ articleSlug }) => {
    const { data: session } = useSession();
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!session) {
            setError('You must be logged in to comment.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await createComment(articleSlug, comment, session.user.id);
            setComment('');
        } catch (err) {
            setError('Failed to submit comment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment..."
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Comment'}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default CommentForm;