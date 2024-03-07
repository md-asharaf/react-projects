import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "./index";
import { postService } from "../appwrite/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function PostForm({ post }) {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const { register, handleSubmit, setValue, getValues, control, watch } =
        useForm({
            defaultValues: {
                title: post?.title || "",
                status: post?.status || "active",
                slug: post?.slug || "",
                content: post?.content || "",
            },
        });

    const onSubmitHandler = async (data) => {
        let dbpost;
        const imageFile = data.image[0]
            ? await postService.uploadFile(data.image[0])
            : null;
        console.log("file uploaded");
        if (post) {
            if (imageFile) {
                await postService.deleteFile(post.image);
                console.log("file deleted");
            }
            dbpost = await postService.updatePost(post.$id, {
                ...data,
                image: imageFile ? imageFile.$id : undefined,
            });
            console.log("post updated");
        } else if (imageFile) {
            data.image = imageFile.$id;
            dbpost = await postService.createPost({
                ...data,
                userId: userData.$id,
            });
            console.log("post created");
        }
        if (dbpost) navigate(`/post/${dbpost.$id}`);
        console.log("navigated to post");
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/^[A-Za-z0-9\d]+/g, "-")
                .replace(/\s/g, "-");
        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name == "title")
                setValue(
                    "slug",
                    slugTransform(value.title, {
                        shouldValidate: true,
                    })
                );
        });
        return () => subscription.unsubscribe();
    }, [watch, setValue, slugTransform]);

    return (
        <form
            className="flex flex-wrap"
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <div className="w-2/3 px-2">
                <Input
                    className="mb-4"
                    label="title:"
                    name="title"
                    placeholder="enter title: "
                    {...register("title", {
                        required: true,
                    })}
                />

                <Input
                    className="mb-4"
                    label="slug:"
                    name="slug"
                    placeholder="enter slug: "
                    {...register("slug", {
                        required: true,
                    })}
                    onInput={(e) =>
                        setValue("slug", slugTransform(e.target.value), {
                            shouldValidate: true,
                        })
                    }
                />
                <RTE
                    label="Editor:"
                    control={control}
                    name="RTE"
                    defaultValue={getValues("content")}
                />
            </div>

            <div className="w-1/3 px-2">
                <Input
                    className="mb-4"
                    label="Featured image: "
                    placeholder="featured image"
                    type="file"
                    accept="image/png, image/jpg ,image/jpeg,image/gif"
                    {...register("image", {
                        required: !post,
                    })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={postService.getFilePreview(post.image)}
                            alt={post.title}
                        />
                    </div>
                )}
                <Select
                    className="mb-4"
                    options={["active", "inactive"]}
                    label="status:"
                    {...register("status", {
                        required: true,
                    })}
                />
                <Button
                    type="submit"
                    label="Submit: "
                    className={`w-full ${post ? "bg-green-500" : ""}`}
                >
                    {post ? "update" : "submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm;
