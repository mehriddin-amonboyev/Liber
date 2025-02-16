import { MainLayout } from './layout/mainLayout/mainLayout'
import { ProductCard } from "./component/card/card";
import { productData } from './data/productData';
export const App = () => {
  return (
    <MainLayout>
      <section className='pt-[64px]'>
        <div className='container'>
          <h1 className='text-[32px] font-semibold'>Янги қўшилганлар</h1>
          <div className='mt-[24px] flex gap-[24px]'>
            {productData.map((item) =>
              item.status === "new" && (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  type={item.type}
                />
              )
            )}
          </div>
        </div>
      </section>
      <section className='pt-[64px] pb-[93px]'>
        <div className='container'>
          <h1 className='text-[32px] font-semibold'>Аудио китоблар</h1>
          <div className='mt-[24px] flex gap-[24px]'>
            {productData.map((item) =>
              !item.type.includes("pdf") && (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  type={item.type}
                />
              )
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  )

}

export default App;