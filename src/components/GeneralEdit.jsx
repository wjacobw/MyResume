
export default function GeneralEdit({ person, handleEdit, setEdit}) {
  return (
    <>
      <div>
        <h2>General Information</h2>
        {person.map((info) => {
          return (
            <>
              <input
                className="spacyInput"
                key={info.id}
                placeholder={Object.values(info)[0]}
                value={Object.values(info)[0]}
                onChange={e => handleEdit(info.id, e)}
              />
              <br />
            </>
          );
        })}

        <button type="text" onClick={setEdit}>
          Submit
        </button>
      </div>
    </>
  );
}
