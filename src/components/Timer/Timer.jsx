import React from "react";

let Timer = ({init,end}) => {
    const [timer, setTimer] = React.useState(init);
    React.useEffect(() => {
        const id = setInterval(() => {
            setTimer((prev) => {
                if(prev === end) {
                    clearInterval(id);
                    return end;
                }
                return prev + 1;
            });
        },1000);
    }, []);
    return (
        <>
            <div className="h2 text-uppercase my-3 text-warning">Timer : {timer}</div>
        </>
    );
}

export default Timer;