import Head from 'next/head';

import '@/styles/_globals.scss';

import Layout from '@/components/layout/layout1/index';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta charset='UTF-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='robots' content='index,follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Next Events</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
