export interface Tdata {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}

// export type FilterType = "all" | "active" | "inactive";
export type FilterType = Set<string>;

export type ThemeType = "dark" | "light";
