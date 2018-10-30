import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

//Importing Functional Components
//Project is Done
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
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const styles = {

}

export default AlbumList;