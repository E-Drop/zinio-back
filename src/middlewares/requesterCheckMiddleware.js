import RequestIp from "@supercharge/request-ip";
import {constants} from "../utils/constants.js";
import errorsDispatcher from "../utils/errorsDispatcher.js";

const { REQUESTER_VALID_IP } = constants;
const requesterCheckMiddleware = (req, res, next) => {
  const ip = RequestIp.getClientIp(req);
  if (ip !== REQUESTER_VALID_IP) {
    return errorsDispatcher(res, "FORBIDDEN");
  }
  return next();
};

export default requesterCheckMiddleware;
