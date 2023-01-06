export default function Header ({logo, menus}) {
    return(
        <div className='container'>
            <div className='logo'>
                <h2>sad zeppelins</h2>
                <img src={logo}/>
            </div>
            <div className='menu1'>
                {menus.map((e) => {
                return(
                    <div>
                    <a className='menu' href='#'>{e.title}</a>
                    </div>
                );
                })}
            </div>
        </div>
    );
};