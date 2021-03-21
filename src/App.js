/** @format */
import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
// import useFullPageLoader from 'hooks/useFullPageLoader';

function App() {
	const [comments, setComments] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const ITEMS_PER_PAGE = 50;

	const headers = [
		{ name: 'No#', field: 'id' },
		{ name: 'Name', field: 'name' },
		{ name: 'Email', field: 'email' },
		{ name: 'Comment', field: 'body' },
	];

	useEffect(() => {
		const getData = () => {
			fetch('https://jsonplaceholder.typicode.com/comments')
				.then((response) => response.json())
				.then((json) => {
					setComments(json);
				});
		};

		getData();
	}, []);

	const commentsData = useMemo(() => {
		let computedComments = comments;

		setTotalItems(computedComments.length);
		//Current Page slice
		return computedComments.slice(
			(currentPage - 1) * ITEMS_PER_PAGE,
			(currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
		);
	}, [comments, currentPage]);

	return (
		<div className="App">
			<Pagination
				total={totalItems}
				itemsPerPage={ITEMS_PER_PAGE}
				currentPage={currentPage}
				onPageChange={(page) => setCurrentPage(page)}
			/>
			<input type="text" placeholder="Search" />
			<table className="table table-striped">
				<TableHeader headers={headers} />
				<tbody>
					{commentsData.map((comment) => (
						<tr>
							<th scope="row">{comment.id}</th>
							<th>{comment.name}</th>
							<th>{comment.email}</th>
							<th>{comment.body}</th>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
