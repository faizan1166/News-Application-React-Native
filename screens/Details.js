import {View, Text, Dimensions, ScrollView, Image} from 'react-native';
import React from 'react';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {Card} from 'react-native-paper';


const Details=({route})=> {

  return (
    <View>
      <ScrollView>
        <Card
          containerStyle={{
            width: windowWidth,
            alignSelf: 'center',
            marginTop: 0,
          }}>
          {route.params.items.image_url ? (
            <Card.Cover
              style={{resizeMode: 'cover'}}
              source={{uri: route.params.items.image_url}}
            />
          ) : (
            <Card.Cover
              style={{resizeMode: 'cover'}}
              source={{
                uri: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              }}
            />
          )}
          <Card.Content>
            <Text
              style={{fontWeight: 'bold', color: '#000', marginTop: 15}}
              variant="titleLarge">
              {route.params.items.title}.
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                style={{
                  height: windowHeight / 20,
                  width: windowWidth / 22,
                  resizeMode: 'contain',
                  marginTop: -8,
                }}
                source={require('../images/calendar.png')}
              />
              <Text style={{marginBottom: 10, marginLeft: 10}}>
                {route.params.items.pubDate.slice(0, 11)} | updated{' '}
                {route.params.items.pubDate.slice(-9, -3)} | country:{' '}
                {route.params.items.country[0]}
              </Text>
            </View>

            <Text variant="bodyMedium" style={{marginTop: 2}}>
              {route.params.items.description}
            </Text>

            <Text variant="bodyMedium">{route.params.items.content}</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}
export default Details