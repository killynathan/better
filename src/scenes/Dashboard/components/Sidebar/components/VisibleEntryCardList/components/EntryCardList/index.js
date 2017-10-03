import React from 'react';
import EntryCard from './components/EntryCard';

const EntryCardList = ({ entries, activeEntryId, handleClick }) => (
	<div>
		<ul>
			{entries.map((entry, i) => (
				<EntryCard key={i} {...entry} onClick={() => handleClick(entry.id)} isActive={activeEntryId === entry.id}/>
			))}
		</ul>
	</div>
);

const styles = {

}

export default EntryCardList;
