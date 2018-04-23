import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        debugger;
        console.log('Compnent WIll Mount');
    }

    render() {
        return (
            <View>
                <Text>ALBUMS!2</Text>
            </View>
        );
    }
}

const styles = {

}

export default AlbumList;