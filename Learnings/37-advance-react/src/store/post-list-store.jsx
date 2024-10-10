import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addServerPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  switch (action.type) {
    case "DELETE_POST":
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
      break;

    case "ADD_POST":
      newPostList = [action.payload, ...currPostList];
      break;

    case "ADD_SERVER_POSTS":
      newPostList = action.payload.posts;
      break;

    default:
      newPostList;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, views, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        views: views,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addServerPosts = (posts) => {
    dispatchPostList({
      type: "ADD_SERVER_POSTS",
      payload: {
        posts: posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addServerPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
