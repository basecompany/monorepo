export interface User {
    id: string;
    email: string;
}

export class Invoice {
    constructor(public id: string, public amount: number) {}
}
