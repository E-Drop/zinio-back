import RequestIp from "@supercharge/request-ip";
import errorsDispatcher from "../utils/errorsDispatcher.js";
const requesterCheckMiddleware = (req, res, next) => {
  const ip = RequestIp.getClientIp(req);
  if(ip !== '::1') {
    return errorsDispatcher(res, "FORBIDDEN");
  }
  return next();
};

export default requesterCheckMiddleware;