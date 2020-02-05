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


class HelloComponentWithState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    componentDidMount = () => {
        this.setState( {name: "World"});
    }


    sayHello = () => {
        this.setState( { name: this.props.name});
    }

    render() {
        return (
            <Fragment>
                <Text>Hello {this.props.message}</Text>
                <Button title="Say hello" onPress={this.sayHello} />
                <Text>Hello {this.state.name}</Text>
            </Fragment>
        );
    }

}

export default HelloComponentWithState;