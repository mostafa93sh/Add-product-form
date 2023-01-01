import {
  CardContent,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import FormCard from "../components/FormCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import MediaForm from "./Media-Form";
import YellowButton from "../components/YellowButton";
import { useDispatch, useSelector } from "react-redux";

import { setData } from "../util/apiCalls";
import { clearProductInfo } from "../store/productSlice";

const VariantDetails = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [cost, setCost] = useState("");

  const [loc1, setLoc1] = useState("");
  const [loc2, setLoc2] = useState("");
  const [loc3, setLoc3] = useState("");
  const [loc4, setLoc4] = useState("");
  const [loc5, setLoc5] = useState("");

  // onBlur={()=>setTouched(true)}

  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(true);
  // const varData = useSelector((state) => state.variations);

  useEffect(() => {
    if (size && color && sku && price && salePrice && cost && touched) {
      setError(false);
      console.log("ERROR IS TRUE NOW");
      return;
    } else {
      console.log("ERROR IS FALSE NOW");
      setError(true);
    }
  }, [size, color, sku, price, salePrice, cost, touched]);
  // useEffect(() => {
  //   console.log(varData);
  // });

  const onFinishHandler = async () => {
    const avaliableStock = [loc1, loc2, loc3, loc4, loc5].filter(
      (item) => item !== ""
    );
    const varaitionDetail = {
      cost,
      price,
      salePrice,
      sku,
      variationString: `${color}_${size}`,
      stock: avaliableStock,
    };
    if (!error) {
      const dataReady = await setData({ ...product, ...varaitionDetail });
      dispatch(clearProductInfo());
      navigate("/add-product");

      // dispatch(addVaritionsInfo({ product, varaitionDetail }));
    } else {
      console.log("SOME INPUT INVALID");
    }
  };

  return (
    <Container maxWidth='md' sx={{ mr: "3rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: "15px",
        }}>
        <Link to={`/add-product`}>
          <ArrowBackIcon />
        </Link>
        <Typography variant='h5' sx={{ ml: "15px" }}>
          Add Variants
        </Typography>
      </Box>

      <FormCard>
        <CardContent>
          <Grid container spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant='subtitle1'>Size</Typography>
                <Select
                  fullWidth
                  size={`small`}
                  onBlur={() => setTouched(true)}
                  onChange={(e) => setSize(e.target.value)}>
                  <MenuItem value='small'>XXL</MenuItem>
                  <MenuItem value='medium'>XL</MenuItem>
                  <MenuItem value='large'>L</MenuItem>
                  <MenuItem value='xlarge'>M</MenuItem>
                  <MenuItem value='xlarge'>S</MenuItem>
                  <MenuItem value='xlarge'>XS</MenuItem>
                  <MenuItem value='xlarge'>XXS</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='subtitle1'>Color</Typography>
                <Select
                  fullWidth
                  size={`small`}
                  onBlur={() => setTouched(true)}
                  onChange={(e) => setColor(e.target.value)}>
                  <MenuItem value='red'>off white</MenuItem>
                  <MenuItem value='yellow'>black</MenuItem>
                  <MenuItem value='blue'>blue</MenuItem>
                  <MenuItem value='orange'>red</MenuItem>
                  <MenuItem value='orange'>white</MenuItem>
                  <MenuItem value='orange'>pink</MenuItem>
                  <MenuItem value='orange'>yellow</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item container my={2}>
              <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                Variant M , red
              </Typography>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <MediaForm />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>SKU (Stack Keeping Unit)</InputLabel>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  onBlur={() => setTouched(true)}
                  onChange={(e) => setSku(e.target.value)}
                />

                <InputLabel>Price</InputLabel>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  onBlur={() => setTouched(true)}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <InputLabel>Sale price</InputLabel>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  onBlur={() => setTouched(true)}
                  onChange={(e) => setSalePrice(e.target.value)}
                />

                <InputLabel>Cost per item</InputLabel>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  onBlur={() => setTouched(true)}
                  onChange={(e) => setCost(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant={`h6`}>Inventory</Typography>
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Location 1 </InputLabel>
              <TextField
                variant='outlined'
                size='small'
                fullWidth
                onBlur={() => setTouched(true)}
                onChange={(e) => setLoc1(e.target.value)}
              />

              <InputLabel>Location 2 </InputLabel>
              <TextField
                variant='outlined'
                size='small'
                fullWidth
                onBlur={() => setTouched(true)}
                onChange={(e) => setLoc2(e.target.value)}
              />

              <InputLabel>Location 3 </InputLabel>
              <TextField
                variant='outlined'
                size='small'
                fullWidth
                onBlur={() => setTouched(true)}
                onChange={(e) => setLoc3(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Location 4</InputLabel>
              <TextField
                variant='outlined'
                size='small'
                fullWidth
                onBlur={() => setTouched(true)}
                onChange={(e) => setLoc4(e.target.value)}
              />

              <InputLabel>Location 5</InputLabel>
              <TextField
                variant='outlined'
                size='small'
                fullWidth
                onBlur={() => setTouched(true)}
                onChange={(e) => setLoc5(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
              <YellowButton size={`small`} onClick={onFinishHandler}>
                Finish
              </YellowButton>
            </Grid>
          </Grid>
        </CardContent>
      </FormCard>
    </Container>
  );
};

export default React.memo(VariantDetails);
