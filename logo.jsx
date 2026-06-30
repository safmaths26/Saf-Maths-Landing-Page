// Logo marks for Axiom Maths
// Three abstract mark variants the user can toggle in Tweaks.
// Each mark riffs on a mathematical concept — original, not generic.

// (1) "Therefore" — three dots in a triangle (∴), the symbol mathematicians use
// to mark a conclusion. Drawn as a deliberate triangle of small filled circles.
function MarkTherefore({ size = 40, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="9" r="3.2" fill={color} />
      <circle cx="10" cy="28" r="3.2" fill={color} />
      <circle cx="30" cy="28" r="3.2" fill={color} />
      <path d="M20 9 L10 28 L30 28 Z" stroke={color} strokeWidth="0.6" strokeOpacity="0.35" />
    </svg>
  );
}

// (2) "Axis" — a coordinate cross with a small filled origin marker, evoking the
// Cartesian plane. The horizontal axis breaks slightly to suggest an arrow.
function MarkAxis({ size = 40, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="20" y1="4" x2="20" y2="36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="20" x2="36" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3.5" fill={color} />
      <circle cx="28" cy="12" r="1.6" fill={color} />
    </svg>
  );
}

// (3) "Proof Square" — a nested rotated square, the geometric "QED" tombstone
// (∎) that closes a proof. Two squares, one rotated 45°.
function MarkProof({ size = 40, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" stroke={color} strokeWidth="1.5" />
      <rect x="20" y="6" width="19.8" height="19.8"
            transform="rotate(45 20 6)" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2.2" fill={color} />
    </svg>
  );
}

// (4) Wordmark — the company name. Used standalone or beside a mark.
// Switches between two name candidates.
// Two-tone wordmark matching the SafMaths flyer: the name in the ambient
// ink/cream colour, "Maths" in solid accent orange, set tight and bold in
// Poppins (no space, no fade, no italic).
function Wordmark({ name = 'Saf', kind = 'sans', color = 'currentColor', size = 22 }) {
  const family = kind === 'serif'
    ? '"Instrument Serif", "Cormorant Garamond", Georgia, serif'
    : '"Poppins", system-ui, sans-serif';
  const weight = kind === 'serif' ? 500 : 700;
  const tracking = kind === 'serif' ? '-0.01em' : '-0.03em';
  return (
    <span style={{
      fontFamily: family,
      fontWeight: weight,
      fontSize: size,
      letterSpacing: tracking,
      color,
      lineHeight: 1,
      whiteSpace: 'nowrap',
    }}>
      {name}<span style={{ color: 'var(--accent)' }}>Maths</span>
    </span>
  );
}

// Composed lockup — mark + wordmark side by side.
function Logo({ mark = 'therefore', name = 'Axiom', kind = 'serif',
                color = 'currentColor', markSize = 28, textSize = 22, gap = 10 }) {
  const Mark = mark === 'axis' ? MarkAxis
             : mark === 'proof' ? MarkProof
             : MarkTherefore;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap, color }}>
      <Mark size={markSize} color={color} />
      <Wordmark name={name} kind={kind} size={textSize} color={color} />
    </span>
  );
}

Object.assign(window, { MarkTherefore, MarkAxis, MarkProof, Wordmark, Logo });
