import React from "react";
import Link from "next/link";

// Définition du type pour chaque "miette"
interface Crumb {
  href?: string;
  title: string;
}

// Définition du type pour les props du composant Breadcrumbs
interface BreadcrumbsProps {
  crumbs: Crumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  if (!crumbs.length) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="flex justify-center items-center">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        {crumbs.map((crumb, i) => (
          <li
            key={crumb.title}
            className={`px-2 ${
              i === crumbs.length - 1
                ? "text-gray-500"
                : "text-indigo-600 hover:text-indigo-800"
            }`}
          >
            {crumb.href ? (
              <Link
                className="text-blue-600 hover:text-blue-800"
                href={crumb.href}
              >
                {crumb.title}
              </Link>
            ) : (
              <span className="text-gray-500" aria-current="page">
                {crumb.title}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
