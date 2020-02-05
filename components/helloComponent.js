import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';


const HelloComponent = (props) => {
    
    sayHello = () => {
        window.alert(props.name);
    }

    return (
        <Fragment>
            <Text>Hello {props.message}</Text>
            <Button title="Say hello" onPress={sayHello} />
        </Fragment>
    );
}

export default HelloComponent;