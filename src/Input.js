/** @format */

import React, { useState } from 'react';

const Input = (props) => {
	const [title, setTitle] = useState('');

	return (
		<input
			type="text"
			className="form-control mr-sm-8 mb-2"
			value={title}
			onChange={(e) => setTitle(e.target.value)}
		/>
	);
};

export default Input;
