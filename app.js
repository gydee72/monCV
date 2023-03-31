const txtAnim = document.querySelector('.portfolio');
new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 20
})
.changedelay(20)

.typeString('Voici un aperçu')
.pauseFor(300)
.typeString('<strong>, de mes créations.</strong> ! ')
.pause(1000)
.deleteChars(10)
.typeString('<span style="color: #27ae60">sites</span> ! ')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: midnightblue">sites React</span> ! ')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color:#ea39ff">sites Wordpress</span> ! ')
.pauseFor(1000)
.deleteChars(9)

.start()
            
