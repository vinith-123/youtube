import React from 'react';
import Videoitem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    
    const renderedList = videos.map((video) => {
        return <Videoitem key={video.id.VideoId} video={video} onVideoSelect={onVideoSelect}/>;
    });
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}
export default VideoList;