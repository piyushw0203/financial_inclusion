import React, { useState } from 'react';

const GenerateInviteLink = () => {
  const [inviteLink, setInviteLink] = useState('');

  const generateLink = () => {
    const channelName = 'YOUR_CHANNEL_NAME';
    const token = 'YOUR_AGORA_TEMP_TOKEN'; // Generate this token dynamically for production
    const appId = 'YOUR_AGORA_APP_ID';
    
    const link = `https://your-app.com/join?channel=${channelName}&token=${token}&appId=${appId}`;
    setInviteLink(link);
  };

  return (
    <div>
      <button onClick={generateLink}>Generate Invite Link</button>
      {inviteLink && <p>Invite Link: <a href={inviteLink} target="_blank" rel="noopener noreferrer">{inviteLink}</a></p>}
    </div>
  );
};

export default GenerateInviteLink;
