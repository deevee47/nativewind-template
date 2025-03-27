import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
      <Tabs screenOptions={{ headerShown: false }}>
          <Tabs.Screen name='home' options={{ title: "Home"}} />
          <Tabs.Screen name='saved' options={{ title: "Saved"}} />
          <Tabs.Screen name='search' options={{ title: "Search"}} />
          <Tabs.Screen name='profile' options={{ title: "Profile"}} />

    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})