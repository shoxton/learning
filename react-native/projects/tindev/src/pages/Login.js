import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Image, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({navigation}) {
    const [ user, setUser ] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('Main', {user})
            }
        })
    }, []);

    async function handleLogin() {
        const response = await api.post('/devs', {username: user});
        const { _id } = response.data; 

        await AsyncStorage.setItem('user', _id)

        navigation.navigate('Main', { user: _id });
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === 'ios'}
        >
            <Image source={logo} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Type your Github user"
                placeholderTextColor="#999"
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView> 
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },

    input: {
        height: 46,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
        alignSelf: 'stretch'
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});