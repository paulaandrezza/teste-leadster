'use client';

import { Text } from '@/app/theme/shared';
import { Video } from '@/types/videos';
import { motion } from 'framer-motion';
import { Box, BoxImage, CardContent } from './styles';

interface Props extends Video {
  onClick: () => void;
}

const VideoCard = ({ title, photo, onClick }: Props) => {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        onClick={onClick}
      >
        <BoxImage src={photo} width={362} height={204} alt="Prévia vídeo" />
        <CardContent>
          <Text fontWeight="bold">{title}</Text>
        </CardContent>
      </Box>
    </motion.div>
  );
};

export default VideoCard;
