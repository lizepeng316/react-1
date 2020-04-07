import {createStore} from 'redux' ;
import {appReducer} from '../action/reducer';


let store = createStore(appReducer)

export{store}
