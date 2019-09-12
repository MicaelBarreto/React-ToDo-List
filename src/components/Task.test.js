import Task from './Task';

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
        <Task tasks={tasks} />
    );

    expect(wrapper).toMatchSnapshot();
});

it("Testing task text format", () => {
    const wrapper = mount(
        <Task tasks={tasks} />
    );

    const text = wrapper.find("Link").text();
    expect(text).toEqual("New");
});

it("Testing task onClick", () => {
    const spy = sinon.spy();
    const wrapper = mount(
        <Task tasks={tasks} selectUpdate={spy} />
    );

    wrapper.find("button").first().simulate("click");
    
    //expect(spy.calledTwice).toBe(true);
    expect(spy.calledOnce).toBe(true);
});