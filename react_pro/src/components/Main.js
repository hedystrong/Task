export default function Main ({zurag, tses,card}) {
    return(
        <div>
            <div className="main-container">
                <div className="leftSide">
                    <h2 className="h2">Blog Posts</h2>
                    <h3>I think so, this is it.</h3>
                    <p className="p">Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
                    <div>
                        <img src="#" alt="#"/>
                        <img src="#" alt="#"/>
                        <img src="#" alt="#"/>
                    </div>
                </div>
                <div className="rightSide">
                    <img src={zurag} alt="#"/>
                </div>
            </div>
            <div className='menu2'>
                {tses.map((e) => {
                return(
                    <div>
                    <a className='dedMenu' href='#'>{e.title}</a>
                    </div>
                );
                })}
            </div>
            <div className="cardM">
                {card.map((e) => {
                return(
                    <div>{e.card}</div>
                );
                })}
            </div>
        </div>