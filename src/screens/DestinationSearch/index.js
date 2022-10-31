import { View, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles'
import PlaceRow from './placeRow';
import { useNavigation } from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation()

  const checkNavigation = () =>{
    console.warn('check navigation is called')
    if(originPlace && destinationPlace){
      setOriginPlace(true)
      setDestinationPlace(true)
      console.warn('gap has been filled')
      navigation.navigate('SearchResults')
    }
  }

  useEffect(()=>{
      checkNavigation();   
  },[originPlace, destinationPlace])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
              placeholder='From?'
              onPress={(data, details = null) => {
                setOriginPlace({data, details})
              }}
              enablePoweredByContainer={false}
              suppressDefaultStyles
              currentLocation={true}
              currentLocationLabel="Current location"
              styles={{
                textInput:styles.textInput,
                container: styles.autocompleteContainer,
                listView:styles.listView,
                separator:styles.separator,
              }}
              fetchDetails
              query={{
                key: 'AIzaSyBgzowpWQeT3t89DGpR3rdvCSNyykVW5IA',
                language: 'en',
              }}
              renderRow={(data)=> <PlaceRow data={data}/>
              }
              renderDescription={(data)=> data.description || data.vicinity
              }
              predefinedPlaces={[homePlace, workPlace]}
          />

          <GooglePlacesAutocomplete
              placeholder='Send To?'
              onPress={(data, details = null) => {
                setOriginPlace({data, details})
              }}
              enablePoweredByContainer={false}
              suppressDefaultStyles
              styles={{
                textInput:styles.textInput,
                container:{...styles.autocompleteContainer,top:55
                },
                separator:styles.separator,
              }}
              fetchDetails
              query={{
                key: 'AIzaSyBgzowpWQeT3t89DGpR3rdvCSNyykVW5IA',
                language: 'en',
              }}
              renderRow={(data)=> <PlaceRow data={data}/>
              }
        />

        {/* Circle near Origin Input */}
        <View style={styles.circle}/>

          {/* Line between dots */}
          <View style={styles.line}/>

          {/* Square near Destination input */}
          <View style={styles.square}/>

      </View>
    </SafeAreaView>
    
  )
}

export default DestinationSearch