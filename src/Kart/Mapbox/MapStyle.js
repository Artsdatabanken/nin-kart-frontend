import { fromJS } from 'immutable'
import MAP_STYLE from './default.json'
import MAP_STYLE_DARK from './dark.json'
import MAP_STYLE_VINTAGE from './vintage.json'
import MAP_STYLE_SATELLITE from './satellite.json'

export const Kalk = fromJS({
  id: 'kalk',
  type: 'fill',
  source: 'composite',
  'source-layer': 'kalk',
  layout: {},
  paint: {
    'fill-color': {
      base: 1,
      type: 'exponential',
      property: 'KALKINNHOLD_HOVEDBERGART',
      stops: [
        [0, 'hsla(0, 0%, 0%, 0)'],
        [1, 'hsla(0, 6%, 94%, 0.6)'],
        [2, 'hsla(0, 19%, 88%, 0.6)'],
        [3, 'hsla(0, 35%, 80%, 0.6)'],
        [4, 'hsla(0, 59%, 63%, 0.6)'],
        [5, 'hsla(0, 84%, 32%, 0.6)'],
      ],
      default: 'hsl(0, 4%, 94%)',
    },
  },
})

export const Ultramafisk = fromJS({
  id: 'ultramafisk',
  type: 'fill',
  source: 'composite',
  'source-layer': 'ultramafisk',
  filter: ['==', '$type', 'Polygon'],
  layout: {},
  paint: {
    'fill-color': 'hsl(329, 100%, 70%)',
  },
})

export const Seksjoner = fromJS({
  id: 'seksjoner',
  type: 'fill',
  source: 'composite',
  'source-layer': 'Seksjoner2017_4326-c6e9g5',
  layout: {},
  paint: {
    'fill-color': {
      base: 1,
      type: 'exponential',
      property: '6SE',
      stops: [
        [1, '#0f27ff'],
        [2, '#0f8cff'],
        [3, '#0ffcff'],
        [4, '#8cfcff'],
        [5, '#cafcff'],
      ],
    },
    'fill-opacity': 0.7,
  },
})

export const Soner = fromJS({
  id: 'soner',
  type: 'fill',
  source: 'composite',
  'source-layer': 'soner2017_4326-6fcqhb',
  layout: {},
  paint: {
    'fill-color': {
      base: 1,
      type: 'exponential',
      property: '6SO',
      stops: [
        [1, '#fdc26e'],
        [2, '#fdfa40'],
        [3, '#a5fea4'],
        [4, '#4de600'],
        [5, '#309afd'],
      ],
    },
  },
})

export const NiN = fromJS({
  id: 'nin',
  type: 'fill',
  source: 'composite',
  'source-layer': 'naturomrader6',
  layout: {},
  interactive: true,
  paint: {
    'fill-color': 'hsl(120, 22%, 24%)',
    'fill-outline-color': 'hsl(146, 26%, 49%)',
  },
})
export const NiNHover = fromJS({
  id: 'nin-hover',
  type: 'fill',
  source: 'composite',
  'source-layer': 'naturomrader6',
  filter: ['==', 'localId', ''],
  layout: {},
  paint: {
    'fill-color': 'hsla(120, 78%, 41%, 0.75)',
    'fill-outline-color': 'hsla(120, 84%, 47%, 0.75)',
  },
})

export const defaultMapStyle = fromJS(MAP_STYLE)
export const darkMapStyle = fromJS(MAP_STYLE_DARK)
export const vintageMapStyle = fromJS(MAP_STYLE_VINTAGE)
export const satelliteStyle = fromJS(MAP_STYLE_SATELLITE)