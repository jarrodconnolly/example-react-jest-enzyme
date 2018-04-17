import SimpleToDoComponent from './simple-todo-component';

const mockToDoData = {
  todos: [
    {name: 'Unit Test Item 1', done: true},
    {name: 'Unit Test Item 2', done: false},
    {name: 'Unit Test Item 3', done: false},
    {name: 'Unit Test Item 4', done: true},
  ]
};

const mockFetchToDoData = jest.fn();
SimpleToDoComponent.prototype.fetchDataFromApi = mockFetchToDoData;

beforeEach(() => {
  mockFetchToDoData.mockReset();
});

describe('Simple ToDo Component', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<SimpleToDoComponent />);
    wrapper.setState(mockToDoData);

    process.nextTick(() => {
      expect(wrapper).toMatchSnapshot();
      expect(mockFetchToDoData.mock.calls.length).toBe(1);
      done();
    });
  });
});
