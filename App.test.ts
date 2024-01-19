describe('process.env', () => {
  it('env vars should be settable in Jest setup files', () => {
    // this works
    expect(process.env.THIS_IS_A_TEST).toBe('test');
  });

  it('expo public env vars should be settable in Jest setup files', () => {
    // this doesn't
    expect(process.env.EXPO_PUBLIC_THIS_IS_A_TEST).toBe('test');
  });

  it('expo public env vars should be settable in Jest', () => {
    // this doesn't
    process.env.EXPO_PUBLIC_THIS_IS_ANOTHER_TEST = 'test';
    expect(process.env.EXPO_PUBLIC_THIS_IS_ANOTHER_TEST).toBe('test');
  });
});
