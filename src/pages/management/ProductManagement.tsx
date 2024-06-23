import { ChangeEvent, FormEvent, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvP-SlcSH3njZfK2K7VGUebWblS4W-eJ4Aw&s"

const ProductManagement = () => {
  // interface ProductType{
  //   name: string;
  //   price: number;
  //   stock: number;
  //   photo: string;
  // }
  // const [ product, setProduct ] = useState<ProductType>({name: "", price: 0, stock: 0, photo: ""})
  const [ name, setName ] = useState<string>("Puma Shoes");
  const [ price, setPrice ] = useState<number>(2000);
  const [ stock, setStock ] = useState<number>(10);
  const [ photo, setPhoto ] = useState<string>(img);

  const [ nameUpdate, setNameUpdate ] = useState<string>(name);
  const [ priceUpdate, setPriceUpdate ] = useState<number>(price);
  const [ stockUpdate, setStockUpdate ] = useState<number>(stock);
  const [ photoUpdate, setPhotoUpdate ] = useState<string>(photo);

  // const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>): void=>{
  //   setProduct({
  //     ...product,
  //     [e.target.name]: e.target.value
  //   });
  // }

  const changeImageHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const file:File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if( file ){
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if( typeof reader.result === "string" ) setPhotoUpdate(reader.result);
      };
    }
  }

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar/>
      {/* Main */}
      <main className="product-management">
        <section>
          <strong>ID - Aadds</strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {
            stock>0 ? (
              <span className='green'>{stock} Available</span>
            ) : (
              <span className='red'>Not Available</span>
            )
          }
          <h3>${price}</h3>
        </section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                required
                type="text"
                placeholder='Name'
                value={nameUpdate}
                // name = 'name'
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                required
                type="number"
                placeholder='Price'
                value={priceUpdate}
                // name = 'price'
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="">Stock</label>
              <input
                required
                type="number"
                placeholder='Stock'
                value={stockUpdate}
                // name = 'stock'
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="">Photo</label>
              <input
                required
                type="file"
                // name = 'photo'
                onChange={changeImageHandler}
              />
            </div>
            {photo && <img src={photoUpdate} alt="New Image" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  )
}

export default ProductManagement