import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-20 flex flex-col gap-4 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Framer Practice
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto mx-auto">
        <button
          className="btn btn-primary max-w-full"
          onClick={() => navigate("/docs")}
        >
          Docs
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/egghead")}
        >
          Egghead
        </button>
      </div>
    </div>
  );
};
export default Home;
