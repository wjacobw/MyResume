export default function General({ person, setEdit }) {
  return (
    <>
      <div>
        <h2>General Information</h2>
        <p>Name: {person[0].name}</p>
        <p>Email: {person[1].email}</p>
        <p>Phone number: {person[2].phone}</p>
        <button onClick={setEdit}> Edit</button>
      </div>
    </>
  );
}
