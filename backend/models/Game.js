import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a game title'],
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: [true, 'Please provide a game description'],
    },
    developer: {
      type: String,
      required: [true, 'Please provide developer name'],
    },
    publisher: {
      type: String,
      required: [true, 'Please provide publisher name'],
    },
    releaseDate: {
      type: Date,
      required: [true, 'Please provide release date'],
    },
    genres: [
      {
        type: String,
        enum: [
          'Action',
          'Adventure',
          'RPG',
          'Strategy',
          'Puzzle',
          'Sports',
          'Racing',
          'Simulation',
          'Indie',
          'Casual',
        ],
      },
    ],
    platforms: [
      {
        type: String,
        enum: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile', 'Mac'],
      },
    ],
    coverImage: {
      type: String,
      default: null,
    },
    screenshots: [String],
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'published',
    },
    tags: [String],
    price: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Index for search
GameSchema.index({ title: 'text', description: 'text', tags: 'text' });

export default mongoose.models.Game || mongoose.model('Game', GameSchema);
