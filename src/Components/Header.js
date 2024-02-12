// import './Header.css'
// import headerStyle from './Header.module.css'

function Header(props){

    return(
        <>
            <h1 className={headerStyle.headerClass}>Hi, This is Header</h1>
            <p>I am a paragraph in the header.</p>
        </>
    );
}

export default Header