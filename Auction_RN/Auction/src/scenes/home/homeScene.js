import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button
} from 'react-native';


export default class HomeScene extends Component {  
    static navigationOptions = {
        title: '主页'
    }
    
    backToLogin = () => {
        const { goBack } = this.props.navigation;
        goBack();
    }

    render() {
        return (
            <View
                style={styles.container}>
                <Text
                    style={styles.content}
                >登录成功!这是主页!</Text>
                <Button
                    onPress={this.backToLogin}
                    style={styles.button}
                    title='点击返回登陆'/>  //设置按钮标题
            </View>
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
    content: {
        fontSize: 40,
    },
});
