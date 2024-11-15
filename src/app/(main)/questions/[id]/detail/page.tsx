"use client";

import Comments from "@/components/comment/Comments";
import QuestionDetail from "@/components/question/QuestionDetail";
import LatestQuestions from "@/components/question/LatestQuestions";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopAuthors from "@/components/author/TopAuthor";

export default function QuestionDetailPage() {
    const [question, setQuestion] = useState<any>({
        authorAvatar: "/images/user1.jpg",
        authorName: "John Doe",
        title: "Làm sao để trở thành lập trình viên giỏi?",
        content: "Đây là nội dung câu hỏi...",
        views: 120,
        repliesCount: 10,
        postedDate: "Ngày 11 tháng 11, 2024",
    });

    const [answers, setAnswers] = useState([
        {
            id: 1,
            author: "Jane Doe",
            authorAvatar: "",
            content: "Câu hỏi rất thú vị!",
            postedDate: "Ngày 11 tháng 11, 2024",
        },
        {
            id: 1,
            author: "John Smith",
            authorAvatar: "",
            content: "Cảm ơn bạn đã đặt câu hỏi!",
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

    const handleAddAnswer = (newAnswer: {
        id: number;
        author: string;
        content: string;
        postedDate: string;
        authorAvatar: string;
    }) => {
        setAnswers([...answers, newAnswer]); // Cập nhật danh sách câu trả lời
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
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <Row>
                        {/* Cột hiển thị câu hỏi chi tiết */}
                        <Col md={12}>
                            <QuestionDetail
                                question={question}
                                answers={answers}
                            />
                        </Col>
                    </Row>
                </Col>

                {/* Cột hiển thị danh sách câu hỏi mới nhất và tác giả hàng đầu */}
                <Col md={4} className="sticky-top">
                    <Row>
                        <Col md={12}>
                            <LatestQuestions questions={sampleQuestions} />
                        </Col>
                        <Col md={12}>
                            <TopAuthors authors={sampleAuthors} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
