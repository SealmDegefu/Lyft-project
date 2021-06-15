import React, { useEffect, useRef, useState } from 'react';
import { Button } from "../styles";
import './Countdown.css';

function Countdown() {

	const [timerDays,setTimerDays] = useState('00')
	const [timerHours,setTimerHours] = useState('00')
	const [timerMinutes,setTimerMinutes] = useState('00')
	const [timerSeconds,setTimerSeconds] = useState('00')

	let interval = useRef();
	const startTimer = () =>{
		const countdownDate = new Date('July 30, 2021 00:00:00').getTime();
		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24 ));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) ));
			const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60) ));
			const seconds= Math.floor((distance % (1000 * 60) / 1000));

			if (distance < 0){
				//stop timer
				clearInterval(interval.current)
			} else{
				//update timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000)
	}

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current)
		}
	})
  return (
    <section className="timer-container">
		<section className="timer">
			<div>
    			<span className="material-icons">event</span>
      			<h2>Count Down Before The Big Day</h2>
	  		</div>
	  		<div>
	  			<section>
		  			<p>{timerDays}</p>
		  			<p><small>Days</small></p>
	  			</section>
	  			<span>:</span>
	  			<section>
		  			<p>{timerHours}</p>
		  			<p><small>Hours</small></p>
	  			</section>
	  			<span>:</span>
	  			<section>
		  			<p>{timerMinutes}</p>
		  			<p><small>Minutes</small></p>
	  			</section>
	  			<span>:</span>
	  			<section>
		  			<p>{timerSeconds}</p>
		  			<p><small>Seconds</small></p>
	  			</section>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
	  </section>
    </section>
  );
}

export default Countdown;
