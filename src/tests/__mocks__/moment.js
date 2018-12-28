//Must grab the original moment.js because this mock calls itself. 
//If we use the import moment from 'moment' we will cause a stack trace error
//and will cause it to fail because of the loss of all the memmory

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}