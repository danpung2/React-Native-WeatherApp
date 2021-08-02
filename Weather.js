import React from "react";
import { View, Text, StyleSheet, StatusBar, Alert } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from "react-native";
const goTo = "Go to listen";

const weatherOptions = {
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#c2e59c", "#64b3f4"],
        title: "Drizzle",
        subtitle: "Let's listen 'Is this bad b****** number?' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650733"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#0f0c29", "#2C5364"],
        title: "Thunderstorm",
        subtitle: "Let's listen 'Psycho' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650732"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#0F2027", "#2C5364"],
        title: "Rain",
        subtitle: "Let's listen 'Weather' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650730"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#D3CCE3", "#E9E4F0"],
        title: "Snow",
        subtitle: "Let's listen 'Weather' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650730"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Quit' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650731"
    },
    Smoke: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Is this bad b****** number?' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650733"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Quit' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650731"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Is this bad b****** number?' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650733"
    },
    Fog: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Quit' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650731"
    },
    Sand: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Psycho' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650732"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Is this bad b****** number?' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650733"
    },
    Ash: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Quit' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650731"
    },
    Squall: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Psycho' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650732"
    },
    Tornado: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Let's listen 'Psycho' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650732"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fc4a1a", "#f7b733"],
        title: "Sunny",
        subtitle: "Let's listen 'BEAM BEAM' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650729"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#3a6073", "#3a7bd5"],
        title: "Cloudy",
        subtitle: "Let's listen 'Weather' whose SoYeon",
        songId: "https://www.melon.com/song/detail.htm?songId=33650730"
    }
};


export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                <Text style={styles.subtitle} onPress={() => Linking.openURL(weatherOptions[condition].songId)}>{goTo}</Text>
            </View>
        </LinearGradient>
    );

}


Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 18

    },
    textContainer: {
        paddingHorizontal: 10,
        alignItems: "flex-start"
    }
});