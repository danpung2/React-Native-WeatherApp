import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "7eb4dbb0ec64164a4f33289e40ce15d2";

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const { data: { main: { temp }, weather } } = await axios.get(url);

    this.setState({ isLoading: false, condition: weather[0].main, temp: temp })
  };


  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      const { coords: { latitude, longitude } } = location;
      this.getWeather(latitude, longitude)
      // this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Something wrong", "Please try again");
    }
    
  }

  componentDidMount() {
    this.getLocation();

  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
