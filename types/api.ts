export interface ApiResponse<T> {
  data: T | null
  error: ApiError | null
  loading: boolean
}

export interface ApiError {
  message: string
  code?: string
  status?: number
}

export interface ApiAddressFeature {
  type: 'Feature'
  geometry: {
    type: 'Point'
    coordinates: [number, number]
  }
  properties: {
    label: string
    score: number
    housenumber?: string
    id: string
    name: string
    postcode: string
    citycode: string
    city: string
    context: string
    type: 'housenumber' | 'street' | 'locality' | 'municipality'
    importance: number
    street?: string
  }
}

export interface ApiAddressResponse {
  type: 'FeatureCollection'
  version: string
  features: ApiAddressFeature[]
  attribution: string
  licence: string
  query: string
  limit: number
}

export interface CommuneInsee {
  code: string
  nom: string
  codeDepartement: string
  codeRegion: string
  population?: number
}
