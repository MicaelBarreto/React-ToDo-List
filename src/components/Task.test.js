import Task from './Task';
import { MemoryRouter } from 'react-router';
import { all } from '../Common';

const tasks = all;

it("Testing task...", () => {
    const wrapper = shallow(
        <Task />
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing task rendering", () => {
    const wrapper = render(
        <MemoryRouter>
            <Task />
        </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing task text format", () => {
    const wrapper = mount(
        <MemoryRouter>
            <Task />
        </MemoryRouter>
    );

    const text = wrapper.find("button").text();
    expect(text).toEqual("Update");
});

it("Testing task onClick", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <MemoryRouter>
            <Task />
        </MemoryRouter>        
    );

    wrapper.find("button").first().simulate("click");
    
    //expect(spy.calledTwice).toBe(true);
    expect(spy.calledOnce).toBe(true);
});