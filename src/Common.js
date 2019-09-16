export var all = [
    {id:0, name: 'Reunião', done: false, list: [
        {id:0, name: 'Metas', done: false},
        {id:1, name: 'Lucros', done: true},
        {id:2, name: 'Novas propóstas', done: true},
    ]},
    {id:1, name: 'Viagem', done: false, list: [
        {id:0, name: 'Protetor Solar', done: false},
        {id:1, name: 'Lanterna', done: true},
        {id:2, name: 'Escova de dentes', done: false},
    ]},
    {id:2, name: 'Mercado', done: false, list: [
        {id:0, name: 'Açucar', done: false},
        {id:1, name: 'Leite', done: false},
        {id:2, name: 'Milho', done: false},
        {id:3, name: 'Azeitonas', done: false},
        {id:4, name: 'Cebolas', done: false},
    ]},
    {id:3, name: 'Aplicativo ToDo List', done: true, list: [
        {id:0, name: 'Criar', done: true},
        {id:1, name: 'Ler', done: true},
        {id:2, name: 'Atualizar', done: true},
        {id:3, name: 'Deletar', done: true},
    ]},
];

export function addTask(task) {
    all.push({
        id: all.length,
        name: task.name,
        done: task.done,
        list: task.list
    });
}

export function handleDone(index) {
    all[index].done = all[index].done === true ? false : true;
    all[index].list = all[index].list.map(list => {
        if(all[index].done){
        list.done = true;
        }      
        return list;
    })
    all = Object.values(all);
    return all;
}

export function handleDoneList(id, index) {
    all[id].list[index].done = all[id].list[index].done === true ? false : true;
    all = Object.values(all);
    return all;
}

export function deleteTask(id) {
    all = all.filter(task => task.id !== id);
    return all;
}   

export function updateTask(task) {
    all[task.index] = task;
    all = Object.values(all);
}

export function sortColor(task) {
    var color = task.done === true ? '#218838' : '#D6D8DB';

    return color;
}