export const host = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const receiveMessageRoute = `${host}/api/messages/getmsg`;

;