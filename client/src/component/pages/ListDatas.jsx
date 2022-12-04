import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import React from "react";
import ProductDetails from "../productDetails/ProductDetails";
import ImgModal from "../productDetails/ImgModal/ImgModal";
export default function DisplayItems() {
    const { id } = useParams();
    const { ItemId } = useParams();
    const [Datasets, setDatasets] = useState([]);
    const [selectedList, setSelectedList] = useState([]);
    const [selectedItemList, setSelectedItemList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    let [customerModal, setCustomerModal] = useState(false);
    let [customerImgIndex, setCustomerImgIndex] = useState(0);

    let openCustomerModal = (index) => {
        setCustomerImgIndex(index);
        console.log("Open modal");
        setCustomerModal(true);
    };
    let closeCustomerModal = () => {
        setCustomerModal(false);
    };
    useEffect(() => {
        axios.get("/Datas_Carousel").then(function (response) {
            setDatasets(response.data);
        });
        Datasets.map(Datas => {
            if (Datas._id === id) {
                setSelectedList(Datas);
            }
        });
        setSelectedItemList(selectedList.datas)
        if (selectedItemList) {
            selectedItemList.map(Datas => {
                if (Datas._id === ItemId) {
                    setSelectedItems(Datas);
                }
            })
        }
    }, [Datasets]);
    return (
        <div>
            <div>
                <ProductDetails openCustomerModal={openCustomerModal} datasets = {selectedItems}/>
                <ImgModal
                    customerImgIndex={customerImgIndex}
                    openCustomerModal={openCustomerModal}
                    customerModal={customerModal}
                    closeCustomerModal={closeCustomerModal}
                />
            </div>
        </div>
    );
}