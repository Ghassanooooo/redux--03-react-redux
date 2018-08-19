import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index' 


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        let list=this.props.res.map((list,index)=>{
         return   <li key={index} onClick={()=>this.props.onDeleteResults(list.id)}>{list.value}</li>
        })
        console.log(this.props.res)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDcrementCounter}  />
                <CounterControl label="Add 5" clicked={ this.props.onAdd}  />
                <CounterControl label="Subtract 8" clicked={ this.props.onSub}  />
                <hr />
                <button onClick={()=>this.props.onGetResults(this.props.ctr)}>GET RESULTS</button>
                <ul>
                    {list}
                </ul>
            </div>

        );
    }
}

//for one reducer function 

// const mapStateToProps = state => {
//     return {
//         ctr: state.counter,
//         res: state.results
//     };
// };

// for mul reducer redux created nested state
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        res: state.res.results
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.increment()),
        onDcrementCounter: () => dispatch(actions.dcrement()),
        onAdd: () => dispatch(actions.add(5)),
        onSub: () => dispatch(actions.sub(8)),
        onGetResults: (result) => dispatch(actions.getStore(result)),
        onDeleteResults: (id) => dispatch(actions.deleteList(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);