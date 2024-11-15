import httpService from "../utils/httpService"

const getStories = async () => {
  return await httpService.get('/stories/')
}

export { getStories }