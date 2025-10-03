import { createBrowserRouter } from "react-router-dom";
import RBHome from "../pages/RBHome";
import RootLayout from "../layouts/RootLayout";
import RBButtons from "../pages/RBButtons";
import RBBadges from "../pages/RBBadges";
import RBButtonGroups from "../pages/RBButtonGroups";
import RBBreadCrumbs from "../pages/RBBreadCrumbs";
import RBCards from "../pages/RBCards";
import RBListGroup from "../pages/RBListGroup";
import RBImages from "../pages/RBImages";
import RBSpinners from "../pages/RBSpinners";
import RBPrgressBars from "../pages/RBPrgressBars";
import RBFigure from "../pages/RBFigure";
import RBAccordion from "../pages/RBAccordion";
import RBCarousel from "../pages/RBCarousel";
import RBDropdowns from "../pages/RBDropdowns";
import RBModal from "../pages/RBModal";
import RBNavbarOffcanvas from "../pages/RBNabarOffcanvas";
import RBNavTabs from "../pages/RBNavTabs";
import RBOverlays from "../pages/RBOverlays";
import RBForms from "../pages/RBForms";
import RBFormYup from "../pages/RBFormYup";
import RBPagination from "../pages/RBPagination";
import BlogListing from "../pages/blog/BlogListing";
import BlogDetails from "../pages/blog/BlogDetails";
import ContextApi from "../pages/context/ContextApi";
import Products from "../pages/products/Products";
import Wishlist from "../pages/products/Wishlist";

export const DataModeRoutes = createBrowserRouter([
    {
        path: "/", element: <RootLayout />,
        children: [
            { path: "/", element: <RBHome /> },
            { path: "/badge", element: <RBBadges /> },
            { path: "/rb-buttons", element: <RBButtons /> },
            { path: "/rb-button-groups", element: <RBButtonGroups /> },
            { path: "/rb-bread-crumbs", element: <RBBreadCrumbs /> },
            { path: "rb-products", element: <RBCards /> },
            { path: "/rb-list-group", element: <RBListGroup /> },
            { path: "/rb-images", element: <RBImages /> },
            { path: "/rb-progressbars", element: <RBPrgressBars /> },
            { path: "/rb-spinners", element: <RBSpinners /> },
            { path: "/rb-figures", element: <RBFigure /> },
            { path: "/rb-table", element: <RBBadges /> },
            { path: "/rb-accordion", element: <RBAccordion /> },
            { path: "/rb-carousel", element: <RBCarousel /> },
            { path: "/rb-dropdown", element: <RBDropdowns /> },
            { path: "/rb-modal", element: <RBModal /> },
            { path: "/rb-navbar&offcanvas", element: <RBNavbarOffcanvas /> },
            { path: "/rb-navsandtab", element: <RBNavTabs /> },
            { path: "/rb-overlays", element: <RBOverlays /> },
            { path: "/rb-form-hook", element: <RBForms /> },
            { path: "/rb-form-yup", element: <RBFormYup /> },
            { path: "/rb-pagination", element: <RBPagination /> },
            { path: "/blog", element: <BlogListing /> },     
            { path: "/blog/:id" ,element: <BlogDetails /> },
            // { path: "/blog/:id/:slug" ,element: <BlogDetails /> }
            {path: "/context-api", element: <ContextApi /> } ,
            {path: "/products", element: <Products /> } ,
            {path: "/wishlist", element: <Wishlist /> } ,
        ]
    }
]
)