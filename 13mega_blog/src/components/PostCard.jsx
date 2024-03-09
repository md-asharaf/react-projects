import { Link } from "react-router-dom";
import { postService } from "../appwrite/index";
function PostCard({ $id, title, imageUrl }) {
    return (
        <Link to={`/posts/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4 border-[1.5px] border-black" >
                <div className="w-full justify-center mb-4">
                    <img
                        className="rounded-xl"
                        src={postService.getFilePreview(imageUrl)}
                        alt={title}
                    />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
