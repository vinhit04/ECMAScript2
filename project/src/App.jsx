import Header from './components/Header'
import Footer from './components/Footer';
import TourCard from './components/TourCard';
import Banner from './components/Banner';
import Button from './components/Button';
function App() {
    const tours = [
        {
            id: 1,
            title: 'Tour du lich Bac Kinh - Thuong Hai - Thanh Do xem CKTG giua T1 - KT Rolster gia 20 trieu bao gom ca ve xem hang A',
            image: 'https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1759371709.jpg&w=640&q=75'
        },
        {
            id: 2,
            title: 'Tour du lich Bac Kinh - Thuong Hai - Thanh Do xem CKTG giua T1 - KT Rolster gia 20 trieu bao gom ca ve xem hang A',
            image: 'https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1759371709.jpg&w=640&q=75'
        },
        {
            id: 3,
            title: 'Tour du lich Bac Kinh - Thuong Hai - Thanh Do xem CKTG giua T1 - KT Rolster gia 20 trieu bao gom ca ve xem hang A',
            image: 'https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1759371709.jpg&w=640&q=75'
        },
        {
            id: 4,
            title: 'Tour du lich Bac Kinh - Thuong Hai - Thanh Do xem CKTG giua T1 - KT Rolster gia 20 trieu bao gom ca ve xem hang A',
            image: 'https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1759371709.jpg&w=640&q=75'
        }
    ]
    // JSX : HTML + JS nam trong return boc trong 1 the bat ky <></>
    return (
        <div className="App">
            <Header />
            {/* <Banner /> */}
            <h1 className="text-3xl font-bold text-blue-600 text-center my-4">
                Danh sach tour du lich noi bat
            </h1>
            <h2 className="uppercase text-center text-2xl font-semibold">
                Kham pha san pham vietravel
            </h2>
            <p className="text-md font-medium text-center">
                Tan huong trai nghiem du lich tuyet voi cung Vietravel tren moi neo duong di . 
                Mang lai cho ban nhung giac nghi tuyet voi va nhung ky niem khong the nao quen. Giup ban kham 
                pha the gioi mot cach tron ven nhat.
            </p>
            <div className="flex gap-2 my-4">
                {tours.map(tour =>(
                    <TourCard key={tour.id} image={tour.image} title={tour.title} />
                ))}
            </div>
            <Footer/>
            </div>
    );
}

export default App
