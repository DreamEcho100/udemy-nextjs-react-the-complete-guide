import { getFeaturedPosts } from '../lib/posts-util';

import Hero from '../components/HomePage/Hero/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts/FeaturedPosts';

const Home = ({ posts }) => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
};

export const getStaticProps = () => {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
};

export default Home;
