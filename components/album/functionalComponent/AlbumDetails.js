import React, { Component } from 'react';

import { Text } from 'react-native';

//Import components
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails = (props) => {
    console.log(props.album);
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    );
}

const styles = {

}

export default AlbumDetails;