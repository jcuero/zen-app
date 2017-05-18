/**
 * Created by Fary Hurtado on 16/05/2017.
 */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchZen} from './ZenState';
import ZenView from './ZenView';


function mapStateToProps(state) {
    return {
        zen: state.zenState.zen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch,
        fetchZen: fetchZen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZenView);