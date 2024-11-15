"use client";

import BlogCard from "@/components/blog/BlogCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface Blog {
    id: number;
    title: string;
    description: string;
    author: string;
    coverImage: string;
    date: string;
}

export default function ListBlogsPage() {
    const router = useRouter();

    const blogsData = [
        {
            id: 1,
            title: "Giới thiệu về công nghệ mới",
            description: "Bài viết giới thiệu về công nghệ mới trong năm nay.",
            author: "Nguyễn Văn A",
            coverImage: "/images/blog1.jpg",
            date: "2024-11-12",
        },
        {
            id: 2,
            title: "Ứng dụng của AI trong cuộc sống",
            description:
                "Khám phá những ứng dụng của trí tuệ nhân tạo (AI) trong đời sống hàng ngày.",
            author: "Trần Thị B",
            coverImage: "/images/blog2.jpg",
            date: "2024-11-11",
        },
        // Thêm các bài blog khác ở đây...
    ];

    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        setBlogs(blogsData);
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
                Danh sách các bài blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
                <div onClick={() => router.push("/")}>back</div>
            </div>
        </div>
    );
}
