import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const toUpdateUser = this.usersRepository.findById(user_id);

    if (!toUpdateUser) {
      throw new Error("User not found.");
    }

    const user = this.usersRepository.turnAdmin(toUpdateUser);

    return user;
  }
}

export { TurnUserAdminUseCase };
