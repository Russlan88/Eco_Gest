/** @format */
import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import Search from './Search';
import { Modal, Button } from 'react-bootstrap';
// import useFullPageLoader from 'hooks/useFullPageLoader';

function App() {
	const [comments, setComments] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState('');
	const [show, setShow] = useState(false);

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

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const commentsData = useMemo(() => {
		let computedComments = comments;

		if (search) {
			computedComments = computedComments.filter(
				(comment) =>
					comment.name.toLowerCase().includes(search.toLowerCase()) ||
					comment.email.toLowerCase().includes(search.toLowerCase())
			);
		}

		setTotalItems(computedComments.length);

		//Current Page slice
		return computedComments.slice(
			(currentPage - 1) * ITEMS_PER_PAGE,
			(currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
		);
	}, [comments, currentPage, search]);

	return (
		<div className="container">
			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Pagination
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
								<tr>
									<th scope="row">{comment.id}</th>
									<th>{comment.name}</th>
									<th>{comment.email}</th>
									<th>{comment.body}</th>
								</tr>
							))}
						</tbody>
					</table>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default App;
