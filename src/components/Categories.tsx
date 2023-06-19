import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 w-52 mx-auto pb-2">
        Categories
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-between my-12">
        {categories.map(category => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`cursor-pointer bg-slate-600 p-2 m-2 rounded-lg text-white hover:text-white hover:bg-sky-500 ${
              category === selected && 'text-white bg-sky-500'
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
