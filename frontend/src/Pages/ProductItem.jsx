import { Box, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { userData } = useSelector((store) => store.AuthReducer);
  const toast = useToast();

  const handleClick = () => {
    navigate(`/singleproduct/${item._id}`, { replace: true });
  };

  const handleAddToWishlist = () => {
    setToggle(!toggle);

    axios
      .post(
        "https://fashionclub.onrender.com/wishlist/add",
        { productId: item._id },
        {
          headers: {
            authorization: `bearer ${userData.token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        toast({
          title: "Product added to wishlist success full.",
          description: "We've added your product.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((er) => {
        // console.log(er);
        toast({
          title: "Product is already present.",
          description: "Failed to add wishlist",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <Box cursor="pointer" backgroundColor="gray.50">
      <Box>
        <Image
          position="relative"
          src={item.image[0]}
          onMouseEnter={(e) => (e.target.src = `${item.image[1]}`)}
          onMouseLeave={(e) => (e.target.src = `${item.image[0]}`)}
          transition="ease-in-out"
          objectFit="contain"
          onClick={handleClick}
        />
        {toggle ? (
          <AiFillHeart size="1.3rem" />
        ) : (
          <AiOutlineHeart onClick={handleAddToWishlist} size="1.3rem" />
        )}
      </Box>

      <Box onClick={handleClick} p="1rem">
        <Text fontWeight="bold">{item.name}</Text>
        <Text fontSize="0.9rem" fontWeight="400">
          {item.title}
        </Text>
      </Box>

      <Text p="0.8rem 1rem">{`$${item.prize}`}</Text>
    </Box>
  );
};

export default ProductItem;
