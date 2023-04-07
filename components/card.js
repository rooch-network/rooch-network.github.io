import Link from "next/link";

export default function Card({ title, description, link = "#" }) {
  return (
    <Link href={link}>
      <div class="max-w-sm rounded-lg overflow-hidden m-2 shadow-xl border-1 hover:shadow-sm duration-200">
        <div class="px-6 py-6">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
}
