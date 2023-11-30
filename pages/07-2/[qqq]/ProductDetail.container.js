import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_PRODUCT } from './ProductDetail.queries'; // export는 골라서 가져오기 가능
import BoardDetailUI from './ProductDetail.presenter'; // export deault로 한개만 가져오기

export default function ProductDetail() {
  const router = useRouter();
  console.log(router);
  console.log(router.query.number);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.qqq,
    },
  });

  console.log(data);
  return (
    <div>
      <BoardDetailUI router={router} data={data} />
    </div>
  );
}
