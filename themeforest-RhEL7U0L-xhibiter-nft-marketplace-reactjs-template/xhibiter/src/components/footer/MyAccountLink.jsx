import { links } from "@/data/footerLinks";
import { Link } from "react-router-dom";

export default function MyAccountKink() {
  return (
    <>
      {links.map((elm, i) => (
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
