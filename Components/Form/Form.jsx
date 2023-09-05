export default function Form({ setUserName }) {
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="User Name"
        />
      </div>
    </form>
  );
}
