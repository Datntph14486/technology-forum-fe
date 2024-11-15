import React from "react";
import { ListGroup } from "react-bootstrap";

// Định nghĩa interface cho câu hỏi
interface Question {
    id: number;
    title: string;
    replies: number;
    postedDate: string;
}

interface LatestQuestionsProps {
    questions: Question[]; // Mảng chứa các câu hỏi mới nhất
}

const LatestQuestions: React.FC<LatestQuestionsProps> = ({ questions }) => {
    return (
        <div>
            <h5 className="mb-3">Câu Hỏi Mới Nhất</h5>
            <ListGroup>
                {questions.map((question) => (
                    <ListGroup.Item
                        key={question.id}
                        style={{ cursor: "pointer", border: "none" }}
                    >
                        <div>
                            <strong>{question.title}</strong>
                        </div>
                        <small className="text-muted">
                            {question.replies} trả lời • {question.postedDate}
                        </small>
                        <hr className="my-3" />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default LatestQuestions;
