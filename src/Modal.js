/** @format */

import React, { useState, useEffect, useMemo } from 'react';
import { Modal, Button } from 'react-bootstrap';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import Search from './Search';

const Modale = ({ addSong }) => {
	const [show, setShow] = useState(false);
	const [comments, setComments] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState('');
	const [visible, setVisible] = useState(false);

	const [title, setTitle] = useState('');

	const ITEMS_PER_PAGE = 10;

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

	const handleSubmit = (e) => {
		e.preventDefault();
		addSong(title);
		setTitle('');
	};

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

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button variant="primary" onClick={handleShow}>
				Cerca un prodotto
			</Button>
			<Modal show={show} onHide={handleClose} size="xl">
				<Modal.Header closeButton>
					<Modal.Title>Cerca prodotto</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<section className="d-flex justify-content-between">
						<Search
							onSearch={(value) => {
								setSearch(value);
								setCurrentPage(1);
								if (value !== '') {
									setVisible(true);
								} else {
									setVisible(false);
								}
							}}
							// onChange={(e) => setVisible(true)}
						/>
					</section>
					{visible ? (
						<>
							<table className="table table-bordered custom">
								<TableHeader headers={headers} />
								<tbody>
									{commentsData.map((comment) => (
										<tr key={comment.id}>
											<th scope="row">{comment.id}</th>
											<th>{comment.name}</th>
											<th className="col-sm-3">{comment.email}</th>
											<th className="d-flex align-middle justify-content-center">
												<form onSubmit={handleSubmit}>
													<fieldset>
														<input
															type="text"
															className="form-control mr-sm-8 mb-4"
															value={title}
															key={comment.id}
															onChange={(e) => setTitle(e.target.value)}
														/>
														<button
															className="btn btn-info col-sm-12"
															onClick={handleClose}
														>
															Seleziona quantit&agrave;
														</button>
													</fieldset>
												</form>
											</th>
										</tr>
									))}
								</tbody>
							</table>
							<Pagination
								total={totalItems}
								itemsPerPage={ITEMS_PER_PAGE}
								currentPage={currentPage}
								onPageChange={(page) => setCurrentPage(page)}
							/>
						</>
					) : null}
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
};

export default Modale;
