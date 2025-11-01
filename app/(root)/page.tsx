import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
