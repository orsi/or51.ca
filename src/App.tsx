import "./reset.css";
import "./global.css";
import { useLastInput } from "./useLastInput";
import { Navigation } from "./Navigation";
import { Terminal } from "./Terminal";

function Test() {
  const lastInput = useLastInput();
  return <small class="font-smaller">last input: {lastInput}</small>;
}

export default function App() {
  return (
    <div class="container-sm pt-4 px-2">
      <header>
        <Navigation />
      </header>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Test />
      </div>
      <main
        class="p-2"
        style={{
          margin: "var(--spacing-2) 0",
          border: "1px dashed var(--color-grey)",
        }}
      >
        <Terminal />
      </main>
    </div>
  );
}
