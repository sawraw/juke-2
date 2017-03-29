import React from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums';
import axios from 'axios'
import {Link} from 'react-router'


class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    axios.get(`/api/artists/${artistId}/albums`)
      .then(res => res.data)
      .then(albums => this.setState({ albums }));
    axios.get(`/api/artists/${artistId}/songs`)
      .then(res => res.data)
      .then(songs => this.setState({ songs }));
    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => this.setState({ artistName : artist.name }));
  }

  render() {
    
    console.log('~~~props ', this.props);
    console.log('~~~state ', this.state);
    
    const albums = this.state.albums ;
    console.log('~~~albums later ', this.state.albums);
    const songs = this.state.songs ;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;
    const artistName = this.state.artistName;

    return (
      <div>
       {artistName && 
        <h3>{artistName}</h3>
      }
        { albums && 
        <Albums albums = {albums} />
        }
        <h3>Songs</h3>
        { songs &&
        <Songs songs={songs} currentSong={currentSong}
           isPlaying={isPlaying} toggleOne={toggleOne} />
        }
      </div>
  );
              //songs={songs} />
}
}
//     return (
//       <div>
//         <h3>{Artist.name}</h3>
//         <h4>{album.name}</h4>
//         <h4>SONGS</h4>
//       </div>
//     );
//   }
// }

    // <div className="row">
    //       { albums &&
    //         albums.map(album => (
    //           <div className="col-xs-4" key={album.id}>
    //             <Link to={`/albums/${album.id}`} className="thumbnail">
    //               <img src={album.imageUrl} />
    //               <div className="caption">
    //                 <h5>
    //                   <span>{album.name}</span>
    //                 </h5>
    //                 <small>{album.songs.length} songs</small>
    //               </div>
    //             </Link>
    //           </div>
    //         ))
    //       }
    //     </div>


export default Artist;
