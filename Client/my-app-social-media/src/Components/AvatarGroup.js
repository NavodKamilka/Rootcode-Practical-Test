import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://picsum.photos/id/237/200/300" />
      <Avatar alt="Travis Howard" src="https://picsum.photos/seed/picsum/200/300" />
      <Avatar alt="Cindy Baker" src="https://picsum.photos/200/300?grayscale" />
      <Avatar alt="Agnes Walker" src="https://picsum.photos/200/300/?blur" />
      <Avatar alt="Trevor Henderson" src="https://picsum.photos/id/870/200/300?grayscale&blur=2" />
    </AvatarGroup>
  );
}