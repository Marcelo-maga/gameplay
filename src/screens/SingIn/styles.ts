import { StyleSheet } from 'react-native'

import { theme } from '../../global/theme/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  subTitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    lineHeight: 25,
    fontFamily: theme.fonts.title500
  }

})