import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREATE_PRODUCT } from './ProductWrite.queries'; // export는 골라서 가져오기 가능
import ProductWriteUI from './ProductWrite.presenter'; // export deault로 한개만 가져오기
import { useRouter } from 'next/router';

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

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

      router.push(`/07-2/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (seller && name && detail && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // if (seller && name && detail && price)
  return (
    <div>
      <div>$$$$$$$$$$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$$$$$$$$$$</div>
      <ProductWriteUI
        onClickSubmit={onClickSubmit}
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        isActive={isActive}
      />
      <div>$$$$$$$$$$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$$$$$$$$$$</div>
    </div>
  );
}
