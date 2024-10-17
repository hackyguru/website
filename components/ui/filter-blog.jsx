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
                <PopoverTrigger><Filter /></PopoverTrigger>
                <PopoverContent>
                    <div className="justify-center flex items-center">
                    <div>
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                className={`px-3 py-1 rounded-none mr-2 mb-2 inline-block ${activeTag === tag
                                        ? 'bg-gray-700 text-white hover:bg-gray-700'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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