import headImg from '/investment-calculator-logo.png'
export default function Header(){
    return (
        <header id='header'>
            <img src={headImg} alt="logo showing money bag" />
            <h1>Investment Calculator</h1>
        </header>
    )
}