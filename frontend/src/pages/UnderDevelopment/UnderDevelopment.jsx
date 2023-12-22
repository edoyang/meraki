const UnderDevelopment = () => {

    const style={
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '100px',
        margin: 'auto',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
    return (
    <div style={style} className="comeback-later">
        <h1>Site Under Development</h1>
        <p>Sorry, this site is under development. Please come back later.</p>
    </div>
  )
}

export default UnderDevelopment