import {createStore} from 'redux'
// import initialState from './service';
import reducer from './reducer'
const store = createStore(reducer)
export default store;