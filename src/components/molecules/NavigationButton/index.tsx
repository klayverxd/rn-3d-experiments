import React, {FunctionComponent} from 'react'
import {useNavigation} from '@react-navigation/native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Text} from 'react-native'

interface NavigateButtonProps {
  title: string
  navigateTo: string
}

export const NavigationButton: FunctionComponent<NavigateButtonProps> = ({
  title,
  navigateTo,
}) => {
  const {navigate} = useNavigation()

  return (
    <TouchableOpacity
      style={{
        height: 65,
        width: 185,
        backgroundColor: '#eeede7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        margin: 20,
        borderRadius: 100,
      }}
      onPress={() => navigate(navigateTo)}>
      <Text
        style={{
          color: 'black',
          fontWeight: '900',
          fontSize: 24,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}