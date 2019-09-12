import Task from './Task';
import { MemoryRouter } from 'react-router';

const tasks = [
    {id:0, name: 'Reunião', done: false, list: [
        {name: 'Metas', done: false},
        {name: 'Lucros', done: true},
        {name: 'Novas propóstas', done: true},
    ]},
    {id:1, name: 'Reunião', done: true, list: [
        {name: 'Metas', done: false},
        {name: 'Lucros', done: true},
        {name: 'Novas propóstas', done: true},
    ]},
    {id:2, name: 'Reunião', done: false, list: [
        {name: 'Metas', done: false},
        {name: 'Lucros', done: true},
        {name: 'Novas propóstas', done: true},
    ]},
    {id:3, name: 'Reunião', done: true, list: [
        {name: 'Metas', done: false},
        {name: 'Lucros', done: true},
        {name: 'Novas propóstas', done: true},
    ]},
];

it("Testing task...", () => {
    const wrapper = shallow(
        <Task tasks={tasks} />
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing task rendering", () => {
    const wrapper = render(
        <MemoryRouter>
            <Task tasks={tasks} />
        </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing task text format", () => {
    const wrapper = mount(
        <MemoryRouter>
            <Task tasks={tasks} />
        </MemoryRouter>
    );

    const text = wrapper.find("Link").text();
    expect(text).toEqual("New");
});

it("Testing task onClick", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <MemoryRouter>
            <Task tasks={tasks} selectUpdate={spy} />
        </MemoryRouter>        
    );

    wrapper.find("button").first().simulate("click");
    
    //expect(spy.calledTwice).toBe(true);
    expect(spy.calledOnce).toBe(true);
});