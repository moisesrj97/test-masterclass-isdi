// jest.mock("some-module");

// somePartOfTheMockedModule.mockReturnedValue("mocked sync");
// somePartOfTheMockedModule.mockResolvedValue("mocked async");

describe("Given some component/function/service", () => {
  beforeEach(() => {
    //! This will be executed before each test
    const mySuperMock = jest.fn();
  });
  afterEach(() => {
    //! This will be executed after each test
  });

  beforeAll(() => {
    //! This will be executed before all tests
  });
  afterAll(() => {
    //! This will be executed after all tests
  });

  describe("When it receives some parameters / renders / is called", () => {
    test("It should do / render / return something", () => {
      expect(2 + 2).toBe(4);
    });
  });
});
