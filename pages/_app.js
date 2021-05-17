import Head from 'next/head';

import '@/styles/_globals.scss';

import Layout from '@/components/layout/layout1/Layout';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				<Head>
					<meta charSet='UTF-8' />
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<meta name='robots' content='index,follow' />
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
					<title>Next Events</title>
				</Head>
				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}

export default MyApp;
