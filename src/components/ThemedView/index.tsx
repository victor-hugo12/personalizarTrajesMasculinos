import { View, type ViewProps } from 'react-native'

import { useTheme } from '@/context/ThemeContext'

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const { theme } = useTheme()
  const backgroundColor = lightColor || darkColor || theme.colors.background

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}
