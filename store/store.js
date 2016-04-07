import {
	createStore
}
from 'redux'

//reducer
const initialState = {
	text: 'Hello',
	sds: 234234
}

function myApp(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_TEXT':
			return {
			text: state.text == 'Hello' ? 'Stark' : 'Hello'
			}
		case 'BUTTON_CLICK':
			return {
				text: '您点击是按钮'
			}
		default:
			return {
				text: 'Hello',
				sds: 'sdfsdf'
			};
	}
}


export default createStore(myApp);