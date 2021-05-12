import '@/styles/_globals.scss';

import Layout from '@/components/layout/layout1/index';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
