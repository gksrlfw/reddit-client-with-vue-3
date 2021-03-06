import { classToPlain, Exclude } from "class-transformer";
import * as bcrypt from 'bcrypt';
import { IsEmail } from "class-validator";
import { BeforeInsert, Column, Entity } from "typeorm";
import { AbstractEntity } from "./abstract-entity";

@Entity('users')
export class UserEntity extends AbstractEntity {
    @Column()
    @IsEmail()
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    @Exclude()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async comparePassword(attempt: string) {
        return await bcrypt.compare(attempt, this.password);
    }

    toJSON() {
        return classToPlain(this);
    }
}