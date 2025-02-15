import { Header } from "../header/header";
import { Footer } from "../footer/footer";
export const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <header>
                    <Header />
                </header>
                <main>{children}</main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
};