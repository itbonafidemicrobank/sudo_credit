//Creation des constantes globales pour les URLs
import { environment } from "src/environments/environment";

export const URL_SERVICIOS = environment.URL_SERVICIOS;
export const URL_BACKEND = environment.URL_BACKEND;
export const URL_FRONTED = environment.URL_FRONTED;

export const ROLES: any = [
    {
        'name': 'Roles',
        'permisos': [
           { 
               name: 'Registrar',
               permiso: 'register_role',
            },
           { 
               name: 'Editar',
               permiso: 'edit_role',
            },
           { 
               name: 'Eliminar',
               permiso: 'delete_role',
            },
        ]
    }
]
