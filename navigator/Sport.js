import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-paper';
import axios from 'axios';

const Sport = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        'https://newsdata.io/api/1/news?apikey=pub_165274cc54c2f29134707624b299ef9ea9bf6&country=in&language=en&category=sports',
      );
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <>
            <Card
              style={{
                width: windowWidth - 12,
                marginTop: 6,
                borderRadius: 10,
                alignSelf: 'center',
                resizeMode: 'contain',
                borderWidth: 0,
                shadowColor: '#000',
                elevation: 20,
                height: windowHeight / 2.45,
              }}
              onPress={() =>
                navigation.navigate('details', {
                  items: item,
                })
              }>
              {item.image_url ? (
                <Card.Cover
                  style={{resizeMode: 'cover'}}
                  source={{uri: item.image_url}}
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
                  style={{fontWeight: 'bold', color: '#000'}}
                  variant="titleLarge">
                  {item.title}.
                </Text>
                {item.description ? (
                  <Text variant="bodyMedium">
                    {item.description.slice(0, 75)}...
                  </Text>
                ) : (
                  <Text variant="bodyMedium">
                    {item.content.slice(0, 75)}...
                  </Text>
                )}
              </Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                }}>
                <Image
                  style={{
                    height: windowHeight / 21,
                    width: windowWidth / 23,
                    resizeMode: 'contain',
                    marginTop: -10,
                    marginRight: 5,
                  }}
                  source={require('../images/calendar.png')}
                />
                <Text style={{fontSize: 11}}>{item.pubDate.slice(0, 11)}</Text>
              </View>
            </Card>
          </>
        )}
      />
    </>
  );
};
export default Sport;
