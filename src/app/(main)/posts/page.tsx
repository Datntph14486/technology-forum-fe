"use client";

import TopAuthors from "@/components/author/TopAuthor";
import PostItem from "@/components/post/PostItem";
import LatestQuestions from "@/components/question/LatestQuestions";
import { Col, Container, Row } from "react-bootstrap";

export default function PostsPage() {
    const posts = [
        {
            authorAvatar: "/images/user3.jpg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen van a",
            postedDate: "2024-08-12",
        },
        {
            authorAvatar: "/images/user3.jpg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen van a",
            postedDate: "2024-08-12",
        },
        {
            authorAvatar: "/images/user3.jpg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen van a",
            postedDate: "2024-08-12",
        },
        {
            authorAvatar: "/images/user3.jpg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen van a",
            postedDate: "2024-08-12",
        },
        {
            authorAvatar: "/images/user3.jpg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen van a",
            postedDate: "2024-08-12",
        },
        {
            authorAvatar: "/images/user3.jpg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen van a",
            postedDate: "2024-08-12",
        },
        {
            authorAvatar: "/images/user3.jpg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen van a",
            postedDate: "2024-08-12",
        },
        {
            authorAvatar: "/public/images/chidan.jpeg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen Van Dan",
            postedDate: "2024-08-12",
        },
        {
            authorAvatar: "/images/user3.jpg",
            title: "Lộ trình học React cho người mới bắt đầu",
            views: 85,
            comments: 6,
            authorName: "Nguyen van a",
            postedDate: "2024-08-12",
        },
    ];

    const sampleQuestions = [
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
    ];

    const sampleAuthors = [
        { name: "Nguyễn Văn A", avatar: "/images/user1.jpg", postsCount: 25 },
        { name: "Trần Thị B", avatar: "/images/user2.jpg", postsCount: 18 },
        { name: "Lê Minh C", avatar: "/images/user3.jpg", postsCount: 30 },
    ];

    return (
        <Container className="post-list mt-4">
            <Row>
                {/* Cột hiển thị danh sách bài viết */}
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
                    {posts.map((post, index) => (
                        <PostItem key={index} post={post} />
                    ))}
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
