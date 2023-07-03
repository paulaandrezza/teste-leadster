'use client';

import { Text } from '@/app/theme/shared';
import { Video } from '@/types/videos';
import photo from '@public/thumbnail.png';
import { motion, Variants } from 'framer-motion';
import { Box, BoxImage, CardContent } from './styles';

const cardVariants: Variants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface Props extends Video {
  onClick: () => void;
}

const VideoCard = ({ title, onClick }: Props) => {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        variants={cardVariants}
        onClick={onClick}
      >
        <BoxImage src={photo} alt="Prévia vídeo" />
        <CardContent>
          <Text fontWeight="bold">{title}</Text>
        </CardContent>
      </Box>
    </motion.div>
  );
};

export default VideoCard;
