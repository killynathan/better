import React from 'react';
import EntryCard from './components/EntryCard';

const EntryCardList = ({ entries, handleClick }) => (
	<div>
		<ul>
			{entries.map((entry, i) => (
				<EntryCard key={i} {...entry} onClick={() => handleClick(entry.id)}/>
			))}
		</ul>
	</div>
);

const styles = {

}

export default EntryCardList;
