import { Card } from "antd";
import { parseDate } from "../assets/helpers";
const { Meta } = Card;



export const GameCard = ({game}) => (
    <Card
        hoverable
        style={{ width: 240}}
        cover={<img alt="example" src={game.thumbnail} />}
        className="gameCard"
    >
      <Meta title={game.title} description={game.short_description} />
      <h5>{game.publisher}</h5>
      <h5>{parseDate(game.release_date)}</h5>
      <h5>{game.genre}</h5>
    </Card>
)