import './GameBoy.css';
import { useEffect, useRef } from 'jinx';

interface IntroProps {
  duration: number;
}
export function GameBoy({ duration = 3000 }: IntroProps) {
  const typingRef = useRef<HTMLSpanElement>();

  useEffect(() => {
    setTimeout(() => {
      if (typingRef.current) {
        typingRef.current.style.top = '0';
      }
    }, 0);
  }, []);

  return (
    <div
      class="gameboy"
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        padding: '16px',
        zIndex: '1',
      }}
    >
      {/* TOP BORDER */}
      <div
        style={{
          backgroundColor: 'var(--color-gb-border)',
          borderTopLeftRadius: 'var(--radius-1)',
          borderTopRightRadius: 'var(--radius-1)',
          padding: '8px',
          zIndex: '1',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '16px',
          }}
        >
          <svg
            style={{
              flex: '1 1 auto',
            }}
            viewBox="0 0 25 2"
          >
            <path stroke="red" d="M0 0 H 25" />
            <path stroke="blue" d="M0 2 H 25" />
          </svg>
          <span
            style={{
              color: 'white',
              flex: '1 0 auto',
              fontSize: '.5rem',
              fontWeight: '300',
            }}
          >
            DOT MATRIX WITH STEREO SOUND
          </span>
          <svg
            style={{
              flex: '1 1 auto',
            }}
            viewBox="0 0 25 2"
          >
            <path stroke="red" d="M0 0 H 25" />
            <path stroke="blue" d="M0 2 H 25" />
          </svg>
        </div>
      </div>

      <div style={{ display: 'flex', flex: '1 1 auto', height: '100%' }}>
        {/* LEFT BORDER */}
        <div
          style={{
            backgroundColor: 'var(--color-gb-border)',
            borderBottomLeftRadius: 'var(--radius-1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 auto',
              gap: '4px',
              justifyContent: 'flex-end',
            }}
          >
            <svg
              style={{
                width: '16px',
              }}
              viewBox="0 0 24 24"
            >
              <circle fill="hsl(0, 0, 0)" cx="12" cy="12" r="10" />
            </svg>
            <span
              style={{
                fontSize: '.6rem',
              }}
            >
              BATTERY
            </span>
          </div>
          <div style={{ flex: '1 1 auto' }}></div>
        </div>
        <div
          style={{
            display: 'flex',
            flex: '1 0 auto',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* CONTENT */}
          <div
            style={{
              backgroundColor: 'var(--color-gb-bg)',
              color: 'var(--color-gb-fg)',
              fontFamily: 'monospace',
              fontWeight: '900',
              fontSize: '2rem',
              flex: '1 1 auto',
              height: '100%',
              minHeight: '0',
            }}
          >
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                height: '100%',
              }}
            >
              <span
                ref={typingRef}
                style={{
                  position: 'relative',
                  top: '-100%',
                  transition: `top ${duration}ms linear`,
                }}
              >
                TESTING
              </span>
            </div>
          </div>

          {/* BOTTOM BORDER */}
          <div
            style={{
              backgroundColor: 'var(--color-gb-border)',
              flex: '1 0 auto',
              height: '24px',
            }}
          ></div>
        </div>
        {/* RIGHT BORDER */}
        <div
          style={{
            backgroundColor: 'var(--color-gb-border)',
            borderBottomRightRadius: 'var(--radius-4)',
            width: '54px',
          }}
        ></div>
      </div>
    </div>
  );
}
