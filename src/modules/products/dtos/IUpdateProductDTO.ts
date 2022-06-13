export default interface IUpdateProductDTO {
  id: string;
  title: string;
  description: string;
  price: number;
  photo_url: string;
  amount: number;
  category_id: string;
  user_id: string;
  code: number;
}
