import Loading from "./components/Loading";
import Route from "./router/Route";
import { useAuth } from "./hooks/use-auth";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) return <Loading />;
  else {
    return (
      <div>
        <Route />
      </div>
    );
  }
}

export default App;
