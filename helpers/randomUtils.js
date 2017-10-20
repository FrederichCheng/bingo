function uniqueRandomBall(ballSet) {
    let newBall = randomBall();
    while (ballSet.has(newBall)) {
        newBall = randomBall();
    }
    return newBall;
}

function randomBalls() {
    let balls = [];
    let i;
    for (i = 0; i < 99; i ++) {
        balls[i] = i + 1;
    }

    for (let i = 0; i < 99; i++) {
        let rand = Math.floor(Math.random() * 99);
        let tmp = balls[i];
        balls[i] = balls[rand];
        balls[rand] = tmp;
    }

    return balls;
}

module.exports = {
    uniqueRandomBall: uniqueRandomBall,
    randomBalls: randomBalls
};