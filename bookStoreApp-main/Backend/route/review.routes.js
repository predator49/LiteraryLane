// routes/reviews.js
import { Router } from 'express';
const router = Router();
import Review, { find, findByIdAndDelete } from '../models/Review';

// Create a review
router.post('/', async (req, res) => {
  const { bookId, userId, rating, comment } = req.body;
  try {
    const review = new Review({ bookId, userId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get reviews for a book
router.get('/books/:bookId', async (req, res) => {
  try {
    const reviews = await find({ bookId: req.params.bookId }).populate('userId', 'name');
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a review
router.delete('/:id', async (req, res) => {
  try {
    const review = await findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.json({ message: 'Review deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
