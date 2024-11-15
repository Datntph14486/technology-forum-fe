import { Card, ListGroup, Button } from "react-bootstrap";
import AnswerItem from "./AnswerItem ";

interface Answer {
    id: number;
    author: string;
    authorAvatar: string; // Avatar người trả lời
    content: string;
    postedDate: string;
}

interface Question {
    id: number;
    title: string;
    author: string;
    authorAvatar: string; // Avatar người hỏi
    content: string;
    postedDate: string;
    repliesCount: number;
}

interface DetailQuestionProps {
    question: Question;
    answers: Answer[];
}

export default function DetailQuestion({
    question,
    answers,
}: DetailQuestionProps) {
    return (
        <Card className="mb-4 shadow-sm border-0">
            <Card.Body>
                {/* Câu hỏi chi tiết */}
                <div className="d-flex align-items-center mb-3">
                    <img
                        src={question.authorAvatar}
                        alt="Author Avatar"
                        className="me-3"
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                    />
                    <div>
                        <Card.Title className="text-primary fs-4 mb-0">
                            {question.title}
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                            <small>
                                {question.author} • {question.postedDate}
                            </small>
                        </Card.Subtitle>
                    </div>
                </div>
                <Card.Text className="mb-4">{question.content}</Card.Text>

                <hr />

                {/* Hiển thị số câu trả lời */}
                <h5 className="mb-4">{question.repliesCount} Câu trả lời</h5>

                {/* Danh sách câu trả lời */}
                <ListGroup variant="flush">
                    {answers.map((answer) => (
                        <AnswerItem
                            key={answer.id}
                            author={answer.author}
                            authorAvatar={answer.authorAvatar}
                            content={answer.content}
                            postedDate={answer.postedDate}
                        />
                    ))}
                </ListGroup>

                <hr />

                {/* Nút thêm câu trả lời */}
                <div className="d-flex justify-content-end">
                    <Button variant="primary" className="mt-3 px-4">
                        Trả lời
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
