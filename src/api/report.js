import api from './api'

const reportService = { }

reportService.createReport = (report) => {
  return api.post(`/project/${report.project.id}/issues`, { report })
  .then((response) => {
    return response.data
  })
}

export default reportService
