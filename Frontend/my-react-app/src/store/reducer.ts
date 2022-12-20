import { GET_TRANSFER } from './actionTypes';
import { TransfersState, TransferAction } from '../types/transfers';

const initialState: TransfersState = {
  transfers: []
}


export const reducer = (
  state: TransfersState = initialState,
  action: TransferAction
): TransfersState => {
  switch (action.type) {
    case GET_TRANSFER:
      return {
        ...state,
        transfers: []
      }
    default:
      return state
  }
}