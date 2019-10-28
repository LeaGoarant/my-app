import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter : state
});

const CounterComponent = ({counter, dispatch}) => (

    <>
    <p>{counter}</p>
        <button onClick={() => dispatch({type : 'ADD'})}> + </button>
        <button onClick={() => dispatch({type : 'REMOVE'})}> - </button>

        <button onClick={() => dispatch({type : 'ADD_TEN'})}> + </button>
        <button onClick={() => dispatch({type : 'REMOVE_TEN'})}> - </button>

        <button onClick={() => dispatch({type : 'RESET'})}> Reset all </button>
    </>
);

export default connect(mapStateToProps)(CounterComponent);