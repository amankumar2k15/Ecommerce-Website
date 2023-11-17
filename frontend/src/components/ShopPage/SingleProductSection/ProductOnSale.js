import React from 'react'
import { spfOne, newArrFour, spfThree, spfFour } from "../../../assets/index"

const ProductOnSale = () => {
    const SplOfferData = [
        { img: spfOne, productName: "Cap for Boys", price: "95.00", },
        { img: newArrFour, productName: "Tea Table", price: "180.00", },
        { img: spfThree, productName: "Headphones", price: "30.00", },
        { img: spfFour, productName: "Sun glasses", price: "220.00", },
    ];

    return (
        <div>
            <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
                Products on sale
            </h3>
            <div className="flex flex-col gap-2">
                {SplOfferData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
                    >
                        <div>
                            <img className="w-24" src={item.img} alt={item.img} />
                        </div>
                        <div className="flex flex-col gap-2 font-titleFont">
                            <p className="text-base font-medium">{item.productName}</p>
                            <p className="text-sm font-semibold">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductOnSale