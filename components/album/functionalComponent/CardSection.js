import React, { Component } from 'react';

import { Text } from 'react-native';

//Import components
import View from './Card';

const CardSection = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>{props.children}</View>
    );
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#004C70",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#F2635F',
        position: 'relative'
    }
}

export default CardSection;