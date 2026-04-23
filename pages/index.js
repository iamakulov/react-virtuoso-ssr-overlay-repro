export default function Index() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: '40px auto',
        maxWidth: 480,
        lineHeight: 1.5,
        padding: '0 16px',
      }}
    >
      <h1>react-virtuoso SSR overlay repro</h1>
      <p>Open one of these pages:</p>
      <ul>
        <li>
          <a href="/list">/list</a>
        </li>
        <li>
          <a href="/grid">/grid</a>
        </li>
      </ul>
    </main>
  )
}
