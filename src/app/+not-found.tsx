import { Link, Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

import { ThemedView } from '@/components/ThemedView'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <Text>This screen doesn't exist.</Text>
        <Link href="/login" style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
