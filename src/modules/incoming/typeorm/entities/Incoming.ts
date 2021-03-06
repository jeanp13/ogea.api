import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Product from '../../../products/typeorm/entities/Product';
import { User } from '../../../users/typeorm/entities/User';

@Entity('incoming')
class Incoming {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  count: number;

  @Column()
  amount: number;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Incoming;
