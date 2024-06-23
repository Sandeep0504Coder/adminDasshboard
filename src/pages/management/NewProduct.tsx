import { ChangeEvent, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const NewProduct = () => {
  // interface ProductType{
  //   name: string;
  //   price: number;
  //   stock: number;
  //   photo: string;
  // }
  // const [ product, setProduct ] = useState<ProductType>({name: "", price: 0, stock: 0, photo: ""})
  const [ name, setName ] = useState<string>("");
  const [ price, setPrice ] = useState<number>();
  const [ stock, setStock ] = useState<number>();
  const [ photo, setPhoto ] = useState<string>();

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
        if( typeof reader.result === "string" ) setPhoto(reader.result);
      };
    }
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar/>
      {/* Main */}
      <main className="product-management">
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                required
                type="text"
                placeholder='Name'
                value={name}
                // name = 'name'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                required
                type="number"
                placeholder='Price'
                value={price}
                // name = 'price'
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="">Stock</label>
              <input
                required
                type="number"
                placeholder='Stock'
                value={stock}
                // name = 'stock'
                onChange={(e) => setStock(Number(e.target.value))}
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
            {photo && <img src={photo} alt="New Image" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  )
}

export default NewProduct