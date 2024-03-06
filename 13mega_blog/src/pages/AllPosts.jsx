import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import { postService } from "../appwrite/index";
import { useNavigate } from "react-router-dom";
function AllPosts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        postService.getPosts().then((allPosts) => {
            if (allPosts) setPosts(allPosts.documents);
            else navigate("/");
        });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="p-2 w-1/4" key={post.$id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
