'use client';

import { Text } from '@/app/theme/shared';
import { Video } from '@/types/videos';
import photo from '@public/thumbnail.png';
import { Box, BoxImage, CardContent } from './styles';

const VideoCard = ({ title }: Video) => {
  return (
    <Box>
      <BoxImage src={photo} alt="Prévia vídeo" />
      <CardContent>
        <Text fontWeight="bold">{title}</Text>
      </CardContent>
    </Box>
  );
};

export default VideoCard;
