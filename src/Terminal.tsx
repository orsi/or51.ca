import "./Intro.css";
import { useEffect, useState } from "jinx";

export function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if (/^.$/u.test(ev.key)) {
        // `key` matches a single unicode character
        setPrompt((value) => value + ev.key);
      } else if (ev.key === "Backspace") {
        setPrompt((value) => value.substring(0, value.length - 1));
      } else if (ev.key === "Enter" && prompt.trim().length > 0) {
        setPrompt("");
        setLines((value) => {
          const newValue = [...value];

          if (newValue.length === 0) {
            newValue.push(
              "",
              `Site is currently under construction -- nothing to see here yet!`,
              "",
            );
          }

          newValue.push(`Unknown command: ${prompt}`);
          return newValue;
        });
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [prompt]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          wordBreak: "break-all",
        }}
      >
        <span>$</span>
        <span style={{ marginLeft: ".3em" }}>{prompt}</span>
        <span class="cursor">█</span>
      </div>
      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
        {lines.map((line) => (
          <li
            class="color-grey"
            style={{
              wordBreak: "break-all",
              margin: "0",
              minHeight: "1rem",
            }}
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
