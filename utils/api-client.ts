import type { ApiError } from '~/types/api'

export class ApiClient {
  private baseUrl: string
  private timeout: number

  constructor(baseUrl: string, timeout = 10000) {
    this.baseUrl = baseUrl
    this.timeout = timeout
  }

  async get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
    const url = new URL(endpoint, this.baseUrl)

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value))
      })
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(url.toString(), {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json'
        }
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw this.createError(
          `Erreur HTTP: ${response.status}`,
          'HTTP_ERROR',
          response.status
        )
      }

      return await response.json()
    } catch (error) {
      clearTimeout(timeoutId)

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw this.createError('Timeout: La requête a pris trop de temps', 'TIMEOUT')
        }
        throw this.createError(error.message, 'NETWORK_ERROR')
      }

      throw this.createError('Erreur inconnue', 'UNKNOWN_ERROR')
    }
  }

  private createError(message: string, code?: string, status?: number): ApiError {
    return { message, code, status }
  }
}

export const apiGouvAddress = new ApiClient('https://api-adresse.data.gouv.fr')
export const apiGeoCommunes = new ApiClient('https://geo.api.gouv.fr')
