import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import { postService } from "../appwrite/index";
import { useNavigate,useSelector } from "react-router-dom";
function Home() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const authStatus=useSelector(state=>state.auth.status)
    useEffect(() => {
        if(!authStatus) return
        postService.getPosts().then((allPosts) => {
            if (allPosts) setPosts(allPosts.documents)
            else navigate("/");
        })
    }, []);
    return (posts.length==0)?(
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            There is no post to show
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    ):(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap rounded-xl">
                    {posts.map((post) => (
                        <div className="p-2 w-1/4" key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
