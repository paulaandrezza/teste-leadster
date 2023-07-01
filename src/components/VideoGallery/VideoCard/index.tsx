'use client';

import { Text } from '@/app/theme/shared';
import videoImage from '@public/thumbnail.png';
import { Box, BoxImage, CardContent } from './styles';

const VideoCard = () => {
  return (
    <Box>
      <BoxImage src={videoImage} alt="Prévia vídeo"></BoxImage>
      <CardContent>
        <Text fontWeight="bold">Como aumentar sua Geração de Leads feat. Traktor</Text>
      </CardContent>
    </Box>
  );
};

export default VideoCard;
