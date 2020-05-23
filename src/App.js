import React from 'react';

import Layout from './layout';
import Pages from './pages';
import Message from '../src/components/Message';

export default function App() {
	return (
		<Layout>
			<Message/>
			<Pages />
		</Layout>
	);
}
