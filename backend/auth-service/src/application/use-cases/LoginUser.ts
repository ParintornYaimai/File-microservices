import type { UserRepository } from "../ports/userRepository.js";
import type { LoginDTO } from "../dtos/Login.dto.js";

export class LoginUser {
  constructor(private deps: { userRepo: UserRepository }) {}

  async execute(dto: LoginDTO) {
    const user = await this.deps.userRepo.findByEmail(dto.email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // ถ้ายังไม่ทำ password hasher/jwt ตอนนี้ เอาแค่นี้ก่อน
    // (แต่จริงๆ Login ต้องมี PasswordHasher + TokenService)

    return {
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      profilePicture: user.profilePicture,
    };
  }
}
