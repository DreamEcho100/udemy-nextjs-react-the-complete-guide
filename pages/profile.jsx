import { getSession } from 'next-auth/client';

import UserProfile from '../components/Profile/User/User';

const Profile = () => {
	return <UserProfile />;
};

export const getServerSideProps = async (context) => {
	const session = await getSession({ req: context.req });

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		};
	}

	return {
		props: { session },
	};
};

export default Profile;
