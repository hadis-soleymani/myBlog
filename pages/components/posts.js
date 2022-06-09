import styles from "../../styles/posts.module.css";
import Post_card from "./shared/post_card";

const Posts = () => {
  return (
    <div className={styles.posts_container}>
      <h1>Latest Posts</h1>
      <div className={styles.cards_container}>
        <Post_card image="post1.svg" />
        <Post_card image="post2.svg" />
        <Post_card image="post3.svg" />
      </div>
    </div>
  );
};

export default Posts;
