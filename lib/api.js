import * as sql from './sql.js';

export async function testimonial(req, res) {
  const amt = req.query.amt;
  if (isNaN(amt) && amt !== 'all') {res.status(400); res.json('invalid input'); return}
  const testimonial = await sql.getTestimonials(amt);
  res.json(testimonial);
}
  