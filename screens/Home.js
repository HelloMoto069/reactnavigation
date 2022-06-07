import { StyleSheet, Text, View, Button, } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="About"
                    color="#841584"
                    onPress={() =>
                        navigation.navigate('AboutUs')}
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

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
})