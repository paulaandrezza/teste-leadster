import videos from '@/data/videos.json';

export type Videos = typeof videos;

export type Video = (typeof videos)[0];
