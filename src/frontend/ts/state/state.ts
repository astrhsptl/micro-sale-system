export class StateManager {
    public state: Object;

    constructor () {
        this.state = {}
    }

    register(name: string, data: any) {
        (this.state as any)[name] = data;
    }

    getStatePosition(name: string): any {
        return (this.state as any)[name];
    }
}