import React from 'react';
import EntryCard from './EntryCard';
import GuideItem from 'components/GuideItem';

const EntryCardList = ({ entries, activeEntryId, handleClick }) => (
	<div>
		<ul>
			{entries.map((entry, i) => (
				<li key={i}>
					{/*<EntryCard
						key={i}
						{...entry}
						onClick={() => handleClick(entry.id)} isActive={activeEntryId === entry.id}
					/>*/}
					<GuideItem
						iconClassName='mdi mdi-check'
						text={entry.title}
						onClick={() => handleClick(entry.id)}
						isActive={activeEntryId === entry.id}
					/>
				</li>
			))}
		</ul>
	</div>
);

const styles = {

}

export default EntryCardList;
