import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//Importing Functional Components
import AlbumDetails from './functionalComponent/AlbumDetails';

class AlbumList extends Component {
    state = {
        albums: []
    }
    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        let response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        this.setState({
            albums: response.data
        });
    }

    renderAlbums = () => {
        return this.state.albums.map((album, i) => {
            return (
                <AlbumDetails key={i} album={album} />
            );
        })
    }
    render() {
        const { } = styles;
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

const styles = {

}

export default AlbumList;