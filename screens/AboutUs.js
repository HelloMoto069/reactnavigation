import { StyleSheet, Text, View, Button, } from 'react-native'
import React from 'react'

const AboutUs = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>About Us</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Back"
                    onPress={() =>
                        navigation.goBack()}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Home"
                    color="#841584"
                    onPress={() =>
                        navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Contact"
                    onPress={() =>
                        navigation.navigate('ContactUs')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    color="#841584"
                    onPress={() =>
                        navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
})