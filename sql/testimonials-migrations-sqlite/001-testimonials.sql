--up

CREATE TABLE testimonials(
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  testimonial TEXT NOT NULL,
  picture VARCHAR(100) NOT NULL
);

INSERT INTO testimonials(id, name, testimonial, picture) VALUES 
  (7, 'Ivory Willow', 'A very calming atmosphere and a lovely conversation, good technique and very relaxed, worked on knots in my shoulders which was very helpful and Im looking forward to seeing her again :)', 'ivory-willow.jpg'),
  (6, 'Kes', 'What a fantastic time I had. It was very professional and thoroughly enjoyable. Great massage, felt very relaxed and at ease and afterwards my body felt great! 5 stars!', 'kes.jpg'),
  (5, 'Vanessa Richardson', 'Its been years since I had my last massage and meeting Stef in our local library was heaven sent. I had a full body massage and it was a terrific experience. Shes open to feedback, listens well and understands my needs. I feel comfortable and relaxed through it all. Shes professional yet very friendly. Try her out, youll never regret it 😊', 'vanessa-richardson.jpeg'),
  (4, 'Penny Arnold', 'Had another amazing full body massage from Stef as need regular maintenance for my osteoarthritis in my spine can completely relax & feel confident Im in good hands 🙌 thanku once again X', 'penny-arnold.jpeg'),
  (3, 'Penny Arnold', 'Well all I can say is Stef listens to her growing cliental as shes improved even more this was my 3rd visit . I have spondylitis in my whole spine so get continual back pain . Last time a mth ago she sorted my neck/ shoulder pain which hasnt returned . This time was maintenance on my lower spine really firm therapeutic massage can thoroughly recommend 👌 thanku 😊', 'penny-arnold.jpeg'),
  (2, 'Lauren Golledge', 'Had a great full-body massage at Stefs today! A tailor-made experience, allowing me to choose which aromatherapy oil she would use and which music she would play, as well as choosing the right pressure for me and which areas to focus on. The room was warm and massage bed, comfortable. I was even offered a drink and snack afterwards! Incredibly priced massages, well worth every penny! Highly recommended!', 'lauren-golledge.jpeg'),
  (1, 'Chloe Mathias', 'I recently had my 2nd massage from Stef this time around, having a full body massage. I spend a lot of time in the gym, so my muscles can get very tense, and I also do trampoline and gymnastics, which makes me very accident-prone, so I usually have some ache or pain somewhere😆 Stef makes each massage bespoke and wont hesitate to focus on a particular area if needed. This has been a lifesaver for me when Ive been in a lot of pain, and the massages have really helped relieve that. Stef is such a friendly and lovely lady and will always go out of her way to make you feel comfortable. I would recommend Stef if you need a massage!!', 'chloe-mathias.jpeg');

