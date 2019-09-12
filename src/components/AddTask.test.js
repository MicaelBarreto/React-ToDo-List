import AddTask from './AddTask';
import { MemoryRouter } from 'react-router';

it("Testing AddTask...", () => {
    const wrapper = shallow(
        <AddTask />
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing AddTask rendering", () => {
    const wrapper = render(
        <MemoryRouter>
            <AddTask />
        </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing AddTask text format", () => {
    const wrapper = mount(
        <MemoryRouter>
            <AddTask />
        </MemoryRouter>
    );

    const text = wrapper.find("Link").text();
    expect(text).toEqual("New");
});

it("Testing AddTask onClick", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <MemoryRouter>
            <AddTask selectUpdate={spy} />
        </MemoryRouter>        
    );

    wrapper.find("button").first().simulate("click");
    
    //expect(spy.calledTwice).toBe(true);
    expect(spy.calledOnce).toBe(true);
});