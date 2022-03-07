/* jest.mock('some-module', () => {
  return {
    firstFn: jest.fn(),
    secondFn: jest.fn(),
    thirdFn: jest.fn(),
  };
});

describe('Given some component/function/service', () => {
  beforeEach(() => {
    //! This will be executed before each test
    const mySuperMock = jest.fn();
  });
  afterEach(() => {
    //! This will be executed after each test
  });

  beforeAll(() => {
    //! This will be executed before all tests
    somePartOfTheMockedModule.mockReturnedValue('mocked sync');
    somePartOfTheMockedModule.mockResolvedValue('mocked async');
    somePartOfTheMockedModule.mockImplementation(() => {
      return "Mocked sync";
      return Promise.resolve("Mocked sync");
    });
  });
  afterAll(() => {
    //! This will be executed after all tests
  });

  describe('When it receives some parameters / renders / is called', () => {
    test('It should do / render / return something', () => {
      expect(2 + 2).toBe(4);
    });
  });
}); */
