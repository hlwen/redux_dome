import React, {
	Component, PropTypes
}
from 'react'
import {
	bindActionCreators
}
from 'redux'
import {
	comnect
}
from 'react-redux'

let addTool = ({
	dispatch
}) => {
	let input

	return (
		<div>
	      <form onSubmit={e => {
	        e.preventDefault()
	        if (!input.value.trim()) {
	          return
	        }
	        dispatch(addTool(input.value))
	        input.value = ''
	      }}>
	        <input ref={node => {
	          input = node
	        }} />
	        <button type="submit">
	          Add Todo
	        </button>
	      </form>
    </div>
	)
}
addTool = connect()(addTool)

export default addTool