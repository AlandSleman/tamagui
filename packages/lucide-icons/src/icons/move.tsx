import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Polyline points="5 9 2 12 5 15" stroke={color} />
      <Polyline points="9 5 12 2 15 5" stroke={color} />
      <Polyline points="15 19 12 22 9 19" stroke={color} />
      <Polyline points="19 9 22 12 19 15" stroke={color} />
      <Line x1="2" x2="22" y1="12" y2="12" stroke={color} />
      <Line x1="12" x2="12" y1="2" y2="22" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Move'

export const Move = memo<IconProps>(themed(Icon))
