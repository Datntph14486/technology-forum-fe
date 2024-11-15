"use client";

import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useRouter } from "next/navigation";

interface AuthFormProps {
    type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (type === "login") {
            try {
                router.push("/");
                // const result = await loginUser(email, password);
                // if (!result.success) {
                //   setError(result.message);
                // } else {
                //   window.location.href = "/dashboard";
                // }
            } catch (err) {
                setError("Đã xảy ra lỗi, vui lòng thử lại sau.");
            }
        }

        if (type === "register") {
            router.push("/");
        }
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
        >
            <Row className="w-100">
                <Col md={{ span: 4, offset: 4 }} xs={12}>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-center mb-4">
                            {type === "login" ? "Đăng nhập" : "Đăng ký"}
                        </h2>

                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email của bạn"
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formPassword"
                                className="mb-3"
                            >
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Mật khẩu của bạn"
                                    required
                                />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100"
                                disabled={!email || !password}
                            >
                                {type === "login" ? "Đăng nhập" : "Đăng ký"}
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
