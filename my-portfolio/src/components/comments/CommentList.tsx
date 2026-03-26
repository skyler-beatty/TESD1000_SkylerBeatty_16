import React from 'react';
import CommentItem from './CommentItem';
import { Comment } from '../../types';

interface CommentListProps {
  comments: Comment[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onEdit, onDelete }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default CommentList;