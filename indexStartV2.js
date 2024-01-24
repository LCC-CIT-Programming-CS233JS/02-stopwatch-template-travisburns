class StopWatch 

{
    constructor() 
    {
    this.isRunning = false;
    this.timer = null;
    this.elapsedTime = 0;

    this.startButton = document.querySelector('#start');
    this.stopButton = document.querySelector('#stop');
    this.resetButton = document.querySelector('#reset');

    this.startButton.onclick = this.startTimer.bind(this);
    this.stopButton.onclick =  this.stopTimer.bind(this);
    this.resetButton.onclick = this.resetTimer.bind(this);
    
    this.incrementTimer = this.incrementTimer.bind(this);
    this.pad = this.pad.bind(this);
    }

// Create a class called StopWatch.

    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables for the 3 global 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */




    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
    */


        startTimer() {
            if (!this.isRunning) {
                this.isRunning = true;
                this.timer = setInterval(this.incrementTimer, 1000);
            }
        }


        incrementTimer() {
            const minutes = document.querySelector('#minutes');
            const seconds = document.querySelector('#seconds');
        
            this.elapsedTime++;
            let numOfMinutes = Math.floor(this.elapsedTime / 60);
            let numOfSeconds = this.elapsedTime % 60;
        
            minutes.innerHTML = this.pad(numOfMinutes);
            seconds.innerHTML = this.pad(numOfSeconds);
        }
        
         pad(number) {
            return (number < 10) ? '0' + number : number;
        }
        
          stopTimer() {
            if (this.isRunning) {
                this.isRunning = false;
                clearInterval(this.timer);
            }
        }
        
         resetTimer() {
            this.stopTimer();
            this.elapsedTime = 0;
        
            const minutes = document.querySelector('#minutes');
            const seconds = document.querySelector('#seconds');
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
        }
        
        


}


let stopWatch;

window.onload = () => {stopWatch = new StopWatch();}

// create a variable called stopWatch

// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch