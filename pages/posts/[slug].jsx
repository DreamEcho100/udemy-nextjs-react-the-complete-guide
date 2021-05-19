import { getPostData, getPostsFiles } from '../../lib/posts-util';

import PostContent from '../../components/Posts/PostDetail/PostContent/PostContent';

const PostDetailPage = ({ post }) => {
	return <PostContent post={post} />;
};

export const getStaticProps = (context) => {
	const {
		params: { slug },
	} = context;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 6000,
	};
};

export const getStaticPaths = () => {
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map((fileNAme) => fileNAme.replace(/\.md$/, ''));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
};

export default PostDetailPage;
