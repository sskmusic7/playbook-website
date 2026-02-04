import { nftCategories } from "@/data/footerLinks";
import { Link } from "react-router-dom";

export default function MarketplaceLinks() {
  return (
    <>
      {nftCategories.map((elm, i) => (
        <li key={i}>
          <Link
            to={elm.href}
            className="hover:text-accent dark:hover:text-white"
          >
            {elm.name}
          </Link>
        </li>
      ))}
    </>
  );
}
