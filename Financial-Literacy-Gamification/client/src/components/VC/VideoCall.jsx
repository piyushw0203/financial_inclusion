


// import React, { useEffect, useRef, useState } from 'react';
// import AgoraRTC from 'agora-rtc-sdk-ng';

// const APP_ID = '6bf5ed9c6d5b4aeb90736c85f744656c';
// const TOKEN = '007eJxTYHCLKS601fl/de95tnqDsxcOmYWfm3y1N4snU9X54Izp8nYKDGZJaaapKZbJZimmSSaJqUmWBubGZskWpmnmJiZmpmbJb11mpDUEMjI4MhoxMEIhiK/KkJqYnpMaX5xdWZ5YGW9kYGQSn5uaWpKZlx5flJ+fG+9o7mTsbMnAAAAZoipX';
// const CHANNEL_NAME = 'eagle_skyway_2024_meeting_room_A7B3C9';

// const VideoCall = () => {
//   const [localTracks, setLocalTracks] = useState([]);
//   const [remoteUsers, setRemoteUsers] = useState([]);
//   const client = useRef(null);
//   const localVideoRef = useRef(null);

//   useEffect(() => {
//     const initAgora = async () => {
//       client.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

//       client.current.on('user-published', handleUserPublished);
//       client.current.on('user-unpublished', handleUserUnpublished);

//       await client.current.join(APP_ID, CHANNEL_NAME, TOKEN, null);

//       const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
//       setLocalTracks([microphoneTrack, cameraTrack]);

//       cameraTrack.play(localVideoRef.current);

//       await client.current.publish([microphoneTrack, cameraTrack]);
//     };

//     initAgora();

//     return () => {
//       localTracks.forEach(track => track.close());
//       client.current?.leave();
//     };
//   }, []);

//   const handleUserPublished = async (user, mediaType) => {
//     await client.current.subscribe(user, mediaType);
//     if (mediaType === 'video') {
//       setRemoteUsers(prevUsers => [...prevUsers, user]);
//     }
//     if (mediaType === 'audio') {
//       user.audioTrack.play();
//     }
//   };

//   const handleUserUnpublished = (user) => {
//     setRemoteUsers(prevUsers => prevUsers.filter(u => u.uid !== user.uid));
//   };

//   return (
//     <div>
//       <div ref={localVideoRef} style={{ width: '400px', height: '300px' }}></div>
//       {remoteUsers.map(user => (
//         <div key={user.uid} id={`remote-${user.uid}`} style={{ width: '400px', height: '300px' }}>
//           <div id={`user-video-${user.uid}`} style={{ width: '100%', height: '100%' }}></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoCall;




// import React, { useEffect, useRef, useState } from 'react';
// import AgoraRTC from 'agora-rtc-sdk-ng';

// const APP_ID = '6bf5ed9c6d5b4aeb90736c85f744656c';
// const TOKEN = '007eJxTYHCLKS601fl/de95tnqDsxcOmYWfm3y1N4snU9X54Izp8nYKDGZJaaapKZbJZimmSSaJqUmWBubGZskWpmnmJiZmpmbJb11mpDUEMjI4MhoxMEIhiK/KkJqYnpMaX5xdWZ5YGW9kYGQSn5uaWpKZlx5flJ+fG+9o7mTsbMnAAAAZoipX';
// const CHANNEL_NAME = 'eagle_skyway_2024_meeting_room_A7B3C9';

// const VideoCall = () => {
//   const [localTracks, setLocalTracks] = useState([]);
//   const [remoteUsers, setRemoteUsers] = useState([]);
//   const client = useRef(null);
//   const localVideoRef = useRef(null);

//   useEffect(() => {
//     const initAgora = async () => {
//       client.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

//       client.current.on('user-published', handleUserPublished);
//       client.current.on('user-unpublished', handleUserUnpublished);

//       await client.current.join(APP_ID, CHANNEL_NAME, TOKEN, null);

//       const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
//       setLocalTracks([microphoneTrack, cameraTrack]);

//       cameraTrack.play(localVideoRef.current);

//       await client.current.publish([microphoneTrack, cameraTrack]);
//     };

//     initAgora();

//     return () => {
//       localTracks.forEach(track => track.close());
//       client.current?.leave();
//     };
//   }, []);

//   const handleUserPublished = async (user, mediaType) => {
//     await client.current.subscribe(user, mediaType);
//     if (mediaType === 'video') {
//       setRemoteUsers(prevUsers => [...prevUsers, user]);
//     }
//     if (mediaType === 'audio') {
//       user.audioTrack.play();
//     }
//   };

//   const handleUserUnpublished = (user) => {
//     setRemoteUsers(prevUsers => prevUsers.filter(u => u.uid !== user.uid));
//   };

//   return (
//     <div>
//       <div ref={localVideoRef} style={{ width: '400px', height: '300px' }}></div>
//       {remoteUsers.map(user => (
//         <div key={user.uid} id={`remote-${user.uid}`} style={{ width: '400px', height: '300px' }}>
//           <div id={`user-video-${user.uid}`} style={{ width: '100%', height: '100%' }}></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoCall;



// import React, { useEffect, useRef, useState } from 'react';
// import AgoraRTC from 'agora-rtc-sdk-ng';

