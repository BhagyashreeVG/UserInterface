import React from 'react'
import { multiplyByFive } from '../actions'
import { connect } from 'react-redux';

function Five(props) {
    console.log("In 5"+ JSON.stringify(props))
  return (
    <>
      <div>{ props.fiveValue }</div>
      <p> Click button to multiply above number by 5</p>
      <button onClick={ () => {props.multiplyByFive(props.fiveValue)} }>Click</button> 
    </>
  )
}

function mapStateToProps(state) {
    return {
        fiveValue: state.five_reducer.fiveValue
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
  
  export default connect(mapStateToProps, { multiplyByFive })(Five);