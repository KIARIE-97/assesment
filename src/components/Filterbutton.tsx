
import type { FilterType } from "../types/dataT";

interface FilterTagsProps {
	filters: FilterType;
	onFilterChange: (tag: string) => void;
	selectedFilters: FilterType;
}
export default function FilterTags({
	filters,
	onFilterChange,
	selectedFilters,
}: FilterTagsProps) {
	return (
		<div className="flex flex-wrap gap-2">
			{[...filters].map((tag) => (
				<button
					key={tag}
					onClick={() => onFilterChange(tag)}
					className={`px-3 py-1 rounded-md text-sm font-medium ${
						selectedFilters.has(tag)
							? "bg-red-500 text-white"
							: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
					}`}
				>
					{tag}
				</button>
			))}
		</div>
	);
}
