import errorsDispatcher from "../utils/errorsDispatcher.js";
import findByKey from "../utils/findByKey.js";
import filterByNameAndDescription from "../utils/filterByNameAndDescription.js";
import getIssueDTO from "../utils/getIssueDTO.js";
import { issues } from "../data/issues.js";

export const getIssues = (req, res) => {
  const { q: keywords } = req.query;

  if (keywords) {
    const filteredIssues = filterByNameAndDescription(issues, keywords);
    if (filteredIssues) {
      const issuesToReturn = filteredIssues.map((issue) => getIssueDTO(issue));
      return res.send(issuesToReturn);
    }
    return res.send(filteredIssues);
  }

  if (issues.length) {
    const issuesToReturn = issues.map((issue) => getIssueDTO(issue));
    return res.send(issuesToReturn);
  }

  return errorsDispatcher(res, "NOT_FOUND");
};

export const getIssueById = (req, res) => {
  const { id } = req.params;
  const filteredIssue = findByKey(issues, "id", parseInt(id));

  if (filteredIssue) {
    const issueDTO = getIssueDTO(filteredIssue);
    return res.send(issueDTO);
  }
  return errorsDispatcher(res, "NOT_FOUND");
};
