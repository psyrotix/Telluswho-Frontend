import React from 'react'

type defaultProps = {
  color: string;
}

export default class Eclipse extends React.Component {
  constructor (props) {
    super(props)
  }
  props: defaultProps
  render () {
    return (
      <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' height='15px' width='15px'
        viewBox='0 0 50 50' style={{ enableBackground: 'new 0 0 50 50' }} xmlSpace='preserve'>
        <path fill={this.props.color} d='M43.1,13.4c3.3,10.5-2.6,21.8-13.1,25c-10.5,3.3-21.8-2.6-25-13.1C3.1,19.5,4.1,13.6,7.1,8.8c-5,6-7,14.4-4.5,22.5
         	C6.5,44,20,51,32.6,47.1S52.4,29.7,48.4,17C45.9,9,39.5,3.2,32,1C37.1,3.3,41.3,7.7,43.1,13.4z' />
        <circle cx={24.5} cy={20.5} r={15.5} fill={this.props.color} />
        <circle cx={33} cy={27} r={0} fill={this.props.color} />
      </svg>

    )
  }
 }
