import axios from 'axios';
import { FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3000';

export function fetchMessage(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/example`)
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}
