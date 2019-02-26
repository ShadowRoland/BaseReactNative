import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert
} from 'react-native';

export default class RegisterScene extends Component {
    static navigationOptions = {
        title: '注册'
    }

    username = '';
    password = '';
    confirmPassword = '';

    onUsernameChanged = (newUsername) => {
        console.log(newUsername);
        this.username = newUsername;
    };

    onPasswordChanged = (newPassword) => {
        console.log(newPassword);
        this.password = newPassword;
    };

    onConfirmPasswordChanged = (newConfirmPassword) => {
        console.log(newConfirmPassword);
        this.confirmPassword = newConfirmPassword;
    }

    blurTextInput = () => {
        this.refs.username.blur();
        this.refs.password.blur();
        this.refs.confirmPassword.blur();
    }

    register = () => {
        if (this.username != '' && this.password != '') {
            if (this.username != 'Admin') {
                if (this.password === this.confirmPassword) {
                    const { goBack } = this.props.navigation;

                    Alert.alert("注册成功","返回登陆",[{text: '确定', onPress: () => { goBack(); }}])
                } else {
                    Alert.alert("注册失败","密码与确认密码不同");
                }
            } else {
                Alert.alert("注册失败","此用户名已经被注册");
            }
        } else {
            Alert.alert("注册失败","用户名或密码不能为空");
        }
    };

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1.0}
                onPress={this.blurTextInput}
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="username"
                        onChangeText={this.onUsernameChanged}
                        style={styles.input}
                        autoCapitalize='none'
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'用户名'}
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="password"
                        onChangeText={this.onPasswordChanged}
                        style={styles.input}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'密码'}
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="confirmPassword"
                        onChangeText={this.onConfirmPasswordChanged}
                        style={styles.input}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'确认密码'}
                    />
                </View>
                <TouchableOpacity
                    onPress={this.register}
                    style={styles.button}>
                    <Text
                        style={styles.btText}>注册</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});
