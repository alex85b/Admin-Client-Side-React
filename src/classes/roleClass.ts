import { Permission } from "./permissionClass";

export class Role {
    id: number;
    name: string;
    permissions: Permission[]; // array of Permission objects.

    constructor(id = 0, name = '', permissions = []) {
        this.id = id;
        this.name = name;
        this.permissions = permissions
    }
}