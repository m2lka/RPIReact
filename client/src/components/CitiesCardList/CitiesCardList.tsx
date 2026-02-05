
import type { OffersList } from "../../types/offers";
import { CitiesCard } from '../cities-card/cities-card';

type CitiesCardListProps = {
    offersList: OffersList[];
};

function CitiesCardList({ offersList }: CitiesCardListProps) {
    if (!offersList || offersList.length === 0) {
        return <p>No places available</p>;
    }

    return (
        <div className="cities__places-list places__list tabs__content">
            {offersList.map((item) => (
                <CitiesCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    price={item.price}
                    isPremium={item.isPremium}
                    previewImage={item.previewImage}
                    rating={item.rating}
                />
            ))}
        </div>
    );
}

export { CitiesCardList };