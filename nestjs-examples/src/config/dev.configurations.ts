import { IConfiguration, Stage } from "./configurations.interface";

const Dev = (): IConfiguration => ({
    name: Stage.dev,
    database: {
        host: 'localhost',
        port: 5432,
        user: 'USER',
        pw: '1234',
    },
    apps: {
        main: {
            port: 3000
        },
        app: {
            port: 3010
        }
    }
});

export default Dev;
