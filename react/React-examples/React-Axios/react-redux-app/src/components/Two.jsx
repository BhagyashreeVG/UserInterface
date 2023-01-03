import React from 'react'
import { multiplyByTwo } from '../actions'
import { connect } from 'react-redux';

function Two(props) {
    console.log("In 2"+ JSON.stringify(props))
  return (
    <>
      <div>{ props.twoValue }</div>
      <p> Click button to multiply above number by 2</p>
      <button onClick={ () => { console.log({props}); props.multiplyByTwo(props.twoValue) }}>Click</button> 
    </>
  )
}

function mapStateToProps(state) {
    return {
        twoValue: state.two_reducer.twoValue
    };
  }
  
  // function mapDispatchToProps(dispatch) {
  //   return bindActionCreators({ addCharacterById }, dispatch)
  // }

 /*  const mapDispatchToProps = dispatch => {
	return {
		multiplyTwo: () => dispatch(multiplyByTwo())
	} 
}*/
  
  export default connect(mapStateToProps, { multiplyByTwo })(Two);