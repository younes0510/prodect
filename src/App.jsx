import products from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

export default () => {
  return (
    <div className="bg-slate-800 text-white">
      <header className=" top-0 -500 text-white shadow-lg z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-6">
          <h1 className="text-3xl font-bold  tracking-wide">MY PHONE</h1>
          <nav>
            <ul className="flex space-x-8">
              <li className=" font-medium ">Products</li>
              <li className=" font-medium ">About</li>
              <li className=" font-medium ">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="  py-12" id="products">
        <div className="grid grid-cols-4 px-6 gap-8">
          {products.map((product) => (
            <div className="bg-white rounded-xl shadow-lg  ">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-6 space-y-4">
                <Name name={product.name} />
                <Price price={product.price} />
                <Description description={product.description} />
                <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-red-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
