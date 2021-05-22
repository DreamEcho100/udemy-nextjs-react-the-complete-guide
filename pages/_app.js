import Head from 'next/head';
import { Provider } from 'next-auth/client';

import '@/styles/_globals.scss';
import Layout from '@/components/Layouts/Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<Head>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='robots' content='index,follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title></title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
