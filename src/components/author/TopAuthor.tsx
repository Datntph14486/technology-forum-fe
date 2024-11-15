// components/author/TopAuthors.tsx
import React from "react";
import { Card, ListGroup } from "react-bootstrap";

interface Author {
    name: string;
    avatar: string;
    postsCount: number;
}

interface TopAuthorsProps {
    authors: Author[];
}

const TopAuthors: React.FC<TopAuthorsProps> = ({ authors }) => {
    return (
        <Card className="mt-4" style={{ cursor: "pointer", border: "none" }}>
            <Card.Body>
                <Card.Title>Tác Giả Hàng Đầu</Card.Title>
                <ListGroup variant="flush">
                    {authors.map((author, index) => (
                        <ListGroup.Item
                            key={index}
                            className="d-flex align-items-center"
                        >
                            <img
                                src={author.avatar}
                                alt={author.name}
                                width={40}
                                height={40}
                                className="rounded-circle me-3"
                            />
                            <div>
                                <h6 className="mb-0">{author.name}</h6>
                                <small>{author.postsCount} bài viết</small>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default TopAuthors;
