<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsDemoSeeder extends Seeder
{
    /**
     * Create the initial roles and permissions.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['guard_name' => 'api','name' => 'register_role']);
        Permission::create(['guard_name' => 'api','name' => 'edit_role']);
        Permission::create(['guard_name' => 'api','name' => 'delete_role']);

        // create roles and assign existing permissions
        $role1 = Role::create(['guard_name' => 'api','name' => 'Super-Admin']);
        $role2 = Role::create(['guard_name' => 'api','name' => 'Admin']);


        // gets all permissions for Super Admin and Admin
        $role = Role::findByName('Super-Admin', 'api'); 
        $role->givePermissionTo(Permission::all());

        $role = Role::findByName('Admin', 'api'); 
        $role->givePermissionTo(Permission::all());

        // create demo users

        $user1 = \App\Models\User::factory()->create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt("12345678"),
        ]);
        $user1->assignRole($role1);

        $user2 = \App\Models\User::factory()->create([
            'first_name' => 'Admin',
            'last_name' => 'Developpeur',
            'email' => 'dev@gmail.com',
            'password' => bcrypt("12345678"),
        ]);
        $user2->assignRole($role2);
    }
}
