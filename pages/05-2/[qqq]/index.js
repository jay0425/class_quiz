import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.number);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      productId: router.query.qqq,
    },
  });

  console.log(data);

  return (
    <div>
      <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data?.fetchProduct?.seller}</div>
      <div>제목: {data?.fetchProduct?.name}</div>
      <div>내용: {data?.fetchProduct?.detail}</div>
      <div>가격: {data?.fetchProduct?.price}</div>
    </div>
  );
}
