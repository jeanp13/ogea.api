import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import PaymentMethod from '../../../payments_method/typeorm/entities/PaymentMethod';
import Product from '../../../products/typeorm/entities/Product';
import { User } from '../../../users/typeorm/entities/User';

@Entity('inventory')
class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  client_name: string;

  @Column()
  client_address: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column()
  discount: number;

  @Column()
  purchase_date: Date;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  product_id: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  payment_method_id: string;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id' })
  payment_method: PaymentMethod;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Inventory;
