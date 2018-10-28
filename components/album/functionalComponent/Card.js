import React, { Component } from 'react';

import { View, Text } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#004C70",
        borderBottomColor: 'rgba(242, 99, 95, 0.5)',
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        marginTop: 10,
    }
}

export default Card;