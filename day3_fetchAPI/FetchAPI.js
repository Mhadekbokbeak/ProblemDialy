const endpoints = [
  "https://api.shop-a.com/item/1",
  "https://api.shop-b.com/item/1",
  "https://api.shop-c.com/item/1",
];

async function fetchProductPrices(endpoints) {
  if (!endpoints || endpoints.length === 0) {
    return [];
  }

  const pormises = endpoints.map(async (url) => {
    try {
      const res = await fetch(url);

      // Check that url is ok!
      if (!res.ok) {
        return { url, price: null, status: "failed" };
      }

      // แปลงข้อมูลที่เป็น url object เป็น json เพื่อให้อ่านง่ายขึ้น
      const data = await res.json();
      return { url, price: data.price, status: "success" };
    } catch (error) {
      console.log(`HTTP URL Error! ${url} : cuz`, error.message);
      return { url, price: null, status: "failed" };
    }
  });

  // wait api work done (Parallel)
  const results = await Promise.all(pormises);
  return results
}
