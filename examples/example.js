'use strict'

import React from 'react'

const data = [
	{
		title: 'Hello world 0'
	},
	{
		title: 'Hello world 1'
	},
	{
		title: 'Hello world 2'
	},
	{
		title: 'Hello world 3'
	}
]

/**
 * example
 *
 * @class example
 */

class example extends React.Component {
	constructor() {
		super()

		this.state = {
			start: 0,
			total: 4,
			range: 3,
			style: {
				container: 'container custom',
				links: 'links custom'
			}
		}
	}

	render() {
		<div>
			{this.renderData()}
			<Pagination
				customStyles={this.getStyles()}
				start={this.state.start}
				totalResults={this.state.total}
				onPaginateNext={this.handlePaginate.bind(this, this.state.start + this.state.range)}
				onPaginatePrev={this.handlePaginate.bind(this, this.state.start - this.state.range)}
				range={this.state.range}
			/>
		</div>
	}

	renderData() {
		return data.map((title) => {
			{title}
		})
	}

	handlePaginate(start) {
		console.log('paginate to page number ' + start);
	}

	getStyles() {
		return {
			container: 'container',
			links: 'links'
		}
	}
}

export default example