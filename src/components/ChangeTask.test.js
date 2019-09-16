import ChangeTasks from './ChangeTasks';
import { MemoryRouter } from 'react-router';

it("Testing ChangeTasks...", () => {
    const wrapper = shallow(
        <ChangeTasks />
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing ChangeTasks rendering", () => {
    const wrapper = render(
        <MemoryRouter>
            <ChangeTasks />
        </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing ChangeTasks text format", () => {
    const wrapper = mount(
        <MemoryRouter isNew={true}>
            <ChangeTasks />
        </MemoryRouter>
    );

    const text = wrapper.find("Link").text();
    expect(text).toEqual("New");
});

it("Testing ChangeTasks onClick", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <MemoryRouter>
            <ChangeTasks />
        </MemoryRouter>        
    );

    wrapper.find("button").first().simulate("click");
    
    //expect(spy.calledTwice).toBe(true);
    expect(spy.calledOnce).toBe(true);
});