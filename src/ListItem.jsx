export const LI = () => {
  return <>li</>;
};

const ListItem = (props) => {
  return (
    <>
      <li>Hello, {JSON.stringify(props)}</li>
      {props.children}
    </>
  );
};

export default ListItem;
