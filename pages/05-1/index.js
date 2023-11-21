import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    # 변수의 타입 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [seller, setSeller] = useState('');
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: Number(price),
          },
        },
      });
      console.log(result);
      console.log(result.data.createProduct._id);

      router.push(`/05-2/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  // 한 줄일때는 괄호() 필요 없음!
  return (
    <>
      판매자 : <input type="text" onChange={onChangeSeller} />
      제목 : <input type="text" onChange={onChangeName} />
      내용 : <textarea onChange={onChangeDetail} />
      가격 : <input type="number" onChange={onChangePrice} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
