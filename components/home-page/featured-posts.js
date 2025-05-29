import { getFeaturedPosts } from '../../lib/posts-util';
import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};
