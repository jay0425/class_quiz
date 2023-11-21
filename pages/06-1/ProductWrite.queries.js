import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
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
