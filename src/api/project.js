import api from './api'

const projectService = { }

projectService.find = (id) => {
  return api.get(`/project/${id}`).then((response) => {
    return response.data
  })
}

export default projectService
