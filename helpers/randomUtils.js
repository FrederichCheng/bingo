function randomBalls(count) {
    if (count === undefined) {
        throw new Error('count parameter is not provided');
    }
    let balls = [];
    let i;
    for (i = 0; i < count; i++) {
        balls[i] = i + 1;
    }

    for (let i = 0; i < count; i++) {
        let rand = Math.floor(Math.random() * count);
        let tmp = balls[i];
        balls[i] = balls[rand];
        balls[rand] = tmp;
    }

    return balls;
}

module.exports = {
    randomBalls: randomBalls
};