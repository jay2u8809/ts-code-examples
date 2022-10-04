import { IConfiguration, Stage } from "./configurations.interface";

const Prod = (): IConfiguration => ({
    name: Stage.prod,
    database: {
        host: 'localhost',
        port: 5432,
        user: 'USER',
        pw: '1234',
    },
    apps: {
        main: {
            port: 80
        },
        app: {
            port: 8010
        },
    }
});

export default Prod;