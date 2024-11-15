// app/api/auth/login.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Logic xác thực người dùng tại đây
  if (email === 'test@example.com' && password === 'password123') {
    return NextResponse.json({ success: true, message: 'Đăng nhập thành công!' });
  } else {
    return NextResponse.json({ success: false, message: 'Thông tin đăng nhập không chính xác!' });
  }
}
