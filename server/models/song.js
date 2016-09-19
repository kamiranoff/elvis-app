import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: String, required: true },
  words: { type: String, required: true },
  writers: { type: Array, required: true },
  release_date: { type: Number, required: true },
  album: { type: String, required: true },
});

export default mongoose.model('Song', songSchema);
