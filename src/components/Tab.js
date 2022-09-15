import React from 'react';
import $ from "jquery";


const Tab = ({ activeTab, setActiveTab }) => {


    const tabChangeHandler = (value) => {
        $("#tab-options").val(value);
        setActiveTab(value);
    };


    return (
        <div className="mb-[60px] text-center">
            {/* Mobile view */}
            <div className="sm:hidden relative w-11/12 mx-auto rounded">
                <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>

                <select aria-label="Selected tab" id="tab-options" defaultValue={activeTab} onChange={(e) => tabChangeHandler(e.target.value)} className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                    <option className="text-sm text-gray-600" value="AllOffers">All Offers</option>
                    <option className="text-sm text-gray-600" value="Cashback">Cashback </option>
                    <option className="text-sm text-gray-600" value="Discounts">Discounts</option>
                    <option className="text-sm text-gray-600" value="ReferBonus">Refer Bonus </option>
                    <option className="text-sm text-gray-600" value="GetPoints">Get Points </option>
                </select>

            </div>

            {/* Desktop view */}

            <div className="hidden sm:block bg-white">
                <div className="xl:w-full xl:mx-0 h-12">
                    <ul className="flex justify-center px-7 selected-tab list-none">
                        <li onClick={() => tabChangeHandler("AllOffers")} className={activeTab === "AllOffers" ? "text-xl font-medium text-brand flex flex-col justify-between pt-3 mr-10" : "text-title py-3 mr-10 font-medium"}>
                            <span className="mb-3 cursor-pointer">All Offers</span>
                            {activeTab === "AllOffers" && <div className="w-full h-0.5 bg-brand " />}
                        </li>
                        <li onClick={() => tabChangeHandler("Cashback")} className={activeTab === "Cashback" ? "text-xl font-medium text-brand flex flex-col justify-between pt-3 mr-10" : " text-title py-3 mr-10 font-medium"}>
                            <span className="mb-3 cursor-pointer">Cashback</span>
                            {activeTab === "Cashback" && <div className="w-full h-0.5 bg-brand" />}
                        </li>
                        <li onClick={() => tabChangeHandler("Discounts")} className={activeTab === "Discounts" ? "text-xl font-medium text-brand flex flex-col justify-between pt-3 mr-10" : "text-title py-3 mr-10 font-medium"}>
                            <span className="mb-3 cursor-pointer">Discounts</span>
                            {activeTab === "Discounts" && <div className="w-full h-0.5 bg-brand" />}
                        </li>
                        <li onClick={() => tabChangeHandler("ReferBonus")} className={activeTab === "ReferBonus" ? "text-xl font-medium text-brand flex flex-col justify-between pt-3 mr-10" : "text-title py-3 mr-10 font-medium"}>
                            <span className="mb-3 cursor-pointer">Refer Bonus</span>
                            {activeTab === "ReferBonus" && <div className="w-full h-0.5 bg-brand" />}
                        </li>
                        <li onClick={() => tabChangeHandler("GetPoints")} className={activeTab === "GetPoints" ? "text-xl font-medium text-brand flex flex-col justify-between pt-3" : "text-title py-3 font-medium"}>
                            <span className="mb-3 cursor-pointer">Get Points</span>
                            {activeTab === "GetPoints" && <div className="w-full h-0.5 bg-brand" />}
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Tab;