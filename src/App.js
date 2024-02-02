import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-black">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <Provider store={appStore}>
          <Body />
        </Provider>
      )}
    </div>
  );
}

export default App;
