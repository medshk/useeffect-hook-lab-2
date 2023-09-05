export default function UserCard({ data }) {
  return (
    <div className="user-card">
      <div>
        <img alt="avatar" src={data?.image} />
      </div>
      <div>
        <h5> Name: {data?.name}</h5>

        <p> Username:{data?.username} </p>
      </div>
    </div>
  );
}
