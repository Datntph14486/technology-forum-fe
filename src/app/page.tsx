"use client";
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import webRoutes from '@/routers/web';
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';

export default function Home() {
  const router = useRouter()


  // const handleSubmit = async () =>{
    

  // }
  return (
    <div>
      Dashboard
      <ul>
        <li><a  onClick={()=>{router.push(webRoutes.auth.login)}}>login</a></li>
        <li><a onClick={()=>{router.push(webRoutes.auth.register)}}>register</a></li>
        <li><a onClick={()=>{router.push(webRoutes.blog.list)}}>blogs</a></li>
        <li><Button onClick={()=>{router.push(webRoutes.post.list)}}>posts</Button></li>
      </ul>
    </div>
  )
}
