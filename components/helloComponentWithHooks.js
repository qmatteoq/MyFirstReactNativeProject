import React, {Fragment, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';


const HelloComponentWithHooks = (props) => {

    const [name, setName] = useState('');

    useEffect(() => {
        setName("world");
    }, []);

    sayHello = () => {
        setName(props.name);
    };

    return (
        <Fragment>
            <Text>Hello {props.message}</Text>
            <Button title="Say hello" onPress={sayHello} />
            <Text>Hello {name}</Text>
        </Fragment>
    );

}

export default HelloComponentWithHooks;