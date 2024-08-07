import { useState, useEffect } from 'react';

interface TimerProps {
    start: boolean;
    stop: boolean;
    reset: boolean;
}

function Timer({start, stop, reset}: TimerProps){
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        let interval: number | undefined;
   
        if(start){
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        if(stop && interval !== null){
            clearInterval(interval);
            interval = undefined;
        }
        if(reset){
            clearInterval(interval);
            setTime(0);
        }
        return () => {
            clearInterval(interval);
        };

    }, [start, stop, reset]);

    return (
        <div>
            Time : {time}
        </div>
    );
}

export default Timer;