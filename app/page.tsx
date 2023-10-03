import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Link className="p-4" href="/products">
        See Products
      </Link>
    </div>
  );
}
