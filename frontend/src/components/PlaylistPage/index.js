import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPlaylist } from '../../store/playlists';
import BookPage from '../BookPage'
import './PlaylistPage.css';

const PlaylistPage = () => {
  const dispatch = useDispatch()
  const { playlistId } = useParams();
  const { bookId } = useParams()
  const playlist = useSelector(state => state.playlists.playlist);
  const userName = useSelector(state => state.playlists.userName);

  useEffect(() => {
    dispatch(loadPlaylist(bookId, playlistId));
  }, [playlistId]);

  return (
    <div className="playlist-total-container">
      <BookPage />
      {playlist &&
        <div className="playlist-container">
          <div className="playlist-image-container">
            <img src={playlist.imageURL} alt="playlist cover" className="playlist-container-image"></img>
          </div>
          <div className="playlist-details">
            <p className="playlist-container-title">{playlist.title}</p>
            <div className="playlist-container-username-container">
              <p className="playlist-container-username-by">by</p>
              <p className="playlist-container-username-name">{userName}</p>
            </div>
            <p className="playlist-container-description">{playlist.description}</p>
            <iframe src={playlist.fixedLink} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      }
    </div>
  )
}
export default PlaylistPage;
