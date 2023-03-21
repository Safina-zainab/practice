const RightNav = (props: any) => {
  const listStyle = {
    color: 'white',
    fontSize: '20px',
    listStyle: 'none',
    padding: '10px',
  }
  return (
    <>
<ul style={listStyle}>
        <li>{props.firstItem}</li>
        <li>{props.secondItem}</li>
        <li>{props.thirdItem}</li>
      </ul>
    </>
  );
};

export default RightNav;
