import Image from 'next/image';

import classes from './Hero.module.css';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src='/images/site/1.jpg' alt='' width={300} height={300} />
			</div>
			<h1>Hi, I'm Mazen</h1>
			<p>
				I blog about web development - especially frontend frameworks like
				Angular or React.
			</p>
		</section>
	);
};

export default Hero;
