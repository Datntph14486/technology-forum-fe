"use client";

import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "react-bootstrap";

interface PostDetailProps {
    post: {
        authorAvatar: string;
        authorName: string;
        title: string;
        content: string;
        views: number;
        postedDate: string;
        votes: number;
    };
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
    const [views, setViews] = useState(post.views);

    const handleVoteChange = (newVotes: number) => {
        console.log(`New votes for post: ${newVotes}`);
        // Logic to update post votes, could be a server request
    };

    useEffect(() => {
        // Giả sử có logic tăng lượt xem mỗi khi người dùng truy cập bài viết
        setViews(views + 1);
    }, []);

    return (
        <Card className="mb-4" style={{ cursor: "pointer", border: "none" }}>
            <Card.Body>
                <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                        <Image
                            src={post.authorAvatar}
                            roundedCircle
                            width={50}
                            height={50}
                            className="me-3"
                        />
                        <div>
                            <h5>{post.authorName}</h5>
                            <small className="text-muted">
                                {post.postedDate}
                            </small>
                        </div>
                    </div>

                    {/* Số lượt xem nằm ở bên phải */}
                    <div className="d-flex align-items-center">
                        <span className="text-muted">{views} lượt xem</span>
                    </div>
                </div>

                <h2>{post.title}</h2>

                <div className="mt-4">
                    <p>{post.content}</p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PostDetail;
