import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
}

export default PostList;
