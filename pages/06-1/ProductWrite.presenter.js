import { RedInput, BlueButton } from './ProductWrite.styles';

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>@@@@@@@@@@@@@@@@@ 여기는 프레젠터입니다 @@@@@@@@@@@@@@@@@</div>
      판매자 : <RedInput type="text" onChange={props.onChangeSeller} />
      제목 : <RedInput type="text" onChange={props.onChangeName} />
      내용 : <textarea onChange={props.onChangeDetail} />
      가격 : <RedInput type="number" onChange={props.onChangePrice} />
      <BlueButton onClick={props.onClickSubmit}>GRAPHQL-API 요청하기</BlueButton>
      <div>@@@@@@@@@@@@@@@@@ 여기는 프레젠터입니다 @@@@@@@@@@@@@@@@@</div>
    </div>
  );
}
