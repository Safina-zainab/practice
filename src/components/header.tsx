const Header = (props: any) => {
    const headingStyle = {
        color: 'white',
       fontSize:'30px' 
    };

    return (
        <>
            <h1 style={headingStyle}>{props.heading}</h1>
        </>
 )   
}

export default Header;