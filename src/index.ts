import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from '../src/helpers/url'
import { transformRequest } from '../src/helpers/data'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  console.log(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): string {
  const { data } = config
  return transformRequest(data)
}

export default axios
