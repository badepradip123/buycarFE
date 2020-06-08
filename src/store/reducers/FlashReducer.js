import { ADD_FLASH_MESSAGE } from '../Types';
import shortid from 'shortid';

const addFlashMessage = (state, action) => {
  return [
    ...state,
    {
      id: shortid.generate(),
      type: action.message.type,
      text: action.message.text,
    },
  ];
};

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return addFlashMessage(state, action);

    default:
      return state;
  }
};
