
import { SUBMITTED, ERROR } from './commontTypes';



const changeSubmitted = () => ({
  type: SUBMITTED,
});

const submissionError = () => ({
  type: ERROR,
});

const submitData = (data) => async (dispatch) => {

};

export { changeSubmitted, submitData, submissionError };
