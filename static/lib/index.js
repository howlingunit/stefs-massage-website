function aboutMeHeight() {
    if(window.screen.width > 800){
    const aboutMe = document.querySelector('.about-me');
    aboutMe.style.height = `${aboutMe.scrollHeight + 40}px`
  }
}

aboutMeHeight();