export default function BoardDetailUI(props) {
  return (
    <div>
      <div>{props.router.query.qqq}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {props.data?.fetchProduct?.seller}</div>
      <div>제목: {props.data?.fetchProduct?.name}</div>
      <div>내용: {props.data?.fetchProduct?.detail}</div>
      <div>가격: {props.data?.fetchProduct?.price}</div>
    </div>
  );
}
