// client/src/components/VideoCall.js
import React, { useEffect, useRef, useState } from 'react';
import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-sdk-ng';

const client = createClient({ mode: 'rtc', codec: 'vp8' });

const VideoCall = ({ appId, token, channel }) => {
  const videoRef = useRef(null);
  const [localTracks, setLocalTracks] = useState([]);
  const [remoteUsers, setRemoteUsers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const [microphoneTrack, cameraTrack] = await createMicrophoneAndCameraTracks();
      setLocalTracks([microphoneTrack, cameraTrack]);

      await client.join(appId, channel, token, null);

      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'video') {
          const remoteVideoTrack = user.videoTrack;
          setRemoteUsers((prevUsers) => [...prevUsers, { user, remoteVideoTrack }]);
        }
        if (mediaType === 'audio') {
          const remoteAudioTrack = user.audioTrack;
          remoteAudioTrack.play();
        }
      });

      client.on('user-unpublished', (user) => {
        setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.user.uid !== user.uid));
      });

      await client.publish([microphoneTrack, cameraTrack]);
      cameraTrack.play(videoRef.current);
    };

    init();

    return () => {
      localTracks.forEach(track => track.stop() && track.close());
      client.leave();
    };
  }, [appId, channel, token]);

  return (
    <div>
      <div ref={videoRef} style={{ width: '640px', height: '480px' }}></div>
      {remoteUsers.map(({ user, remoteVideoTrack }) => (
        <div key={user.uid} id={`user-${user.uid}`} style={{ width: '640px', height: '480px' }}>
          <div ref={ref => ref && remoteVideoTrack.play(ref)}></div>
        </div>
      ))}
    </div>
  );
};

export default VideoCall;
