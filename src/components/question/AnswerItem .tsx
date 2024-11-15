import { Row, Col, ListGroup, Image } from "react-bootstrap";

interface AnswerItemProps {
    author: string;
    authorAvatar: string;
    content: string;
    postedDate: string;
}

const AnswerItem: React.FC<AnswerItemProps> = ({
    author,
    authorAvatar,
    content,
    postedDate,
}) => {
    return (
        <ListGroup.Item
            className="p-3"
            style={{
                borderLeft: "4px solid #007bff",
                borderRadius: "4px",
            }}
        >
            <Row>
                <Col md={2} className="d-flex flex-column align-items-center">
                    <Image
                        src={authorAvatar}
                        roundedCircle
                        width={40}
                        height={40}
                        alt="Answer Author Avatar"
                        className="mb-2"
                    />
                    <strong className="text-dark">{author}</strong>
                    <small className="text-muted">{postedDate}</small>
                </Col>
                <Col md={10}>
                    <p className="mb-0">{content}</p>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default AnswerItem;
