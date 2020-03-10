import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
    render () {
        // this.props === { songs: state.songs }
        console.log(this.props)
        return (
            <div>
                SongList
            </div>
        )
    }
}

const mapStateToPros = (state) => {
    return {
        songs: state.songs,

    }
}

export default connect(mapStateToPros)(SongList);

