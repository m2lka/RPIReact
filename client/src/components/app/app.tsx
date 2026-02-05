import { MainPage } from "../../pages/main-page/main-page.tsx";
import { AppRoute } from "../../conts.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../not-found/not-found.tsx";
import { LoginPage } from "../../pages/login-page/login-page.tsx";
import { AuthorizationStatus } from "../../conts.ts";
import { PrivateRoute } from "../private-route/private-route.tsx";
import { FavoritesPages } from "../../pages/favorites-page/favorites-page.tsx";
import type { FullOffer } from "../../types/offers.ts";
import type { OffersList } from "../../types/offers.ts";
import { OfferPage } from "../../pages/offer-page/offer-page.tsx";

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
}
function App({ rentalOffersCount, offers, offersList }: AppMainPageProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main}
                    element={<MainPage rentalOffersCount={rentalOffersCount}
                        offersList={offersList} />} />
                <Route path={AppRoute.Login} element={<LoginPage />} />

                <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} />} />
                <Route path="*" element={<NotFound />} />
                <Route path={AppRoute.Favorites} element={
                    <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                        <FavoritesPages offersList={offersList} />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export { App };