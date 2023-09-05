import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    const data = await fetch(`https://api.github.com/users/${username}`);
    const response = await data.json();
    console.log("res", response);

    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, [username]);
  return (
    <div className="card">
      <Form setUserName={setUsername} />
      <UserCard data={data} />
    </div>
  );
}
