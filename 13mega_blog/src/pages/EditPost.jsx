import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components/index";
import { postService } from "../appwrite/index";
import { useNavigate, useParams } from "react-router-dom";
function Post() {
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const { slug } = useParams();
    useEffect(() => {
        postService.getPost(slug).then((postt) => {
            if (postt) setPost(postt);
            else navigate("/");
        });
    }, [slug, navigate]);
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default Post;
