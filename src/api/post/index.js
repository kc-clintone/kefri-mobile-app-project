import { client } from '../../../utils/client';
import allReportsQuery from '../../../utils/queries';

export default async function fetchHandler() {
	const query = allReportsQuery();

	await client.fetch(query);
}
