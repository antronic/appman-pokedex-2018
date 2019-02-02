import React, { Component, useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'

// const ApiLoaderComponent = (props) => {
//   // const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log('test')
//   })

//   return (
//     <div>
//       API
//     </div>
//   )
// }

class ApiLoaderComponent extends Component {
  componentDidMount() {
    console.log('test')
  }
  

  render() {

    return (
      <Fragment>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

const ApiLoader = connect(mapStateToProps, mapDispatchToProps)(ApiLoaderComponent)

export default ApiLoader