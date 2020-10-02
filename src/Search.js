import React, { useState } from 'react';
import axios from "axios";
import Images from './Images'
const Search =()=>{

    const [keyword, setkeyword] = useState('');
    const [photos, setphotos] = useState([]);
    const [loader, setloader] = useState(false);

    const inputHandle = (e)=>{
        setkeyword(e.target.value);
    };

    const searchImages = async (e)=>{
        e.preventDefault();
        setloader(true);
        const res = await axios.get(`https://api.pexels.com/v1/search?query=${keyword}&per_page=15"`,{
            headers:{
                Authorization:'563492ad6f91700001000001efae0f9d055b4dc998068e94a98635ed'
            }
        }
        );
        setloader(false);
        setphotos(res.data.photos)
        console.log(photos);
    };


    return(
        <>
        <form onSubmit={searchImages}>
            <div className="form-group">
                <input type="text" name="keywoard" className="form-control" value={keyword} onChange={inputHandle}
                placeholder="Search Images..."/>
            </div>
            <div className="form-group">
                <input type="submit" value="search images"
                className="btn btn-primary btn-block"/>
            </div>
        </form>
        <div className='row'>
        {!loader ? (
            photos.map((img)=>(
                <Images image={img} key={img.id}/>))
        ) : <h1>Loading...</h1>}
        </div>
        </>

    );
};
export default Search;