import { Link, useNavigate } from "react-router-dom";

function DropdownMenu({ category }) {
  const menuItems = {
    Men: {
      Shoes: [
        "Running Shoes",
        "Sport Shoes",
        "Slides",
        "Sneakers",
        "Gym & Training",
      ],
      Clothing: ["T-Shirts", "Joggers", "Sweatshirts"],
      Accessories: ["Caps", "Bags", "Socks"],
      Sport: ["Basketball", "Football", "Tennis"],
      Brands: ["Nike", "Adidas", "Puma", "Reebok"],
    },
    Women: {
      Shoes: ["Running Shoes", "Heels", "Flats", "Sneakers", "Gym & Training"],
      Clothing: ["T-Shirts", "Leggings", "Dresses", "Sweatshirts"],
      Accessories: ["Bags", "Scarves", "Jewelry"],
      Sport: ["Yoga", "Tennis", "Running"],
      Brands: ["Nike", "Adidas", "Under Armour"],
    },
    Kids: {
      Shoes: ["Sneakers", "Sandals", "Boots"],
      "Boys Clothing": ["T-Shirts", "Shorts", "Hoodies"],
      "Girls Clothing": ["Dresses", "Leggings", "Jackets"],
      "Back to School": ["Backpacks", "Lunch Boxes", "School Shoes"],
    },
  };

  return (
    <div className="fixed left-0 top-[4.7rem] w-full bg-white shadow-lg p-6 max-h-screen overflow-auto">
      <div className="flex items-center justify-around gap-6 mt-4">
        {Object.entries(menuItems[category] || {}).map(([heading, items]) => (
          <div key={heading}>
            <h4 className="bold mb-2">{heading}</h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <Link
                    to={`/products/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:underline text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
