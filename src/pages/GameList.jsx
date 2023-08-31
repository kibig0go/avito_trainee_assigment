import { GameCard } from "../components/GameCard";
import { Filters } from "../components/Filters";
import { Row, Col, Card} from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function GameList() {
  const gamesList = useSelector((state) => state.games.list);
  const isLoading = useSelector((state) => state.games.isLoading)

  return (
    <>
      <div style={{margin: 40}}>
        <Filters />
      </div>
        <div style={{margin: 5}}>
          {isLoading ? 
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <Card
                hoverable
                style={{ width: 240}}
                className="gameCard"
                loading={true}
                >
                </Card> 
              </Col>
              <Col span={8}>
                <Card
                hoverable
                style={{ width: 240}}
                className="gameCard"
                loading={true}
                >
                </Card> 
              </Col>
              <Col span={8}>
                <Card
                hoverable
                style={{ width: 240}}
                className="gameCard"
                loading={true}
                >
                </Card> 
              </Col>
               
            </Row>
            : 
            <Row gutter={[24, 24]} >
              {gamesList.map(game => 
                <Col span={8} key={game.id}>
                  <div style={{margin: '0 auto', width: '240px'}} >
                    <Link to={'/game/' + game.id}>
                      <GameCard game={game}/>
                    </Link>
                  </div>
                </Col>
              )}
            </Row>
          }
        </div>
    </>
  );
}

export { GameList };