"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

interface QuestionItemProps {
    question: {
        id: number;
        title: string;
        replies: number;
        postedDate: string;
        views: number;
        authorAvatar: string;
        authorName: string;
    };
    onClick: (id: number) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, onClick }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/questions/1/detail`);
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
                    {/* Avatar và thông tin tác giả */}
                    <Col xs={1} className="d-flex align-items-center">
                        <Image
                            src={question.authorAvatar}
                            roundedCircle
                            width={50}
                            height={50}
                            alt="Author Avatar"
                        />
                    </Col>
                    <Col xs={11}>
                        <div className="d-flex align-items-center mb-2">
                            <strong className="me-2">
                                {question.authorName}
                            </strong>
                            <span className="text-muted">
                                {question.postedDate}
                            </span>
                        </div>

                        {/* Tiêu đề câu hỏi */}
                        <Card.Title className="fs-5">
                            {question.title}
                        </Card.Title>

                        {/* Thông tin trả lời và số lượt xem */}
                        <Card.Text className="text-muted d-flex">
                            <span className="me-4">
                                👁️ {question.views} Views
                            </span>
                            <span>💬 {question.replies} Replies</span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default QuestionItem;
