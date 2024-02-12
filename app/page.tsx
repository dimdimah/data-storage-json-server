import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center my-5 shadow">
      <Link className="" href="/products">
        See Products
      </Link>
    </div>
  );
}