// const APP_ID = '6bf5ed9c6d5b4aeb90736c85f744656c';
// const TOKEN = '007eJxTYHCLKS601fl/de95tnqDsxcOmYWfm3y1N4snU9X54Izp8nYKDGZJaaapKZbJZimmSSaJqUmWBubGZskWpmnmJiZmpmbJb11mpDUEMjI4MhoxMEIhiK/KkJqYnpMaX5xdWZ5YGW9kYGQSn5uaWpKZlx5flJ+fG+9o7mTsbMnAAAAZoipX';
// const CHANNEL_NAME = 'eagle_skyway_2024_meeting_room_A7B3C9';

// const VideoCall = () => {
//   const [localTracks, setLocalTracks] = useState([]);
//   const [remoteUsers, setRemoteUsers] = useState([]);
//   const client = useRef(null);
//   const localVideoRef = useRef(null);

//   useEffect(() => {
//     const initAgora = async () => {
//       client.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

//       client.current.on('user-published', handleUserPublished);
//       client.current.on('user-unpublished', handleUserUnpublished);

//       await client.current.join(APP_ID, CHANNEL_NAME, TOKEN, null);

//       const [microphoneTrack, cameraTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
//       setLocalTracks([microphoneTrack, cameraTrack]);

//       cameraTrack.play(localVideoRef.current);

//       await client.current.publish([microphoneTrack, cameraTrack]);
//     };

//     initAgora();

//     return () => {
//       localTracks.forEach(track => track.close());
//       client.current?.leave();
//     };
//   }, []);

//   const handleUserPublished = async (user, mediaType) => {
//     await client.current.subscribe(user, mediaType);
//     if (mediaType === 'video') {
//       setRemoteUsers(prevUsers => [...prevUsers, user]);
//       const remoteVideoContainer = document.getElementById(`user-video-${user.uid}`);
//       if (remoteVideoContainer) {
//         user.videoTrack.play(remoteVideoContainer);
//       }
//     }
//     if (mediaType === 'audio') {
//       user.audioTrack.play();
//     }
//   };

//   const handleUserUnpublished = (user) => {
//     setRemoteUsers(prevUsers => prevUsers.filter(u => u.uid !== user.uid));
//   };

//   const generateInviteLink = () => {
//     const baseUrl = window.location.origin;
//     const inviteLink = `${baseUrl}/?channel=${CHANNEL_NAME}`;
//     return inviteLink;
//   };

//   return (
//     <div>
//       <div>
//         <h3>Invite Link</h3>
//         <input type="text" value={generateInviteLink()} readOnly />
//         <button onClick={() => navigator.clipboard.writeText(generateInviteLink())}>
//           Copy Invite Link
//         </button>
//       </div>
//       <div ref={localVideoRef} style={{ width: '400px', height: '300px' }}></div>
//       {remoteUsers.map(user => (
//         <div key={user.uid} id={`remote-${user.uid}`} style={{ width: '400px', height: '300px' }}>
//           <div id={`user-video-${user.uid}`} style={{ width: '100%', height: '100%' }}></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoCall;





import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import './VideoCall.css';

const APP_ID = '769ce5886e1a4744b322a16578234e46';
const TOKEN = '007eJxTYFAp83x9ltVEevFcv/oZfkdSvQ0epiUere5pnxEirbjlo7cCg7mZZXKqqYWFWaphoom5iUmSsZFRoqGZqbmFkbFJqonZ7aMz0hoCGRleLktgYIRCEF+VITUxPSc1vji7sjyxMt7IwMgkPjc1tSQzLz2+KD8/N97R3MnY2ZKBAQDH6yps';
const CHANNEL_NAME = 'eagle_skyway_2024_meeting_room_A7B3C9';

const VideoCall = () => {
  const [localTracks, setLocalTracks] = useState([]);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const client = useRef(null);
  const localVideoRef = useRef(null);

  useEffect(() => {
    const initAgora = async () => {
      client.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

      client.current.on('user-published', handleUserPublished);
      client.current.on('user-unpublished', handleUserUnpublished);

      await client.current.join(APP_ID, CHANNEL_NAME, TOKEN, null);

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
  }, []);

  const handleUserPublished = async (user, mediaType) => {
    await client.current.subscribe(user, mediaType);
    if (mediaType === 'video') {
      setRemoteUsers(prevUsers => [...prevUsers, user]);
      const remoteVideoContainer = document.getElementById(`user-video-${user.uid}`);
      if (remoteVideoContainer) {
        user.videoTrack.play(remoteVideoContainer);
      }
    }
    if (mediaType === 'audio') {
      user.audioTrack.play();
    }
  };

  const handleUserUnpublished = (user) => {
    setRemoteUsers(prevUsers => prevUsers.filter(u => u.uid !== user.uid));
  };

  const generateInviteLink = () => {
    const baseUrl = window.location.origin;
    const inviteLink = `${baseUrl}/?channel=${CHANNEL_NAME}`;
    return inviteLink;
  };

  return (
    <div className="video-call-container">
      <div className="invite-link-container">
        <h3>Invite Link</h3>
        <div className="invite-link-box">
          <input type="text" value={generateInviteLink()} readOnly />
          <button onClick={() => navigator.clipboard.writeText(generateInviteLink())}>
            Copy
          </button>
        </div>
      </div>
      <div className="video-section">
        <div className="local-video-container" ref={localVideoRef}></div>
        <div className="remote-videos-container">
          {remoteUsers.map(user => (
            <div key={user.uid} className="remote-video-wrapper">
              <div id={`user-video-${user.uid}`} className="remote-video"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCall;

