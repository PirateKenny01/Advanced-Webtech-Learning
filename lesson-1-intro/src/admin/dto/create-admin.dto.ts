// src/admin/dto/create-admin.dto.ts
export class CreateAdminDto 
{
  //To tell TypeScript, "Hey, don't worry, I promise these values will exist at runtime," 
  // you just need to add an exclamation mark (!) right after the property names.
  //  This is called the Definite Assignment Assertion.
  name !: string;
  email!: string;
  role !: string;
}