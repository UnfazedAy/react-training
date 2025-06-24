import React from "react";

export default function Footer({ items }) {
  const counterItems = items.length;
  const completedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((completedItems / counterItems) * 100);
  return (
    <div className="footerWrapper">
      {percentage === 100
        ? `Shopping List Completed!`
        : `Total Item: ${counterItems} Completed Item: ${completedItems}`}
    </div>
  );
}
