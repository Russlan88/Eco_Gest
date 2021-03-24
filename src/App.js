/** @format */
import React, { useState } from 'react';
import Modale from './Modal';

function App() {
	const addSong = (title) => {
		// @ts-ignore
		setSongs([{ title }]);
	};
	const [songs, setSongs] = useState([]);
	return (
		<div className="container">
			<Modale addSong={addSong} />
			<div className="song-list">
				<table>
					{songs.map((song, index) => {
						return (
							<tr key={index}>
								<td>{song.title}</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
}

export default App;
