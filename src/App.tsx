import { useState } from "react";
import JobList from "./components/Joblist";
import jobsData  from "../public/data.json"; // Assume your jobs are stored here
import type { Tdata, FilterType } from "./types/dataT";
import FilterTags from "./components/Filterbutton";

function App() {
	const [jobs, ] = useState<Tdata[]>(jobsData);
  const [selectedFilters, setSelectedFilters] = useState<FilterType>(new Set());


  const allTags = new Set<string>();
	jobs.forEach((job) => {
		allTags.add(job.role);
		allTags.add(job.level);
		job.languages?.forEach((lang) => allTags.add(lang));
		job.tools?.forEach((tool) => allTags.add(tool));
	});

	const handleFilterChange = (tag: string) => {
		setSelectedFilters((prev) => {
			const newFilters = new Set(prev);
			newFilters.has(tag) ? newFilters.delete(tag) : newFilters.add(tag);
			return newFilters;
		});
	};
	//tag click handler for filtering by skill/tag
	const handleTagClick = (tag: string) => {
		console.log("Filter by tag:", tag);
		
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-6 py-6">
				<div className="mb-6">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
							Job Listings
						</h2>
						<FilterTags
							filters={allTags}
							onFilterChange={handleFilterChange}
							selectedFilters={selectedFilters}
						/>
					</div>
				</div>
				<JobList
					jobs={jobs}
					filter={selectedFilters}
					onTagClick={handleTagClick}
				/>
			</div>
		</div>
	);
}

export default App;
