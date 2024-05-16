
export class Todo {
    private _id: string;
    public title: string;
    public description: string;
    public dueDate: Date;
    public isCompleted: boolean;

    constructor(title: string, description: string, dueDate: Date, isCompleted: boolean) {
        this._id = this.generateId();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }

    // Method to generate a unique id
    private generateId(): string {
        // Generate a unique id using a timestamp and random number
        return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
    }

    // Getter for id
    get id(): string {
        return this._id;
    }
}
