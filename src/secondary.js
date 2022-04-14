console.log('Hello secondary!!!');

const func = async () => {
    return await Promise.resolve('Hello');
}

func().then(console.log);