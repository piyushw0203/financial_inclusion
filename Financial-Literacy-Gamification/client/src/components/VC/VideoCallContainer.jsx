import React from 'react';
import VideoCall from './VideoCall';

const VideoCallContainer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        {/* <h3>Participant 1</h3> */}
        <VideoCall />
      </div>
      <div>
        {/* <h3>Participant 2</h3> */}
        <VideoCall />
      </div>
    </div>
  );
};

export default VideoCallContainer;
