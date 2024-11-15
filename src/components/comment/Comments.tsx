"use client";

import React, { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

interface Comment {
    author: string;
    content: string;
    postedDate: string;
}

interface CommentsProps {
    initialComments: Comment[];
    onAddComment: (comment: Comment) => void;
}

const Comments: React.FC<CommentsProps> = ({
    initialComments,
    onAddComment,
}) => {
    const [commentText, setCommentText] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>(initialComments);

    const handleCommentChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCommentText(event.target.value);
    };

    const handleAddComment = () => {
        if (commentText.trim() === "") return;
        const newComment: Comment = {
            author: "Anonymous", // Giả sử là người dùng chưa đăng nhập, bạn có thể thay thế bằng thông tin người dùng
            content: commentText,
            postedDate: new Date().toLocaleDateString(),
        };
        setComments([...comments, newComment]);
        onAddComment(newComment); // Gửi lên để cập nhật thông tin (nếu cần)
        setCommentText(""); // Xóa nội dung comment sau khi thêm
    };

    return (
        <div className="mt-4">
            <h5>{comments.length} Bình luận</h5>
            <ListGroup>
                {comments.map((comment, index) => (
                    <ListGroup.Item
                        key={index}
                        style={{ cursor: "pointer", border: "none" }}
                    >
                        <div className="mb-2">
                            <strong>{comment.author}</strong>{" "}
                            <small className="text-muted">
                                ({comment.postedDate})
                            </small>
                        </div>
                        <p>{comment.content}</p>
                        <hr className="my-3" />
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <div className="mt-4">
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={commentText}
                    onChange={handleCommentChange}
                    placeholder="Viết bình luận của bạn..."
                />
                <Button
                    variant="primary"
                    className="mt-3"
                    onClick={handleAddComment}
                >
                    Thêm Bình luận
                </Button>
            </div>
        </div>
    );
};

export default Comments;
