"use client";

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

export interface IPost {
    authorAvatar: string; // URL của ảnh đại diện người đăng bài
    authorName: string; // Tên người đăng bài
    title: string; // Tiêu đề bài viết
    views: number; // Số lượt xem
    comments: number; // Số lượt bình luận
    postedDate: string; // Ngày đăng bài
}

function PostItem({ post }: { post: IPost }) {
    const router = useRouter();
    const handleClick = () => {
        // Chuyển hướng đến trang chi tiết bài viết
        router.push(`/posts/1/detail`);
    };

    return (
        <Card
            className="mb-3 shadow-sm"
            onClick={handleClick}
            style={{
                cursor: "pointer",
                border: "none",
                transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1.0)")
            }
        >
            <Card.Body>
                <Row>
                    <Col xs={1} className="d-flex align-items-center">
                        <Image
                            src={post.authorAvatar}
                            alt="Avatar"
                            width={50}
                            height={50}
                            className="rounded-circle"
                        />
                    </Col>
                    <Col xs={11}>
                        <div className="d-flex align-items-center mb-2">
                            <strong className="me-2">{post.authorName}</strong>
                            <span className="text-muted">
                                {post.postedDate}
                            </span>
                        </div>
                        <Card.Title className="fs-5">{post.title}</Card.Title>
                        <Card.Text className="text-muted d-flex">
                            <span className="me-4">👁️ {post.views} Views</span>
                            <span>💬 {post.comments} Comments</span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

PostItem.propTypes = {
    post: PropTypes.shape({
        authorAvatar: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
        postedDate: PropTypes.string.isRequired,
    }).isRequired,
};

export default PostItem;
