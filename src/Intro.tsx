import './Intro.css';
import { useEffect, useRef, useState } from 'jinx';

const TITLE = 'LOAD OR51.CA';

const NOW = new Date();
const AUDIO_CONTEXT = new AudioContext();

export function Intro() {
  console.log('audio', AUDIO_CONTEXT);
  const bluetooth = navigator.bluetooth;
  console.log('bluetooth', bluetooth);
  const connection = navigator.connection;
  console.log('connection', connection);
  const deviceMemory = navigator.deviceMemory;
  console.log('deviceMemory', deviceMemory);
  const geolocation = navigator.geolocation;
  console.log('geolocation', geolocation);
  const hardware = navigator.hardwareConcurrency;
  console.log('hardware', hardware);
  const language = navigator.language;
  console.log('language', language);
  const languages = navigator.languages;
  console.log('languages', languages);
  const online = navigator.onLine;
  console.log('online', online);
  const preferences = navigator.preferences;
  console.log('preferences', preferences);
  const usb = navigator.usb;
  console.log('usb', usb);
  const userAgent = navigator.userAgent;
  console.log('userAgent', userAgent);

  const history = window.history;
  console.log('history', history);

  const battery = navigator.getBattery().then((res) => {
    console.log('battery', res);
  });

  const gamepads = navigator.getGamepads();
  console.log('gamepads', gamepads);

  const [title, setTitle] = useState('');
  const [lastInput, setLastInput] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }
  }, [showTooltip]);

  // const lastUpdate = useRef(0);
  // const raf = useRef(0);
  // useEffect(() => {
  //   const update = (time: number) => {
  //     const delta = time - lastUpdate.current;
  //     if (delta > 250) {
  //       setTitle((value) => {
  //         return TITLE.substring(0, value.length + 1);
  //       });
  //       lastUpdate.current = time;
  //     }
  //     raf.current = requestAnimationFrame(update);
  //   };
  //   raf.current = requestAnimationFrame(update);
  //   return () => cancelAnimationFrame(raf.current);
  // }, []);

  useEffect(() => {
    console.log('wtf');
    const onKeyDown = (ev: KeyboardEvent) => {
      console.log('keydown', ev);
      const inputs = [];
      if (ev.altKey) {
        inputs.push('ALT');
      }
      if (ev.ctrlKey) {
        inputs.push('CTRL');
      }
      if (ev.metaKey) {
        inputs.push('CMD');
      }
      if (ev.shiftKey) {
        inputs.push('SHIFT');
      }
      if (/^.$/u.test(ev.key)) {
        // `key` matches a single unicode character
        inputs.push(ev.key);
      }
      setLastInput(inputs.join('+'));
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      console.log('yo');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        fontFamily: 'monospace',
        fontSize: '12px',
        gridTemplateColumns: '9fr 3fr',
        height: '100vh',
      }}
      onClick={() => {
        navigator.vibrate([
          100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100,
          30, 100,
        ]); // Vibrate 'SOS' in Morse.
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <div>
            Jonathon Orsi BIOS v39.
            {Math.round((10 * (NOW.getMonth() + 1)) / 12)}
          </div>
          <div>Copyright (C) 1986-{NOW.getFullYear()}</div>
          <div>Memory Test: {deviceMemory}K OK</div>
          <div>|</div>
          <div>|</div>
          <div>Detecting Location: Toronto, ON</div>
          <div>Detecting Timezone: UTC-4</div>
          <div>Detecting User Agent: {userAgent}</div>
          <div>|</div>
          <div>|</div>
          <div>
            $ <span class="text">{title}</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto' }}>
          <div>Press ESC to skip INTRO</div>
          <div>Last Input: {lastInput}</div>
          <div>{NOW.toLocaleDateString()}-JX3P,UOFT008-2013-GB16-OCAD2022</div>
        </div>
      </div>
      <div>
        <svg viewBox="0 0 24 24">
          <path
            d="
              M 4 4
              A 3 7 0 0 0 12 6"
            fill="red"
          />
          <path
            d="
              M 4 4
              A 1 1 0 0 0 12 6"
            fill="green"
          />
        </svg>
      </div>
    </div>
  );
}
