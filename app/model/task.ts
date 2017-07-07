export class Task {

    id: number
    name: string
    status?: boolean
    date?: Date
    constructor(status: boolean, date: Date) {
        status = this.status || false
        date = this.date || new Date()
    }
}