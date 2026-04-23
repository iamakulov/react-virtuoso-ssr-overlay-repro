import Head from 'next/head'
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso'

const css = `
  *{box-sizing:border-box}body{margin:0;font-family:Arial,sans-serif;background:#f5f5f5}
  .page{max-width:430px;margin:0 auto;background:#fff;min-height:100vh}
  .nav,.after{padding:16px}.nav a{margin-right:12px}.wrap{padding:16px}
  .row,.card,.faq{border:1px solid #ddd;border-radius:16px;background:#fff}
  .row{height:160px;padding:16px;margin-bottom:16px}
  .grid{display:grid;grid-template-columns:1fr;gap:16px}
  .card{padding:16px}.faq{padding:12px;margin-top:12px;background:#fff3cd;border-color:#e5c46b}
`

export async function getServerSideProps({ params }) {
  return { props: { kind: params?.kind === 'grid' ? 'grid' : 'list' } }
}

export default function Page({ kind }) {
  const isGrid = kind === 'grid'
  const data = Array.from({ length: 5 }, (_, i) => i)
  return (
    <>
      <Head>
        <title>{kind}</title>
      </Head>
      <style>{css}</style>
      <div className="page">
        <div className="nav">
          <a href="/list">list</a>
          <a href="/grid">grid</a>
        </div>
        <div className="wrap">
          {isGrid ? (
            <VirtuosoGrid
              useWindowScroll
              data={data}
              totalCount={data.length}
              initialItemCount={data.length}
              listClassName="grid"
              itemContent={index => (
                <div className="card">
                  <h3>Grid card {index + 1}</h3>
                  <p>This card should push the FAQ down, but the SSR grid height collapses.</p>
                </div>
              )}
            />
          ) : (
            <Virtuoso
              useWindowScroll
              data={data}
              totalCount={data.length}
              initialItemCount={data.length}
              itemContent={index => <div className="row">
                <h3>List row {index + 1}</h3>
                <p>This row should push the FAQ down, but the SSR list height collapses.</p>
              </div>}
            />
          )}
        </div>
        <div className="after">
          <h2>Frequently Asked Questions</h2>
          {Array.from({ length: 5 }, (_, i) => (
            <div className="faq" key={i}>
              FAQ {i + 1} after the virtualized content
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
