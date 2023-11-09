import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProduct: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function Example05() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: '마리아',
        createProductInput: {
          name: '반지',
          detail: '영롱한 반지',
          price: 1000000000,
        },
      },
    });

    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>[GRAPHQL-API] 요청하기</button>
    </>
  );
}
