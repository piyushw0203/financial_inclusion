import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { useSearchParams } from 'react-router-dom';

const JoinCall = () => {
  const [searchParams] = useSearchParams();
  const channelName = searchParams.get('channel');
  const token = searchParams.get('token');
  const appId = searchParams.get('appId');

  const [localTracks, setLocalTracks] = useState([]);
  const [remoteUsers, setRemoteUsers] = useState({});
  const client = useRef(null);
  const localVideoRef = useRef(null);

  useEffect(() => {
    const initAgora = async () => {
      client.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

      client.current.on('user-published', handleUserPublished);
      client.current.on('user-unpublished', handleUserUnpublished);

      await client.current.join(appId, channelName, token, null);

      const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
      setLocalTracks([microphoneTrack, cameraTrack]);

      cameraTrack.play(localVideoRef.current);

      await client.current.publish([microphoneTrack, cameraTrack]);
    };

    initAgora();

    return () => {
      localTracks.forEach(track => track.close());
      client.current?.leave();
    };
  }, [appId, channelName, token]);

  const handleUserPublished = async (user, mediaType) => {
    await client.current.subscribe(user, mediaType);
    if (mediaType === 'video') {
      setRemoteUsers(prevUsers => ({ ...prevUsers, [user.uid]: user }));
      user.videoTrack.play(`remote-${user.uid}`);
    }
    if (mediaType === 'audio') {
      user.audioTrack.play();
    }
  };

  const handleUserUnpublished = (user) => {
    setRemoteUsers(prevUsers => {
      const { [user.uid]: _, ...rest } = prevUsers;
      return rest;
    });
  };

  return (
    <div>
      <div ref={localVideoRef} style={{ width: '400px', height: '300px', border: '1px solid black' }}></div>
      <div>
        {Object.keys(remoteUsers).map(uid => (
          <div key={uid} id={`remote-${uid}`} style={{ width: '400px', height: '300px', border: '1px solid black' }}>
            Remote User {uid}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinCall;
