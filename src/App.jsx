import './App.css'
import { MainLayout } from './layout/mainLayout/mainLayout'
import { Card } from "./component/card/card";
import img1 from "./assets/image/image1.png"
import img2 from "./assets/image/image2.png"
import img3 from "./assets/image/image3.png"
import img4 from "./assets/image/image4.png"
import img5 from "./assets/image/image5.png"
export const App = () => {
  return (
    <MainLayout>
      <section className='new_books'>
        <div className="container">
          <h2 className="new_books__title">
            Янги қўшилганлар
          </h2>
          <ul className='new_books__list'>
            <li className='new_books__item'>
              <Card img={img1} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
            <li className='new_books__item'>
              <Card img={img2} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
            <li className='new_books__item'>
              <Card img={img3} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
            <li className='new_books__item'>
              <Card img={img4} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
            <li className='new_books__item'>
              <Card img={img5} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
          </ul>


        </div>
      </section>
      <section className='audio_books'>
        <div className="container">
          <h2 className="audio_books__title">
            Аудио китоблар
          </h2>
          <ul className='audio_books__list'>
            <li className='audio_books__item'>
              <Card img={img1} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
            <li className='audio_books__item'>
              <Card img={img2} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
            <li className='audio_books__item'>
              <Card img={img3} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
            <li className='audio_books__item'>
              <Card img={img4} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
            <li className='audio_books__item'>
              <Card img={img5} name="1984"
                title="SIYOSAT, FANTASTIKA" type="AudioBook" />
            </li>
          </ul>


        </div>
      </section>
    </MainLayout>
  )
}

export default App;