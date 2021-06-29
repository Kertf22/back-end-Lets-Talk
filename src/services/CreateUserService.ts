import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs';

interface  IUserRequest{
    name: string;
    email:string;
    password:string;
    admin?: boolean;
}

export class CreateUserService {
    async execute({name,email,password,admin = false} : IUserRequest){
        const userRepository = getCustomRepository(UserRepository)

        const AlreadyExistUser = await userRepository.findOne({
            where: { email }
        })

        if (AlreadyExistUser){
            throw new Error("User already exist!")
        }

        const passwordcript = await hash(password, 8)

        const user = userRepository.create({
            name,
            email,
            password: passwordcript,
            admin
        })

        await userRepository.save(user)

        return user
    }
}