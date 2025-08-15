import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import truncateText from "../../utils/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast";

const ProductCard = ({
  productId,
  productName,
  image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
  about = false,
}) => {
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const btnLoader = false;
  const [selectedViewProduct, setSelectedViewProduct] = useState("");
  const isAvailable = quantity && Number(quantity) > 0;
  const dispatch = useDispatch();
    
  const handleProductView = (product) => {
    if (!about) {
      setSelectedViewProduct(product);
      setOpenProductViewModal(true);
    }
  };

  const addToCartHandler = (cartItems) => {
    dispatch(addToCart(cartItems, 1, toast));
  };

  return (
    <div className="border border-[#1c1c1e] bg-[#0f0f10] rounded-xl shadow-lg shadow-[#1f1f2e] hover:shadow-xl hover:shadow-amber-400/10 transition-shadow duration-300 overflow-hidden">
      <div
        onClick={() => {
          handleProductView({
            id: productId,
            productName,
            image,
            description,
            quantity,
            price,
            discount,
            specialPrice,
          });
        }}
        className="w-full overflow-hidden aspect-3/2"
      >
        <img
          className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
          src={image}
          alt={productName}
        />
      </div>
      <div className="p-4 text-white">
        <h2
          onClick={() => {
            handleProductView({
              id: productId,
              productName,
              image,
              description,
              quantity,
              price,
              discount,
              specialPrice,
            });
          }}
          className="text-lg font-semibold mb-2 cursor-pointer hover:text-amber-300 transition-colors duration-200"
        >
          {truncateText(productName, 50)}
        </h2>

        <div className="min-h-20 max-h-20 mb-2">
          <p className="text-gray-400 text-sm">
            {truncateText(description, 80)}
          </p>
        </div>

        {!about && (
          <div className="flex items-center justify-between mt-2">
            {specialPrice ? (
              <div className="flex flex-col">
                <span className="text-gray-500 line-through text-sm">
                  ${Number(price).toFixed(2)}
                </span>
                <span className="text-xl font-bold text-amber-300">
                  ${Number(specialPrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-amber-300">
                ${Number(price).toFixed(2)}
              </span>
            )}

            <button
              disabled={!isAvailable || btnLoader}
              onClick={() =>
                addToCartHandler({
                  image,
                  productName,
                  description,
                  specialPrice,
                  price,
                  productId,
                  quantity,
                })
              }
              className={`${
                isAvailable
                  ? "bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-500"
                  : "bg-gray-600"
              } text-black font-semibold py-2 px-3 rounded-xl shadow-md shadow-yellow-400/30 hover:shadow-yellow-300/50 transition-all duration-300 w-36 flex justify-center items-center text-sm 
              ${!isAvailable || btnLoader ? "opacity-70 cursor-not-allowed" : ""}`}>
              <FaShoppingCart className="mr-2" />
              {isAvailable ? "Add to Cart" : "Stock Out"}
            </button>
          </div>
        )}
      </div>

      <ProductViewModal
        open={openProductViewModal}
        setOpen={setOpenProductViewModal}
        product={selectedViewProduct}
        isAvailable={isAvailable}
      />
    </div>
  );
};

export default ProductCard;
