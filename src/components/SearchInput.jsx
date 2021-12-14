import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    let q = query(itemsCollection);
    getDocs(q).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (searchTitle) => {
    const itemSearch = products.filter(
      (option) => option.title === searchTitle
    );
    const itemSearchId = itemSearch[0].id;
    navigate(`/item/${itemSearchId}`);
  };
  return (
    <Stack sx={{ width: 180 }}>
      <Autocomplete
        onChange={(event, searchTitle) => {
          handleSubmit(searchTitle);
        }}
        freeSolo
        id="free-solo-2-demo"
        size="small"
        sx={{
          display: "inline-block",
          "& input": {
            borderRadius: 1,
            bgcolor: "background.paper",
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        disableClearable
        options={products.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search items"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}
