'use strict'

import React from 'react'

/**
 * Pagination
 *
 * A div tag (`<div/>`) that
 * renders a pagination component
 *
 * @class Pagination
 *
 * Parameters
 *  @onPaginateNext (function) call when you hit next
 *  @onPaginatePrev (function) call when you hit prev
 *  @totalResults (int) total items in the list
 *  @start (int) The initial item selected.
 *  @range (int) The range of pages displayed
 *  @customStyles (object)
 *      Styles available:
 *      {
 *          container: ___
 *          links: ___
 *      }
 */
class Pagination extends React.Component {
	static propTypes = {
		onPaginateNext: React.PropTypes.func,
		onPaginatePrev: React.PropTypes.func,
		totalResults: React.PropTypes.number,
		start: React.PropTypes.number,
		customStyles: React.PropTypes.object,
		range: React.PropTypes.number
	};

	render() {
		let containerStyle = "result__pagination";

		if (typeof this.props.customStyles.container !== 'undefined') {
			containerStyle = this.props.customStyles.container;
		}

		return (
			<div className={containerStyle}>
				<div className="result__pagination-inner">
					{this.renderPaginationPrev()}
					{this.renderPaginationNext()}
				</div>
			</div>
		)
	}

	renderPaginationPrev() {
		let classes = "button button--primary button--fill";

		if (typeof this.props.customStyles.buttons !== 'undefined') {
			classes = this.props.customStyles.buttons;
		}

		let onClick = this.props.onPaginatePrev;

		if (this.props.start === 0) {
			classes += " disabled";
			onClick = null;
		}

		return (
			<a className={classes} onClick={onClick}>Previous</a>
		)
	}

	renderPaginationNext() {
		let classes = "button button--primary button--fill";

		if (typeof this.props.customStyles.links !== 'undefined') {
			classes = this.props.customStyles.links;
		}

		let onClick = this.props.onPaginateNext;

		if ((this.props.start + this.props.range) >= this.props.totalResults) {
			classes += " disabled";
			onClick = null;
		}

		return (
			<a className={classes} onClick={onClick}>Next</a>
		)
	}
}

export default Pagination

