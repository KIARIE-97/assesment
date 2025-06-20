import React from "react";
import type { Tdata } from "../types/dataT";


interface JobCardProps {
	job: Tdata;
	onTagClick: (tag: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onTagClick }) => {
	const tags = [job.role, job.level, ...job.languages, ...job.tools];

	return (
		<div
			className={`bg-white shadow-md p-6 rounded-md flex flex-col md:flex-row items-center justify-between gap-4 border-l-4 ${
				job.featured ? "border-teal-500" : "border-transparent"
			}`}
		>
			<div className="flex items-center gap-4">
				<img
					src={job.logo}
					alt={job.company}
					className="w-12 h-12 md:w-16 md:h-16"
				/>
				<div>
					<div className="flex items-center gap-2">
						<h3 className="text-teal-600 font-bold">{job.company}</h3>
						{job.new && (
							<span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full uppercase">
								New!
							</span>
						)}
						{job.featured && (
							<span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full uppercase">
								Featured
							</span>
						)}
					</div>
					<h2 className="font-bold text-lg">{job.position}</h2>
					<div className="text-gray-500 text-sm">
						{job.postedAt} • {job.contract} • {job.location}
					</div>
				</div>
			</div>
            <div>
                {}
            </div>

			<div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:ml-auto">
				{tags.map((tag) => (
					<button
						key={tag}
						onClick={() => onTagClick(tag)}
						className="bg-teal-100 text-teal-600 font-bold px-2 py-1 rounded hover:bg-teal-600 hover:text-white transition"
					>
						{tag}
					</button>
				))}
			</div>
		</div>
	);
};

export default JobCard;
