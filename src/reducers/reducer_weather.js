


export default function(state = [], action) {
	switch (action,type) {
		case FETCH_WEATHER:
		return [action.payload.term];
	}

	return state;
}