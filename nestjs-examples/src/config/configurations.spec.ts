import configurations from "./configurations";

describe('ConfigurationSpec', () => {
  let config;
  beforeEach(async () => {
    config = configurations();
  });

  it('fetch configuration - DEV', () => {
    // console.debug('dev-config', config);

    expect(config).toBeDefined();
    expect(config.name).toEqual('DEV');
  });

  it.skip('fetch configuration - STG', () => {
    config = configurations('STG');
    // console.debug('staging-config', config);

    expect(config).toBeDefined();
    expect(config.name).toEqual('STG');
  });

  it.skip('fetch configuration - PROD', () => {
    config = configurations('PROD');
    // console.debug('prod-config', config);

    expect(config).toBeDefined();
    expect(config.name).toEqual('PROD');
  });
});
