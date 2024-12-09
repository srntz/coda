import Link from "next/link";

interface INavItemProps {
  title: string;
  active: boolean;
  path?: string;
}

export default function NavItem({ title, active, path = "/" }: INavItemProps) {
  return (
    <Link href={path} replace>
      <div
        id="random-mode-link"
        className={`${active && "selected-nav-item"} transition bg-coda-black-100 hover:bg-coda-blue-300 w-[90%] h-10 flex justify-center items-center rounded`}
      >
        {title}
      </div>
    </Link>
  );
}
