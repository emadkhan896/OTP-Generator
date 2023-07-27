import { LightningElement , api} from 'lwc';

export default class OtpGenerator extends LightningElement {
    @api otpLength = 5;
    generateOtpvalue = "";
    @api timeDuration = 15; 
    disableButton = false;
    showTimer = false;
    timerText = "";
    clickHandler(){
        let otpArray = [];
        for(let i = 0; i < this.otpLength; i++){
            otpArray.push(Math.floor(Math.random() * 10)) 
        }
        this.generateOtpvalue = otpArray.join("");
        // disabling the button and showing the timer
        this.disableButton = true;
        this.showTimer = true;
        let secondsRemainings = this.timeDuration;
        // starting the countdown
        let countDownInterval = setInterval(() => {
            secondsRemainings--;
            this.timerText = `To generate next otp wait for ${secondsRemainings} seconds`;
            //if timer reaches 0 enabling the button and stopping the countdown
            if(secondsRemainings <= 0){
                clearInterval(countDownInterval);
                this.disableButton = false;
                this.showTimer = false;
            }
        }, 1000)
    }
}