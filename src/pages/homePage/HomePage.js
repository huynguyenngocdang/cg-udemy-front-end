import React from 'react';
import AdImage from "../../components/adImage/adImage";
import Feature1 from "../../components/featureDiv/featureDiv1";
import Feature2 from "../../components/featureDiv/featureDiv2";
import Recommendations from "../../components/recommendations/recommendations";
import FillerDiv from "../../components/fillerDiv/fillerDiv";
import TopCategories from "../../components/topCategories/topCategories";
import BecomeInstructor from "../../components/becomeInstructor/becomeInstructor";
import TrustedCompanies from "../../components/trustedCompanies/trustedCompanies";
import UdemyForBusiness from "../../components/udemyForBusiness/udemyForBusiness";
import VideoAdDiv from "../../components/videoAdDiv/videoAdDiv";

function HomePage() {
    return (
        <div>
            <AdImage/>
            <Feature1/>
            <Recommendations/>
            <Feature2/>
            <FillerDiv/>
            <TopCategories/>
            <BecomeInstructor/>
            <TrustedCompanies/>
            <UdemyForBusiness/>
            <VideoAdDiv/>
        </div>
    );
}

export default HomePage;