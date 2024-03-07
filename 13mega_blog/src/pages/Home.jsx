import { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import { postService } from "../appwrite/index";
import { useSelector } from "react-redux";
function Home() {
    const authStatus = useSelector((state) => state.auth.status);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (!authStatus) {
            setPosts(null);
            return;
        }
        postService.getPosts().then((posts) => {
            if (posts) setPosts(posts.documents);
        });
    }, []);
    return posts && posts.length > 0 ? (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="p-2 w-1/4" key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    ) : (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            {posts
                                ? "User has not posted anything yet"
                                : "Login to read posts"}
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
