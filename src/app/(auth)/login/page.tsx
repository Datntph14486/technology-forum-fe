// app/auth/login/page.tsx
import AuthForm from "@/components/auth/AuthForm";
import React from "react";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <AuthForm type="login" />
        </div>
    );
}
