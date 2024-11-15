"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
    // Giả sử biến `isLoggedIn` đại diện cho trạng thái đăng nhập
    const isLoggedIn = false; // Thay đổi thành true nếu người dùng đã đăng nhập

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/posts">Bài Viết</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/questions">Hỏi đáp</Nav.Link>
                        <Nav.Link href="#pricing">Thảo Luận</Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id="collapsible-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {isLoggedIn ? (
                            // Nếu người dùng đã đăng nhập, hiển thị các mục liên quan đến tài khoản
                            <>
                                <Nav.Link href="/profile">
                                    Trang Cá Nhân
                                </Nav.Link>
                                <Nav.Link href="/logout">Đăng Xuất</Nav.Link>
                            </>
                        ) : (
                            // Nếu chưa đăng nhập, hiển thị các liên kết đăng ký và đăng nhập
                            <>
                                <Nav.Link href="/login">Đăng Nhập</Nav.Link>
                                <Nav.Link href="/register">Đăng Ký</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
