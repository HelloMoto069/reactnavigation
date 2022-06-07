import { StyleSheet, Text, View, Button, } from 'react-native'
import React from 'react'

const ContactUs = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Contact Us</Text>
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
                    title="About"
                    onPress={() =>
                        navigation.navigate('AboutUs')}
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

export default ContactUs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
})