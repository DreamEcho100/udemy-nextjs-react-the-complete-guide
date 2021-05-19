import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => {
	return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier /*filename*/) => {
	// const filePath = path.join(postsDirectory, filename);
	const postSlug = postIdentifier.replace(/\.md$/, '');
	const filePath = path.join(postsDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	// const postSlug = filename.replace(/\.md$/, ''); // removes the file extension

	const postData = {
		slug: postSlug,
		...data,
		content,
	};

	return postData;
};

export const getAllPosts = () => {
	const postFiles = fs.readdirSync(postsDirectory);

	const allPosts = postFiles.map((postFile) => getPostData(postFile));

	const sortedPosts = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	);

	return sortedPosts;
};

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();

	const featuredPosts = allPosts.filter((post) => post.isFeatured);

	return featuredPosts;
};
