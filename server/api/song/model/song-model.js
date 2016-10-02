const mongoose = require('mongoose');

const _songSchema = {
  title: { type: String, required: true },
  words: { type: String, required: true },
  writers: { type: String, required: true },
  release_date: { type: Number, required: true },
  album: { type: String, required: true },
  youtube_video_id: { type: String, required: true },
};

export default mongoose.Schema(_songSchema);
