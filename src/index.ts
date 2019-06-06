import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from '../src/helpers/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  console.log(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios