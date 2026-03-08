import '../componets_CSS/Header.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function Header() {
    return (
        <>
        <div className="bg-black">
            <div>
                <h1>
                    <a href="./"> 
                    <img src="react group_Project/src/assets/logo.svg" className='bg-black' alt="" />
                    </a>
                </h1>
            </div>
            <div>
                <li className='' to="/">Top</li>
                <li className='' to="/news">News</li>
                <li className='' to="/episode">Episode</li>
                <li className='' to="/introduction">Introduction</li>
                <li className='' to="/movie">Movie</li>
            </div>
        </div>

                {/* <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Rootlayout />} >
                            <Route index element={<Top />} />
                            <Route path="news" element={<News />} />
                            <Route path="episode" element={<Episode />} />
                            <Route path="introduction" element={<Introduction />} />
                            <Route path="movie" element={<Movie />} />
                        </Route>
                    </Routes>
                </BrowserRouter> */}
        </>
    );
}
export default Header;