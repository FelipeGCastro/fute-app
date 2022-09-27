import Config from 'react-native-config'

const ENV_VARIABLES = {
  environment: Config.ENVIRONMENT,
  api: {
    baseURL: Config.API_URL,
    key: Config.API_KEY,
    url: Config.API_URL,
  },
}

const configVariables = ENV_VARIABLES

export default configVariables
