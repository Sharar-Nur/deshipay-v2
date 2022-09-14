import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeaderOthers from '../components/HeaderOthers';
import Tab from '../components/Tab';
import instantCashback from '../assets/images/instant_cashback.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import arfinThumbnail from '../assets/images/Arfin_thumbnail.png';
import nogodThumbnail from '../assets/images/Nogod_thumbnail.png';
const Offers = () => {
    const [activeTab, setActiveTab] = useState("AllOffers");
    useEffect(() => {
        window.scrollTo(0, -1);
    }, []);
    return (
        <>
            <HeaderOthers title="Offers" />
            <div className="mt-16 mb-10">
                <h1 className="text-[32px] font-medium text-center mb-10">Promotions</h1>
                <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === "AllOffers" &&
                    <div className="grid grid-cols-1 gap-4 px-12 lg:grid-cols-2 lg:gap-x-[30px] lg:gap-y-10">
                        <div className="flex justify-center lg:justify-end">
                            <Link to="/offers/shareTripOne" className="flex flex-col p-5 items-center bg-white rounded-lg box-shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                                <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={instantCashback} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-medium text-title text-width">10% Instant Cashback at ShareTrip</h5>
                                    <div className="group flex items-center space-x-[5px]">
                                        <p className="font-medium text-base text-[#999999] group-hover:text-[#158560]">Explore</p>
                                        <BsArrowRight fill="#999999" className="group-hover:fill-[#158560] mt-0.5" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <Link to="/offers/arfin" className="flex flex-col p-5 items-center bg-white rounded-lg box-shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                                <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={arfinThumbnail} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-medium text-title ">10% Discount on Arfin Voucher</h5>
                                    <div className="group flex items-center space-x-[5px]">
                                        <p className="font-medium text-base text-[#999999] group-hover:text-[#158560]">Explore</p>
                                        <BsArrowRight fill="#999999" className="group-hover:fill-[#158560] mt-0.5" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <Link to="/offers/nagad" className="flex flex-col p-5 items-center bg-white rounded-lg box-shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                                <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={nogodThumbnail} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-medium text-title ">Deshi Add Money from Nagad</h5>
                                    <div className="group flex items-center space-x-[5px]">
                                        <p className="font-medium text-base text-[#999999] group-hover:text-[#158560]">Explore</p>
                                        <BsArrowRight fill="#999999" className="group-hover:fill-[#158560] mt-0.5" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                }
            </div>


            {activeTab === "Cashback" && <div className='text-center'><h3>Cashback coming soon...</h3></div>}
            {activeTab === "Discounts" &&
                <div className="grid grid-cols-1 gap-4 px-12 lg:grid-cols-2 lg:gap-x-[30px] lg:gap-y-10">
                    <div className="flex justify-center  lg:justify-end">
                        <Link to="/offers/arfin" className="flex flex-col p-5 items-center bg-white rounded-lg box-shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                            <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={arfinThumbnail} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-medium text-title ">10% Discount on Arfin Voucher</h5>
                                <div className="group flex items-center space-x-[5px]">
                                    <p className="font-medium text-base text-[#999999] group-hover:text-[#158560]">Explore</p>
                                    <BsArrowRight fill="#999999" className="group-hover:fill-[#158560] mt-0.5" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <Link to="/offers/nagad" className="flex flex-col p-5 items-center bg-white rounded-lg box-shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                            <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={nogodThumbnail} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-medium text-title ">Deshi Add Money from Nagad</h5>
                                <div className="group flex items-center space-x-[5px]">
                                    <p className="font-medium text-base text-[#999999] group-hover:text-[#158560]">Explore</p>
                                    <BsArrowRight fill="#999999" className="group-hover:fill-[#158560] mt-0.5" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            }
            {activeTab === "ReferBonus" && <div className='text-center'><h3>Refer Bonus coming soon...</h3></div>}
            {activeTab === "GetPoints" && <div className='text-center'><h3>Get Points coming soon...</h3></div>}


            <div>
                <Footer />
            </div>
            <style>
                {`
                    @media screen and (min-width: 542px) and (max-width: 768px) {
                        .text-width{
                        width: 373.25px;
                        }
                    `}
            </style>
        </>
    );
};

export default Offers;