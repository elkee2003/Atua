import React from 'react';
import {View, Text, Map, Image,} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker,} from 'react-native-maps';

import cars from '../../assets/data/cars'

const HomeMap = () =>{

    const getImage=(type)=>{
        if (type === 'Walk'){
            return require('../../assets/images/Walk.png')
        }
        if (type === 'Bike'){
            return require('../../assets/images/Bike.jpg')
        }
        return require('../../assets/images/top-UberXL.png')
    }

    return(
        <MapView
                style={{height:'100%', width:'100%'}}
                provider={PROVIDER_GOOGLE} 
                showsUserLocation={true}
                region={{
                    latitude: 28.450627,
                    longitude: -16.263045,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                }}  
         >
                {cars.map((car)=>{
                    <Marker
                    key={car.id}
                    coordinate={{ latitude: car.latitude , longitude: car.longitude }}
                    >
                        <Image style={{width:50, height:70,
                        resizeMode:'contain',transform:[{
                            rotate:`${car.heading}.deg`
                        }]
                        }} 
                        source={getImage(car.type)}/>
                    </Marker>
                })}    
        </MapView>

    )
}
export default HomeMap;