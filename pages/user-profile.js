function UserProfilePage(props) {
  return (
    <div>
      <h1>{props.firstname}</h1>
      <h2>{props.surname}</h2>
    </div>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      firstname: "Huseyin",
      surname: "Soylu",
    },
  };
}
