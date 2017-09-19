import React from 'react';
import EntryButton from './EntryButton';

const EntryButtonList = ({ entries, handleClick }) => (
	<div>
		<ul>
			{entries.map((entry, i) => (
				<EntryButton key={i} {...entry} onClick={() => handleClick(i)}/>
			))}
		</ul>
	</div>
);

const styles = {
	
}

export default EntryButtonList;