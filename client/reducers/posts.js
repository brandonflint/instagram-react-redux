// reducer takes in two things
// the action ( info about what happened)
// a copy of the current state

function posts(state = [], action){
	console.log(state, action);
	return state;
}

export default posts;