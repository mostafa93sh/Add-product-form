export const getData = async () => {
  try {
    const responce = await fetch("http://localhost:5001/product");
    const data = await responce.json();

    return data;
    // if (responce.ok) {
    //   console.log(responce.json());
    // } else {
    //   console.log("SOME THING WENT WRONG");
    // }
  } catch (error) {
    console.log(error);
  }
};

export const setData = async (data) => {
  try {
    const responce = await fetch("http://localhost:5001/product", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (responce.ok) {
      const data = await responce.json();
      console.log(data);
    } else {
      console.log("SOME THING WENT WRONG");
    }
  } catch (err) {
    console.log(err);
  }
};
