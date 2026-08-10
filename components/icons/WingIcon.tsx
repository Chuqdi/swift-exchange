export function WingIcon({ className = 'wing-icon wing' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 120" aria-hidden="true">
      <path d="M4 116C40 20 80 8 100 60C120 8 160 20 196 116C160 78 130 66 100 88C70 66 40 78 4 116Z" />
    </svg>
  );
}

export function WingGradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff7a1a" />
          <stop offset="100%" stopColor="#e8420c" />
        </linearGradient>
      </defs>
    </svg>
  );
}