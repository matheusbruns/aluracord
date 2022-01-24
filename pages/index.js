function GlobalStyle(){
  return (
    <style global jsx>{`
    *{
      margin: 0;
      padding:0;
      box-sizing:border-box;
    }
    body{
      font-family: sans-serif;
      background:rgba(33, 41, 49, 1);
      color: #fff;
    }
    
    `}</style>
  )
}
function Titulo(props) {
  console.log(props)
  const Tag = props.tag
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag} {
        color: red;
        font-size:2.5rem;
        font-weight:600;
      }
      `}</style>
    </>
    
  )
}

// Componete React
function HomePage() {
  // JSX
  return(
    <div>
      <GlobalStyle />
      <Titulo tag="h1">Bem Vindo de volta!</Titulo>
      <h2>Discord - Alura</h2>
    </div>
   
  )
}

export default HomePage
