const entries = (state = [], action) => {
	switch(action.type) {
		case ADD_ENTRY:
			return [
				{
					date: action.date,
					todos: action.todos,
					notes: action.notes
				},
				...state
			];
		default:
			return state;
	}
};

export default entries;