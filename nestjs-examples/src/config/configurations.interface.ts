export interface IConfiguration {
    name: TStage;
    database: IDatabase;
    apps: IApps;
}

interface IDatabase {
    host: string;
    port: number;
    user: string;
    pw: string;
}

interface IApps {
    main: IAppEnv;
    app: IAppEnv;
}

interface IAppEnv {
    port: number;
}

// === type, enum, Object ===
export type TStage = 'DEV' | 'STG' | 'PROD';
export enum Stage {
    dev = 'DEV',
    staging = 'STG',
    prod = 'PROD',
}
