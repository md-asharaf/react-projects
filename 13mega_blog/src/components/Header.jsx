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
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="py-3 shadow bg-gray-500">
            <Container>
                <div className="flex">
                    <nav className="mr-4">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </nav>
                </div>
                <ul className="flex place-content-center gap-20 ">
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
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
                                className="className='inline-bock px-6 py-2 duration-200 bg-pink-500 rounded-full'"
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
