import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantMenu(restaurantId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemCardsParent =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      .filter((x) => x?.card?.card?.itemCards)
      .sort(
        (a, b) =>
          b?.card?.card?.itemCards?.length - a?.card?.card?.itemCards?.length
      );
  const itemCards = itemCardsParent?.[0]?.card?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((it) => (
            <li key={it.card.info.id}>{it.card.info.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
