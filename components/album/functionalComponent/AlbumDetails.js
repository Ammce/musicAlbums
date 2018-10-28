import React, { Component } from 'react';

import { Text, View, Image, Linking } from 'react-native';

//Import components
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPressClicked={() => Linking.openURL(url)}> Buy now </Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    headerTextStyle: {
        fontSize: 18,
        color: "#F2635F"
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    imageStyle: {
        height: 200,
        width: "100%"
    }
}

export default AlbumDetails;