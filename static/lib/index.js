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

aboutMeHeight();