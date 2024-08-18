import { Role } from "./role.model.js";
import { User } from "./user.model.js";

export function Relaciones() {

    // A un rol pertenecen varios usuarios
    Role.hasMany(User, { foreignKey: "role_id" });
    // Un usuario pertenece a un rol
    Role.belongsTo(Role, { foreignKey: "role_id" });

}
