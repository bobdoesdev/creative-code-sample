
let name = prompt('Hi there! Welcome! May I have your name?')
let nameCount = 1

let danceFloor = document.querySelector('.danceFloor')
let stage = document.querySelector('.stage')
let audioPlayer = document.querySelector('audio')

while (name == null && nameCount < 4) {
    console.log(nameCount)
    if(nameCount === 3){
        name = prompt(`You don't seem interested in playing along. I'll ask you to  share your name once more before moving on.`)
        break
    }
    name = prompt(`Sorry, but we can't continue if you don't tell your name. ¯\\_(ツ)_/¯`)
    nameCount++;
}

if(name == null){
    alert('OK, see ya later!')
    window.location.href = 'https://github.com/bobdoesdev'
} else{

    let answer = prompt(`Hi ${name}, it's nice to meet you. If you're in the mood for something exciting, type 'yes'. Otherwise, type 'no'.`)
    if(answer === 'yes'){
        

        stage.innerHTML = `<button type="button" class="partyButton">Ok, ${name}, are you excited? Click here to get this party started!</button>`

        const partyButton = document.querySelector('.partyButton')
        partyButton.addEventListener("click", function(e){
            
            partyButton.style.display = 'none';
            cat.style.display = 'block';
            initBounce();
            
            audioPlayer.play()
          });

    } else if (answer === 'no') {
        window.location.href = 'https://smartchart.org'
    } else {
        answer = prompt(`Sorry ${name}, I suppose I didn't make the available options very clear. If you're in the mood for something exciting, type 'yes'. Otherwise, type 'no'. I suppose if you don't want to choose, we can sit here in silence together  :)`)
        danceFloor.innerHTML = `<h1 class="partyPooper">Are you happy, party pooper?</h1>`
    }
}

