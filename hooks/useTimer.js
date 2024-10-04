import { useCallback, useEffect, useRef, useState } from 'react';

export const useTimer = (initialTime) => {
    const [timer, setTimer] = useState(initialTime);
    const [showResend, setShowResend] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = useCallback(() => {
        setShowResend(false);
        setTimer(initialTime);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(intervalRef.current);
                    setShowResend(true);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);
    }, [initialTime]);

    useEffect(() => {
        startTimer();
        return () => clearInterval(intervalRef.current);
    }, [startTimer]);

    return { showResend, timer, restartTimer: startTimer };
};
