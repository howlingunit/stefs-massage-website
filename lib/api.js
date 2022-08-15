import * as sql from './sql.js';

export async function testimonial(req, res) {
  const testimonial = await sql.getTestimonial();
  res.json(testimonial);
}
