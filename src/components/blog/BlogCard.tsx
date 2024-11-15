"use client";
import React from "react";

interface BlogCardProps {
    blog: {
        id: number;
        title: string;
        description: string;
        author: string;
        coverImage: string;
        date: string;
    };
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="text-gray-500 text-sm mb-2">
                    Tác giả: {blog.author}
                </div>
                <div className="text-gray-400 text-sm">{blog.date}</div>
            </div>
        </div>
    );
}
