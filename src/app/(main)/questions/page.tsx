"use client";

import TopAuthors from "@/components/author/TopAuthor";
import LatestQuestions from "@/components/question/LatestQuestions";
import QuestionItem from "@/components/question/QuestionItem";
import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const QuestionList: React.FC = () => {
    const questions = [
        {
            id: 1,
            title: "Cách tối ưu hóa React?",
            replies: 5,
            postedDate: "Hôm qua",
            views: 120,
            authorAvatar: "/images/user1.jpg",
            authorName: "Nguyễn Văn A",
        },
        {
            id: 2,
            title: "Cách sử dụng useState và useEffect?",
            replies: 2,
            postedDate: "2 ngày trước",
            views: 80,
            authorAvatar: "/images/user2.jpg",
            authorName: "Trần Thị B",
        },
        {
            id: 3,
            title: "Làm thế nào để học JavaScript nhanh?",
            replies: 8,
            postedDate: "3 ngày trước",
            views: 150,
            authorAvatar: "/images/user3.jpg",
            authorName: "Phạm Văn C",
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

    const handleQuestionClick = (id: number) => {
        console.log(`Câu hỏi ID: ${id}`);
        // Logic chuyển hướng hoặc hiển thị chi tiết câu hỏi
    };
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
                    {questions.map((question) => (
                        <QuestionItem
                            key={question.id}
                            question={question}
                            onClick={handleQuestionClick}
                        />
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
};

export default QuestionList;
