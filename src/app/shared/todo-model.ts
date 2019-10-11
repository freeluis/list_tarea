export class TodoModel {
    constructor(
    public description:string,
    public IsImportant:boolean = false,
    public IsDone:boolean = false,
    public id:number    
    ){}

    static clone(todo:TodoModel){
        return new TodoModel(todo.description, todo.IsImportant, todo.IsDone, todo.id)
    }
}