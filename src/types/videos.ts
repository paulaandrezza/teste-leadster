import videos from '../../db.json';

export type Videos = typeof videos.videos;

export type Video = (typeof videos.videos)[0];
