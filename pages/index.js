export default function Home() {
  return (
    <main className="container">
      {/* LOGO */}
      <div className="logoWrap">
        <img src="/logo.png" alt="Adeey HD Logo" className="logo" />
      </div>

      <h1 className="title">ADEEY HD</h1>
      <p className="subtitle">Premium Beats Store</p>

      <div className="beats">
        <div className="beat">🔥 Trap Beat</div>
        <div className="beat">🎧 Drill Beat</div>
        <div className="beat">💎 Hip-Hop Beat</div>
      </div>
    </main>
  );
}
