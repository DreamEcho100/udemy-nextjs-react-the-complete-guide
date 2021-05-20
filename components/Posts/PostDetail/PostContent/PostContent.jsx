import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	// atomDark,
	// vsDark,
	vscDarkPlus,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import classes from './PostContent.module.css';

import PostHeader from './PostHeader/PostHeader';

// SyntaxHighlighter.registerLanguage('js', js);
// SyntaxHighlighter.registerLanguage('css', css);

const PostContent = ({ post }) => {
	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers = {
		// img(image) {
		//   return (
		//     <Image
		//       src={`/images/posts/${post.slug}/${image.src}`}
		//       alt={image.alt}
		//       width={600}
		//       height={300}
		//     />
		//   );
		// },
		p(paragraph) {
			const { node, ...props } = paragraph;

			/*
			if (node.children[1] && node.children[1].tagName === 'a') {
				if (
					node.children[2] &&
					node.children[2].value.includes('extraAttributesStart')
				) {
					const EAS = 'extraAttributesStart';
					const EAE = 'extraAttributesEnd';

					const EASIndex = node.children[2].value.indexOf(EAS);
					const EAEIndex = node.children[2].value.indexOf(EAE);

					const anchorHref = node.children[1].properties.href;

					let anchorAttributes = {};
					let anchorAttributesError = '';
					try {
						anchorAttributes = JSON.parse(
							node.children[2].value.substr(
								EAS.length + EASIndex,
								EAEIndex - EAE.length - 2
							)
						);
					} catch (error) {
						console.error(error);
						anchorAttributesError = error.message;
					}

					const firstText = `${node.children[0].value}`;
					const anchorText = `${node.children[1].children[0].value}`;
					const lastText = node.children[2].value.substr(EAEIndex + EAE.length);

					return (
						<p>
							{firstText}
							{anchorAttributesError ? (
								<div
									style={{ color: 'red', fontSize: '4rem', fontWeight: '900' }}
								>
									{anchorAttributesError}
								</div>
							) : (
								<a
									href={anchorHref}
									{...anchorAttributes}
									// target='_blank'
									rel='noopener noreferrer'
								>
									{anchorText}
								</a>
							)}
							{lastText}
						</p>
					);
				}
			}
			*/

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				let imgSrc;

				if (
					/^https:\/\//.test(image.properties.src) ||
					/^http:\/\//.test(image.properties.src)
				) {
					imgSrc = image.properties.src;
				} else {
					imgSrc = `/images/posts/${post.slug}/${image.properties.src}`;
				}

				return (
					<div className={classes.image}>
						<Image src={imgSrc} alt={image.alt} width={600} height={300} />
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},

		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '');

			return !inline && match ? (
				<SyntaxHighlighter
					style={vscDarkPlus}
					language={match[1]}
					PreTag='div'
					children={String(children).replace(/\n$/, '')}
					{...props}
				/>
			) : (
				<code className={className} {...props} />
			);
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
