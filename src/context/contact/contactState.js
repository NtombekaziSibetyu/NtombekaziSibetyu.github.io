import React, { useReducer} from 'react'
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    SEND_EMAIL
} from '../types';

const contactState = props => {
    const initialState = null;
    const [state, dispatch] = useReducer(conntactReducer, initialState);
}
