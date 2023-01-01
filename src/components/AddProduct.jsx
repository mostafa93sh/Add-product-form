import { Box, Container, Stack } from "@mui/system";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import Addon from "../pages/Addon";
import AddVariant from "../pages/AddVariant";
import CategoryForm from "../pages/CategoryForm";
import MediaForm from "../pages/Media-Form";
import TitleDescriptionForm from "../pages/TitleDescriptionForm";
import VariantChoice from "../pages/VariantChoice";
import YellowButton from "./YellowButton";
import { useDispatch } from "react-redux";
import { setVariantTrue } from "../store/avaliablitySlice";
import PriceForm from "./PriceForm";
import InventoryForm from "./InventoryForm";

import { addProductInfo } from "../store/productSlice";
import { setData } from "../util/apiCalls";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const product = useSelector((state) => state.product.product);
  // const variations = useSelector((state) => state.variations);

  const [haveVariant, setHaveVariant] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categoryAndSub, setCategoryAndSub] = useState([]);
  const [stock, setStock] = useState([]);

  const [addons, setAddons] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [cost, setCost] = useState("");
  const [error, setError] = useState(true);

  // const variationsDetails = useSelector((state) => state.variations);

  // const titleDescHandler = (data)=>{
  //   const {titleData , descData} = data ;
  //   setDesc(descData);
  //   setTitle(titleData)
  // }

  // const catAndSubHandler=(data)=>{
  //   setCategoryAndSub(data)
  // }

  // const priceCostHandler = (data)=>{
  //   const {priceData , salePriceData , costData } = data ;
  //   setPrice(priceData)
  //   setSalePrice(salePriceData)
  //   setCost(costData)
  // }
  const stockInfoHandler = useCallback((data) => {
    setStock((prev) => [data, ...prev]);
  }, []);
  const catSubHandler = useCallback((data) => {
    setCategoryAndSub(data);
  }, []);

  const titleDescHandler = useCallback((data) => {
    const { titleD, descD } = data;
    setTitle(titleD);
    setDesc(descD);
  }, []);
  const priceInfoHandler = useCallback((data) => {
    const [priceD, saleD, costD] = data;
    setPrice(priceD);
    setSalePrice(saleD);
    setCost(costD);
  }, []);
  const attributesInfoHandler = useCallback((data) => {
    setAttributes(data);
  }, []);

  const variantShowHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === true) {
      // const newProduct = {
      //   title,
      //   desc,
      //   categoryAndSub,
      //   addons,

      //   price,
      //   salePrice,
      //   cost,
      // };
      // dispatch(addProductInfo(newProduct));

      setHaveVariant(true);
    } else if (e.target.value === false) {
      setHaveVariant(false);
    }
  };
  const addonsInfohandler = useCallback((data) => {
    setAddons((prev) => [...prev, data]);
    console.log("addons handler");
  }, []);
  // useEffect(()=>{},[])
  useEffect(() => {
    let inputsIsValid =
      title && desc && categoryAndSub && addons && price && salePrice && cost
        ? true
        : false;

    if (inputsIsValid) {
      setError(false);
    } else {
      setError(true);
    }
  }, [title, desc, categoryAndSub, addons, attributes, price, salePrice, cost]);
  const onSaveHandle = async () => {
    console.log("ONSAVE HANDELER");
    const newProduct = {
      title,
      desc,
      categoryAndSub,
      addons,
      price,
      salePrice,
      cost,
    };
    if (!error) {
      if (haveVariant) {
        dispatch(addProductInfo({ ...attributes, ...newProduct }));
        navigate("/add-variant");
        setError(true);
      } else {
        console.log("ONSAVE HANDELER 22");
        //dispatch(addProductInfo(newProduct));
        const dataSent = await setData(...newProduct);
        console.log("TRY SENDING DATA ....");
        console.log(dataSent);
      }
    } else {
      console.log("SOME INPUT IS INVALID");
    }
  };
  return (
    <Fragment>
      <Container maxWidth='md' sx={{ mr: "3rem" }}>
        <Stack spacing={3}>
          <MediaForm />
          <TitleDescriptionForm titleDescHandler={titleDescHandler} />
          <CategoryForm catSubHandler={catSubHandler} />
          <Addon addonsInfohandler={addonsInfohandler} savedAddon={addons} />
          <VariantChoice variantShow={variantShowHandler} />
          {haveVariant && (
            <AddVariant attributesInfoHandler={attributesInfoHandler} />
          )}
          <PriceForm priceInfoHandler={priceInfoHandler} />
          <InventoryForm stockInfoHandler={stockInfoHandler} />

          <Box>
            <YellowButton size={`large`} onClick={onSaveHandle}>
              {haveVariant ? "Next" : "Save"}
            </YellowButton>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default AddProduct;
