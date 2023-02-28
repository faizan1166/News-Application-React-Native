import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {Icon} from '@rneui/base';
import {Input} from 'react-native-elements';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

const Search = () => {
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [fetchedData, setFetchedData] = useState([]);

  const fetchArticles = async data => {
    try {
      const response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_16521ffadfee07bdfc352ed4e05e10148621c&country=in&language=en&q=${data}`,
      );
      setFetchedData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  //   const fetchCities = text => {
  //     setCity(text);
  //     fetch(
  //       `https://newsdata.io/api/1/news?apikey=pub_16451a6105115f7aa24cad79196de12fc739e&country=in&language=en&q=${text}`,
  //     )
  //       .then(item => item.json())
  //       .then(cityData => {
  //         setFetchedData(cityData);
  //         console.log(cities);
  //       })
  //       .catch(function (error) {
  //         console.log(
  //           'There has been a problem with your fetch operation: ' +
  //             error.message,
  //         );
  //         throw error;
  //       });
  //   };

  //   const btnClick = async () => {

  //     navigation.navigate('details', {items: city});
  //   };

  //   const listClick = async cityname => {
  //     setCity(cityname);
  //     await AsyncStorage.setItem('newcity', cityname);
  //     navigation.navigate('home', {city: cityname});
  //   };

  return (
    <View style={{flex: 1,alignItems:"center",justifyContent:"center"}}>
      <Input style={{color:"white"}}
        placeholder="Type something to search.."
        inputContainerStyle={{
          borderColor: '#9e2b23',
          backgroundColor: '#9e2b23',
          width: windowWidth,
          alignSelf: 'center',
        }}
        leftIcon={
          <Icon
            name="search"
            margin={10}
            size={20}
            color="#fff"
            type="ionicon"
          />
        }
        value={data}
        onChangeText={e => {
            fetchArticles(e);
          setData(e);
        }}
      />
<Text>{data}</Text>
      <FlatList
        data={fetchedData}
        renderItem={({item}) => {<>
          <Text style={{flex:1,alignSelf:"center",justifyContent:"center"}}>{item.title}</Text>
          </>
        }}
      />

      {/* <Button
        theme={{colors: {primary: '#00aaff'}}}
        style={{margin: 20}}
        icon="content-save"
        mode="contained"
        onPress={() => btnClick()}>
        Press
      </Button> */}
    </View>
  );
};

export default Search;
