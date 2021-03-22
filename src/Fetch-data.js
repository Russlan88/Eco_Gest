/** @format */

import React, { useState, useEffect, useMemo } from 'react';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import Search from './Search';

const FetchData = () => {
	// const [comments, setComments] = useState([]);
	// const [totalItems, setTotalItems] = useState(0);
	// const [currentPage, setCurrentPage] = useState(1);
	// const [search, setSearch] = useState('');

	// const [title, setTitle] = useState('');

	// const ITEMS_PER_PAGE = 50;

	// const headers = [
	// 	{ name: 'No#', field: 'id' },
	// 	{ name: 'Name', field: 'name' },
	// 	{ name: 'Email', field: 'email' },
	// 	{ name: 'Comment', field: 'body' },
	// ];

	// useEffect(() => {
	// 	const getData = () => {
	// 		fetch('https://jsonplaceholder.typicode.com/comments')
	// 			.then((response) => response.json())
	// 			.then((json) => {
	// 				setComments(json);
	// 			});
	// 	};

	// 	getData();
	// }, []);

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	setTitle('');
	// };

	// const commentsData = useMemo(() => {
	// 	let computedComments = comments;

	// 	if (search) {
	// 		computedComments = computedComments.filter(
	// 			(comment) =>
	// 				comment.name.toLowerCase().includes(search.toLowerCase()) ||
	// 				comment.email.toLowerCase().includes(search.toLowerCase())
	// 		);
	// 	}

	// 	setTotalItems(computedComments.length);

	// 	//Current Page slice
	// 	return computedComments.slice(
	// 		(currentPage - 1) * ITEMS_PER_PAGE,
	// 		(currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
	// 	);
	// }, [comments, currentPage, search]);
	return (
		<React.Fragment>
			{/* <Pagination
				total={totalItems}
				itemsPerPage={ITEMS_PER_PAGE}
				currentPage={currentPage}
				onPageChange={(page) => setCurrentPage(page)}
			/>
			<Search
				onSearch={(value) => {
					setSearch(value);
					setCurrentPage(1);
				}}
			/>
			<table className="table table-striped">
				<TableHeader headers={headers} />
				<tbody>
					{commentsData.map((comment) => (
						<tr key={comment.id}>
							<th scope="row">{comment.id}</th>
							<th>{comment.name}</th>
							<th>{comment.email}</th>
							<th className="d-flex align-middle justify-content-center">
								<form onSubmit={handleSubmit}>
									<input
										type="text"
										className="form-control mr-sm-8 mr-4"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
									<button className="btn btn-info col-sm-4">
										Seleziona quantit&agrave;
									</button>
								</form>
							</th>
						</tr>
					))}
				</tbody>
			</table> */}
		</React.Fragment>
	);
};

export default FetchData;
