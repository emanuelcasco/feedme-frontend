import api from './api'

const projectService = { }

projectService.findProjectByHash = (hash) => {
  return api.get(`/project/${hash}`).then((response) => {
    return response.data
  })
}

export default projectService
