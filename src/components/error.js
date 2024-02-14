import { useRouteError } from "react-router-dom";

 
 const Error = () => {

  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <img
        src="https://static-00.iconduck.com/assets.00/weary-cat-face-emoji-2048x1983-jzoo3gng.png"
        alt="kiity-img"
        width="80px"
      />
      <h1>Oops!Something went wrong.</h1>
    </div>
  );
};

export default Error;
