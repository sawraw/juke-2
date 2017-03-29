import React from 'react';
import Artists from './Artists';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a href="#" onClick={deselectAlbum}>ALBUMS</a>
          <Link to={Artists}>ARTISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
