import type { ApiAddressResponse, ApiResponse } from '~/types/api'
import { apiGouvAddress } from '~/utils/api-client'

export const useApiAddress = () => {
  const searchAddress = async (query: string, limit = 10): Promise<ApiResponse<ApiAddressResponse>> => {
    const state = reactive<ApiResponse<ApiAddressResponse>>({
      data: null,
      error: null,
      loading: true
    })

    if (!query || query.trim().length < 3) {
      state.error = { message: 'La recherche doit contenir au moins 3 caractères' }
      state.loading = false
      return state
    }

    try {
      const data = await apiGouvAddress.get<ApiAddressResponse>('/search/', {
        q: query.trim(),
        limit
      })

      state.data = data
      state.error = null
    } catch (error: any) {
      state.error = error
      state.data = null
    } finally {
      state.loading = false
    }

    return state
  }

  return {
    searchAddress
  }
}
