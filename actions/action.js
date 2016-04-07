import * as types from '../constants/ActionType'

/**
 * [changeText store调用的函数]
 * @return {[type]} [函数类型]
 */
export function changeText() {
	return {
		type: types.CHANGE_TEXT
	}
}

export function buttonClick() {
	return {
		type: types.BUTTON_CLICK
	}
}