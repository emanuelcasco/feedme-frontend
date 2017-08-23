import api from './api'

const reportService = { }

reportService.create = (report) => {
  return api.post(`/project/${report.project.id}/issues`, {
    report
  }).then((response) => {
    return response.data
  })
}

export default reportService
