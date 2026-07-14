import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity('profiles')
export class ProfileEntity 
{
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 150 })
  fullName: string;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @BeforeInsert()
  generateId() {
    // Custom logic before insertion. 
    // Using a UUID prefixed with 'usr_' as an example.
    this.id = `usr_${randomUUID()}`;
  }
}