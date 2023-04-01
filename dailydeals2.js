const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await res.json();
      console.log(data);
      AppendData(data);
    } catch (error) {
      console.log(error);
    }
  };
  getData();
  
  const AppendData = (data) => {
    const container = document.querySelector(".containerImages");
  
    data.map((el) => {
      const box = document.createElement("div");
  
      const img = document.createElement("img");
      img.src = el.image;
      const price = document.createElement("h1");
      price.textContent = el.price;
  
      box.append(img, price);
  
      container.append(box);
    });
  };