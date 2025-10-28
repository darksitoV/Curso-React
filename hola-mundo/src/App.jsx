import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  // const formatUsername = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        userName="darksitoV"
        name="Isaac Cardenas"
      ></TwitterFollowCard>
      <TwitterFollowCard
        userName="Tilin"
        name="Tilin pro"
      ></TwitterFollowCard>
      <TwitterFollowCard
        userName="Tilin"
        name="Tilin pro"
      ></TwitterFollowCard>
    </section>
  );
}

// export default App;
