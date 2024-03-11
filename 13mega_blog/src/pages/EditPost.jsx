import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components/index";
import { postService } from "../appwrite/index";
import { useNavigate, useParams } from "react-router-dom";
function EditPost() {
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const { slug } = useParams();
    useEffect(() => {
        if(!slug) return
        postService.getPost(slug).then((post) => {
            if (post) setPost(post);
            else navigate("/");
        });
    }, [slug, navigate]);
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} disabled/>
            </Container>
        </div>
    ) : null;
}

export default EditPost;
