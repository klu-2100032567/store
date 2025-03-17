// backend/src/users/user.entity.ts
// User entity schema definition
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 }) // Enforcing name length constraints
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 400 }) // Address field with max length constraint
  address: string;

  @Column({ default: 'user' })
  role: string; // Defines user role in the system
}
