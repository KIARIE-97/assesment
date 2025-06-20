import JobCard from "./Jobcard";
import type { Tdata, FilterType } from "../types/dataT";

interface JobListProps {
	jobs: Tdata[];
	filter: FilterType;
	onTagClick: (tag: string) => void;
}

export default function JobList({ jobs, filter, onTagClick }: JobListProps) {
	const filteredJobs = jobs.filter((job) => {
		if (filter.size === 0) return true;

		const tags = [
			job.role,
			job.level,
			...(job.languages || []),
			...(job.tools || []),
		];

		return [...filter].every((filter) => tags.includes(filter));
	});

	if (filteredJobs.length === 0) {
		return (
			<div className="text-center py-10 text-gray-500 dark:text-gray-400">
				No matching job listings found.
			</div>
		);
	}

	return (
		<div className="grid gap-4">
			{filteredJobs.map((job) => (
				<JobCard key={job.id} job={job} onTagClick={onTagClick} />
			))}
		</div>
	);
}
