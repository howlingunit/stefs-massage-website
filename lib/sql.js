import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function testimonialsInit() {
  const db = await open({
    filename: './database/testimonials.sqlite',
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: './sql/testimonials-migrations-sqlite' });
  return db;
}

const testimonialsDbConn = testimonialsInit();

export async function getTestimonials(amt) {
  const db = await testimonialsDbConn;
  if (Number(amt)) {
    return db.all(`SELECT name, testimonial, picture FROM testimonials ORDER BY random() LIMIT ${amt}`);
  } else if (amt === 'all') {
    return db.all(`SELECT name, testimonial, picture FROM testimonials ORDER BY name`);
  }
}
