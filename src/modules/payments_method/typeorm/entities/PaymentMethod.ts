import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "../../../../entities/Product";
import { User } from "../../../users/typeorm/entities/User";

@Entity("payment_methods")
class PaymentMethod {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  method: string;

  @Column()
  tax: number;

  @Column()
  installments: number;

  @Column()
  enabled: boolean;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default PaymentMethod;
