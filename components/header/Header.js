import React, { Component } from 'react';

import { View, Text } from 'react-native';

class Header extends Component {
    render() {
        const { headerTextStyles, headerViewStyles } = styles;
        return (
            <View style={headerViewStyles}>
                <Text style={headerTextStyles}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = {
    headerViewStyles: {
        backgroundColor: "#004C70",
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderBottomColor: 'rgba(242, 99, 95, 0.5)',
        borderBottomWidth: 1,
        elevation: 2,
        position: 'relative'
    },
    headerTextStyles: {
        fontSize: 20,
        color: "#F2635F"
    }
}

export default Header;