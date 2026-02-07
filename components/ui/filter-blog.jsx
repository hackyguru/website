import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Filter } from "lucide-react";


const FilterBlogPosts = ({ tags, filterPosts, activeTag }) => {
    const handleTagClick = (tag) => {
        filterPosts(tag);
    };



    return (
        <div className="mb-6">
            <Popover>
                <PopoverTrigger className="text-zinc-400 hover:text-white transition-colors"><Filter /></PopoverTrigger>
                <PopoverContent className="bg-[#1c1c1c] border-white/10">
                    <div className="justify-center flex items-center">
                    <div>
                        <button
                                className={`px-3 py-1 font-mono text-sm mr-2 mb-2 inline-block transition-colors border ${!activeTag
                                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                        : 'bg-transparent text-zinc-500 border-white/5 hover:border-white/10 hover:text-zinc-300'
                                    }`}
                                onClick={() => handleTagClick(null)}
                            >
                                all
                        </button>
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                className={`px-3 py-1 font-mono text-sm mr-2 mb-2 inline-block transition-colors border ${activeTag === tag
                                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                        : 'bg-transparent text-zinc-500 border-white/5 hover:border-white/10 hover:text-zinc-300'
                                    }`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                        <button
                            className="bg-black text-white px-3 py-1 rounded-none hover:bg-black border"
                            onClick={() => filterPosts(null)}
                        >
                            Reset
                        </button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

        </div>
    );
};

export default FilterBlogPosts;