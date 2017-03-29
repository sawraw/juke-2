import React from 'react';
import { Link } from 'react-router'

// const Artists = (props) => {
    class Artists extends React.Component {

        render(){
            const artists = this.props.artists;
            console.log("props is !!!!!!!!!!!", this.props)
            console.log("props.artists is ...........", artists);

    // componentDidMount () {
    //     const albumId = this.props.routeParams.albumId;
    //     const selectAlbum = this.props.selectAlbum;
    //     selectAlbum(albumId);
    // }

        return (
            <div>
            <h3>Artists</h3>
                <div className="list-group">
                {
                artists.map(artist => {
                    return (
                    <div className="list-group-item" key={artist.id}>
                        {/* determine where to actually Link to later! */}
                        <Link to="">{ artist.name }</Link>   
                    </div>
                    )    
                })
                }
            </div>
            </div>
        );
    }
    }



export default Artists;
