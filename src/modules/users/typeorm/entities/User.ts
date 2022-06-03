import { Exclude, Expose } from "class-transformer";
import { Column, Entity } from "typeorm";

import uploadConfig from "../../../../configuration/upload";
import { BaseEntity } from "../../../../entities/BaseEntity";

@Entity("users")
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column()
  storeId: string;

  @Expose({ name: "avatar_url" })
  getAvatar_url(): string | null {
    if (!this.avatar) {
      return null;
    }
    switch (uploadConfig.driver) {
      case "disk":
        return `${process.env.APP_API_URL}/files/${this.avatar}`;
      case "s3":
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;
      default:
        return null;
    }
  }
}
