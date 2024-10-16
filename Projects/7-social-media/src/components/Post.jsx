import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostList} from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
      >
        <MdDelete />
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="text-bg-primary badge hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          This post is reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
}

export default Post;
