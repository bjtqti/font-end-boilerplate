import React ,{Component,Fragment} from 'react'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import classNames from 'classnames'
 
export default class Index extends Component {
	 
	constructor(props) {
    	super(props);
    	this.state = {
    		date: new Date(),
    		isActive:false
    	};
  	}

	componentDidMount() {
		this.timerID = setInterval(()=>{
			this.setState({
				date:new Date()
			})
		},1000)
  	}

  	componentWillUnmount() {
    	clearInterval(this.timerID);
  	}

  	@autobind
  	handleClick(e) {
  		let {isActive} = this.state
  		clearInterval(this.timerID)
  		this.setState({
  			isActive:!isActive
  		})
  	}

	render() {
		const {date,isActive} = this.state
		let iconStatus = classNames('icon-arrow',{'on':isActive})
		 
		return (
			<Fragment>
				<div onClick={this.handleClick} className={iconStatus}></div>
				<div className="header">Hello Web app !</div>
				<div className="copy">{date.toLocaleTimeString()}</div>
			</Fragment>
		)
	}
}


Index.propTypes = {
  initialState: PropTypes.object
}