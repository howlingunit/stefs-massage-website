const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function aboutMeHeight() {
    if(window.screen.width > 800){
      await sleep(500);
      const aboutMe = document.querySelector('.about-me');
      aboutMe.style.height = `${aboutMe.scrollHeight + 40}px`
  }
}

async function insertTestimonials() {
  const testimonials =[];

  let testimonial_1 = await fetch('/testimonial');
  testimonial_1 = await testimonial_1.json();
  testimonial_1 = testimonial_1[0];
  testimonials.push(testimonial_1)
  
  let testimonial_2 = await fetch('/testimonial');
  testimonial_2 = await testimonial_2.json();
  testimonial_2 = testimonial_2[0];

  while (testimonial_1.name === testimonial_2.name) {
    let testimonial_2 = await fetch('/testimonial');
    testimonial_2 = await testimonial_2.json();
    testimonial_2 = testimonial_2[0];
  }
  testimonials.push(testimonial_2)

  for (let i = 0; i<2; i++) {


    const img = document.querySelector(`#testimonial-${i}-img`);
    const textBox = document.querySelector(`#testimonial-${i}-text`);

    img.style.backgroundImage = `url('assets/reviewers/${testimonials[i].picture}')`;

    const nameBox = document.createElement('h1');
    nameBox.textContent = `${testimonials[i].name}`;
    textBox.appendChild(nameBox);

    const testimonialBox = document.createElement('p');
    testimonialBox.textContent = `"${testimonials[i].testimonial}"`;
    textBox.appendChild(testimonialBox);
  }
}

aboutMeHeight();
insertTestimonials()