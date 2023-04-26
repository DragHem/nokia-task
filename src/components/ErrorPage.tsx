import ErrorSVG from "./ErrorSVG.tsx";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-screen">
      <h2 className="font-bold text-2xl text-center">
        API is not available at this moment, try again in few moments...
      </h2>
      <div className="w-1/2">
        <ErrorSVG />
      </div>
    </div>
  );
};

export default ErrorPage;
