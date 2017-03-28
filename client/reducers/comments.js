function postComments(state = [], action){
	switch(action.type){
		case 'ADD_COMMENT':
			// return the new state plus the new comment
			return [...state,{
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return [
			// from the start, up til the one we want deleted
			...state.slice(0, action.i),
			// after the deleted one, up til the end
			...state.slice(action.i + 1)
			]
		default: 
			return state;
	}
	return state;
}

function comments(state = [], action){
	if(typeof action.postId !== 'undefined'){
		return {
			// take everything from current state
			...state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;