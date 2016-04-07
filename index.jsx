import React from 'react';
import {render} from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect} from 'react-redux';
import * as Action from './actions/action';
import store from './store/store';
import Change from './containers/change.jsx';
import Hello from './containers/hello.jsx';


class App extends React.Component{

    constructor(props) {
        console.log('constructor',props);
        super(props);
    }

    render() {
        const { actions,text,sds} = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('mapDispatchToProps',state);
  return { 
    text: state.text ,
    sds: state.sds
}
}
/**
 * 绑定事件
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
function mapDispatchToProps(dispatch){
    console.log('dispatch',dispatch);
    return{
        actions : bindActionCreators(Action,dispatch)
    }
}

App = connect(mapStateToProps,mapDispatchToProps)(App)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

