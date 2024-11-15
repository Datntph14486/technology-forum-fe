"use client";

import TopAuthors from "@/components/author/TopAuthor";
import Comments from "@/components/comment/Comments";
import PostDetail from "@/components/post/PostDetail";
import LatestQuestions from "@/components/question/LatestQuestions";
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function PostDetailPage() {
    const [post, setPost] = useState<any>({
        authorAvatar: "/images/user1.jpg",
        authorName: "John Doe",
        title: "Làm sao để trở thành lập trình viên giỏi?",
        content: "Đây là nội dung bài viết...",
        views: 120,
        comments: 10,
        postedDate: "Ngày 11 tháng 11, 2024",
    });

    const [comments, setComments] = useState([
        {
            author: "Jane Doe",
            content: "Bài viết rất hay!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            author: "John Smith",
            content: "Cảm ơn bạn đã chia sẻ!",
            postedDate: "Ngày 10 tháng 11, 2024",
        },
        {
            author: "Jane Doe",
            content: "Bài viết rất hay!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            author: "John Smith",
            content: "Cảm ơn bạn đã chia sẻ!",
            postedDate: "Ngày 10 tháng 11, 2024",
        },
        {
            author: "Jane Doe",
            content: "Bài viết rất hay!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            author: "John Smith",
            content: "Cảm ơn bạn đã chia sẻ!",
            postedDate: "Ngày 10 tháng 11, 2024",
        },
        {
            author: "Jane Doe",
            content: "Bài viết rất hay!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            author: "John Smith",
            content: "Cảm ơn bạn đã chia sẻ!",
            postedDate: "Ngày 10 tháng 11, 2024",
        },
        {
            author: "Jane Doe",
            content: "Bài viết rất hay!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            author: "John Smith",
            content: "Cảm ơn bạn đã chia sẻ!",
            postedDate: "Ngày 10 tháng 11, 2024",
        },
        {
            author: "Jane Doe",
            content: "Bài viết rất hay!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            author: "John Smith",
            content: "Cảm ơn bạn đã chia sẻ!",
            postedDate: "Ngày 10 tháng 11, 2024",
        },
        {
            author: "Jane Doe",
            content: "Bài viết rất hay!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            author: "John Smith",
            content: "Cảm ơn bạn đã chia sẻ!",
            postedDate: "Ngày 10 tháng 11, 2024",
        },
        {
            author: "Jane Doe",
            content: "Bài viết rất hay!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            author: "John Smith",
            content: "Cảm ơn bạn đã chia sẻ!",
            postedDate: "Ngày 10 tháng 11, 2024",
        },
    ]);

    const [sampleQuestions, setSampleQuestions] = useState([
        {
            id: 1,
            title: "Làm thế nào để tối ưu hóa React?",
            replies: 5,
            postedDate: "Hôm qua",
        },
        {
            id: 2,
            title: "Cách dùng useState và useEffect?",
            replies: 2,
            postedDate: "2 ngày trước",
        },
    ]);

    const handleAddComment = (newComment: {
        author: string;
        content: string;
        postedDate: string;
    }) => {
        setComments([...comments, newComment]); // Cập nhật danh sách bình luận
    };

    const sampleAuthors = [
        { name: "Nguyễn Văn A", avatar: "/images/user1.jpg", postsCount: 25 },
        { name: "Trần Thị B", avatar: "/images/user2.jpg", postsCount: 18 },
        { name: "Lê Minh C", avatar: "/images/user3.jpg", postsCount: 30 },
    ];

    return (
        <Container className="post-list mt-4">
            <Row>
                <Col
                    md={8}
                    className="overflow-auto"
                    style={{
                        maxHeight: "80vh",
                        overflowY: "scroll",
                        scrollbarWidth: "none" /* Ẩn thanh cuộn trên Firefox */,
                        msOverflowStyle: "none" /* Ẩn thanh cuộn trên IE */,
                    }}
                >
                    <Row>
                        {/* Cột hiển thị bài viết chi tiết */}
                        <Col md={12}>
                            <PostDetail post={post} />
                        </Col>
                    </Row>
                    <Row>
                        {/* Cột hiển thị danh sách bình luận */}
                        <Col md={12} className="mt-4">
                            <Comments
                                initialComments={comments}
                                onAddComment={handleAddComment}
                            />
                        </Col>
                    </Row>
                </Col>

                {/* Cột hiển thị danh sách câu hỏi mới nhất */}
                <Col md={4} className="sticky-top">
                    <Row>
                        {/* Cột hiển thị danh sách câu hỏi mới nhất */}
                        <Col md={12}>
                            <LatestQuestions questions={sampleQuestions} />
                        </Col>

                        {/* Cột hiển thị danh sách tác giả hàng đầu */}
                        <Col md={12}>
                            <TopAuthors authors={sampleAuthors} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
