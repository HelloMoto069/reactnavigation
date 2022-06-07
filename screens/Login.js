import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
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
                    title="Contact"
                    color="#841584"
                    onPress={() =>
                        navigation.navigate('ContactUs')}
                />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
})