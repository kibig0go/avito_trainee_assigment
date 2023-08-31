import { Link, useParams } from "react-router-dom";
import { Carousel, Skeleton } from "antd";
import { DoubleLeftOutlined } from '@ant-design/icons';
import { fetchGameCard } from "../features/games/gameCardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { parseDate } from "../assets/helpers";


function Game(props) {
    const dispatch = useDispatch();
    const gameInfo = useSelector((state) => state.gameCard.gameInfo);
    const isLoading = useSelector((state) => state.gameCard.isLoading);
    const error = useSelector((state) => state.games.error);
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchGameCard(id));
    }, [dispatch, id]);
    
    const contentStyle = {
        maxHeight: '100%',
        maxWidth: '100%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    return (
        <div>
            <div style={{margin: 20}}>
                <Link to='/'><DoubleLeftOutlined /> Список</Link>
            </div>
            {isLoading ?
                <Skeleton active /> :
                <div>
                    <div style={{maxWidth: 800, margin: '0 auto'}}>
                        <Carousel autoplay>
                            {gameInfo.screenshots.map(img =>
                                <div key={img.id}>
                                    <img src={img.image} style={contentStyle} />
                                </div>)}
                        </Carousel>
                    </div>
                    <div style={{maxWidth: 900, margin: '30px auto', textAlign: 'center'}}>
                        <h1>Название: {gameInfo.title}</h1>
                        <h3>Дата релиза: {parseDate(gameInfo.release_date)}</h3>
                        <h3>Издатель: {gameInfo.publisher}</h3>
                        <h3>Разработчик: {gameInfo.developer}</h3>
                        <h3>Жанр: {gameInfo.genre}</h3>
                        {gameInfo.minimum_system_requirements ?
                            <div>
                                <div style={{margin: '30px auto'}}>
                                    <h2>Минимальные системные требования:</h2>
                                </div>
                                <ul>
                                    <li>
                                        <h3>{gameInfo.minimum_system_requirements.graphics}</h3>
                                    </li>
                                    <li>
                                        <h3>{gameInfo.minimum_system_requirements.memory}</h3>
                                    </li>
                                    <li>
                                        <h3>{gameInfo.minimum_system_requirements.os}</h3>
                                    </li>
                                    <li>
                                        <h3>{gameInfo.minimum_system_requirements.processor}</h3>
                                    </li>
                                    <li>
                                        <h3>{gameInfo.minimum_system_requirements.storage}</h3>
                                    </li>
                                </ul>
                            </div> :
                            <></>
                        }
                    </div>
                    
                </div>
            }
        </div>
    );
}

export { Game };