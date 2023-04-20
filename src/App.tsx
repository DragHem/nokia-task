import Summary from "./components/summary/Summary.tsx";
import { Suspense } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";

function App() {
  return (
    <>
      <ErrorBoundary fallback={"Error occurred when fetching data."}>
        <Suspense fallback={<div>loading...</div>}>
          <Summary />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
