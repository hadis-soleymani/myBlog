//styles
import styles from "./posts.module.css";

//components
import Post_card from "../cards/post_card";

const Posts = () => {
  return (
    <div className={styles.posts_container} id="posts">
      <h1 data-aos="fade-up">Latest Posts</h1>
      <div className={styles.cards_container}>
        <Post_card image="images/post1.svg" />
        <Post_card image="images/post2.svg" />
        <Post_card image="images/post3.svg" />
      </div>
    </div>
  );
};

export default Posts;
