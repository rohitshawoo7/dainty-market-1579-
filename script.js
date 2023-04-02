
async function GetData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await res.json();
      console.log(data);
      AppendData(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  GetData();
  
  function AppendData(data) {
    const container = document.querySelector(".dailyDealsImageCont");
  
    data.map((el) => {
      const singlebox = document.createElement("div");
      const img = document.createElement("img");
      img.src = el.image;
      const price = document.createElement("h4");
      price.textContent = `$${el.price}`;
  
      singlebox.append(img, price);
      container.append(singlebox);
    });
  }
  
  const popular = [
    {
      name: "Jewelry & Watches",
      img: "https://www.transparentpng.com/thumb/watch/yBzv8m-classic-watch-hd-images-.png",
      color: "#F7AF00",
    },
    {
      name: "Beauty",
      img: "https://www.pngmart.com/files/7/Hair-Dryer-Download-PNG-Image.png",
      color: "#FE6B33",
    },
    {
      name: "Computers & Tablets",
      img: "https://www.pngmart.com/files/1/Laptop-PNG-Free-Download.png",
      color: "#AA3209",
    },
    {
      name: "Toys",
      img: "https://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
      color: "#FDCD26",
    },
    {
      name: "Cellphones & Accessories",
      img: "https://www.pngmart.com/files/7/Mobile-Phone-PNG-HD.png",
      color: "#FE6B33",
    },
    {
      name: "Home",
      img: "https://www.pngmart.com/files/8/Kitchen-PNG-Pic-Background.png",
      color: "#B33107",
    },
    {
      name: "Shoes",
      img: "https://www.pngmart.com/files/1/Dock-Shoes-PNG.png",
      color: "#F6AF01",
    },
  ];
  function AppendpopularData(data) {
    const container = document.querySelector(".popularsImageCont");
  
    data.map((el) => {
      const singlebox = document.createElement("div");
      const img = document.createElement("img");
      img.src = el.img;
  
      const box = document.createElement("div");
      box.style = `background-color:${el.color}`;
      const price = document.createElement("h4");
      price.textContent = `${el.name}`;
      box.append(img);
      singlebox.append(box, price);
      container.append(singlebox);
    });
  }
  AppendpopularData(popular);