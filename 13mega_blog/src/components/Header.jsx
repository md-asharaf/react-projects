import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Container, Button } from "./index";
import { logout } from "../store/index";
import { authService } from "../appwrite/index";
function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const onClickHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };
    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="py-3 shadow-2xl bg-[#19191C] text-white">
            <Container>
                <nav className="mr-4 absolute">
                    <Link to="/">
                        <Logo width="50px" />
                    </Link>
                </nav>
                <ul className="flex place-content-center gap-28">
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                    className="inline-bock px-6 py-2 duration-200 hover:bg-white hover:text-black rounded-full"
                                    onClick={() => navigate(item.slug)}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ) : null
                    )}
                    {authStatus && (
                        <li>
                            <Button
                                className="absolute right-20 className='inline-bock px-6 py-2 duration-200 bg-pink-600 rounded-full'"
                                onClickHandler={onClickHandler}
                            >
                                Log Out
                            </Button>
                        </li>
                    )}
                </ul>
            </Container>
        </header>
    );
}

export default Header;
