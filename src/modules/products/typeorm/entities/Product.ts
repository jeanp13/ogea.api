import { Exclude, Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "../../../../entities/Category";
import { User } from "../../../users/typeorm/entities/User";
import uploadConfig from "../../../../configuration/upload";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  code: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column()
  @Exclude()
  photo_url: string;

  @Column()
  @Exclude()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  category_id: string;

  @ManyToOne(() => Category, { cascade: true })
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Expose({ name: "photo" })
  getPhoto(): string | null {
    if (!this.photo_url) {
      return null;
    }
    switch (uploadConfig.driver) {
      case "disk":
        return `${process.env.APP_API_URL}/files/${this.photo_url}`;
      case "s3":
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.photo_url}`;
      default:
        return null;
    }
  }
}

export default Product;
