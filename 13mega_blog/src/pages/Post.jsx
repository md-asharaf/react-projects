import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button ,Container } from "../components/index";
import { postService } from "../appwrite/index";
import parse from "html-react-parser";
function Post() {
    const [post, setPost] = useState();
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    useEffect(() => {
        if (slug) {
            postService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);
    const deletePost = () => {
        postService.deletePost(post.$id).then((status) => {
            if (status) {
                postService.deleteFile(post.imageUrl);
                navigate("/");
            }
        });
    };
    const author = post && userData ? userData.$id === post.userId : false;
    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={postService.getFilePreview(post.imageUrl)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {author && (
                        <div className="absolute right-6 top-14">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button  className="mr-4 py-2 px-10 bg-blue-700 text-white">
                                    Edit
                                </Button>
                            </Link>
                            <Button className="bg-white text-blue-700 border-gray-500 border-[1.5px] py-2 px-7" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl underline font-bold">{post.title} :</h1>
                </div>
                <div className="browser-css">{parse(post.content)}</div>
            </Container>
        </div>
    ) : null;
}

export default Post;
