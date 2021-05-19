import { getAllPosts } from '../../lib/posts-util';

import AllPosts from '../../components/Posts/AllPosts/AllPosts';

const AllPostsPage = ({ posts }) => {
	return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
	};
};

export default AllPostsPage;
