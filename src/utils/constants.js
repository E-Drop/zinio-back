export const constants = {
  SPECIFIC_URIS: {
    ISSUES: `/issues`,
  },
  REQUESTER_VALID_IP: '::1',
  RESPONSES: {
    BAD_REQUEST: {
      CODE: 400,
      MESSAGE: ' Bad request. The request could not be understood by the server due to malformed syntax.'
    },
    NOT_FOUND: {
      CODE: 404,
      MESSAGE: `Not found. The resource you're trying to reach has not been found.`
    },
    FORBIDDEN: {
      CODE: 403,
      MESSAGE: `Permission denied. could not perform this operation`
    },
    SERVER_ERROR: {
      CODE: 500,
      MESSAGE: 'Server error. Something went wrong try it again later.'
    }
  }
};