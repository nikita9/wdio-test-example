const sharedUser = {
    username: 'test',
    email: 'test@test.com',
};

const prod = {
    password: 'test',
    domain: 'test.com',
    userId: '999',
};

const dev = {
    password: 'test',
    domain: 'dev.test.com',
    userId: '999',
};

const generateConfig = () => {
    const environment = process.env.TEST_ENV == 'dev' ? dev : prod;
    return {...sharedUser, ...environment};
};

export const config = generateConfig();
