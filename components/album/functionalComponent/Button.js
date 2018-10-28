import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressClicked, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPressClicked} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: "#F2635F",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "blue",
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        alignSelf: 'center',
        color: "#004C70",
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
}

export default Button;