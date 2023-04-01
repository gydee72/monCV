var app = document.querySelector('h4');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Voici un aperçu de mes créations developpement et webdesign')
  .pauseFor(300)
  .deleteChars(12)
  .typeString('<strong>Front-end</strong> avec projets en React, Webflow ')
  .typeString('<strong>Back-end avec <span style="color: #27ae60;">PHP</span> et Python</strong>')
  .pauseFor(1000)
  .start();
            
